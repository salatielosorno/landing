"use client";

import { useEffect } from "react";

const COLORS = ["#F2B263", "#86A69D", "#F2C6C2", "#F28585"];
const SESSION_KEY = "sofy-confetti";

/** Fires the side-cannon burst once per session, after first paint, off the main thread. */
export default function Confetti() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {}

    let cancelled = false;
    let reset: (() => void) | undefined;

    const launch = async () => {
      const { default: confetti } = await import("canvas-confetti");
      if (cancelled) return;
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch {}
      reset = () => confetti.reset();

      const count = window.innerWidth < 640 ? 60 : 120;
      const base = { particleCount: count, spread: 55, startVelocity: 55, ticks: 150, colors: COLORS, useWorker: true, disableForReducedMotion: true };
      confetti({ ...base, angle: 60, origin: { x: 0, y: 0.8 } });
      confetti({ ...base, angle: 120, origin: { x: 1, y: 0.8 } });
    };

    const idle = window.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 300));
    const cancelIdle = window.cancelIdleCallback ?? window.clearTimeout;
    const handle = idle(launch, { timeout: 1500 } as IdleRequestOptions);

    return () => {
      cancelled = true;
      cancelIdle(handle as number);
      reset?.();
    };
  }, []);

  return null;
}
