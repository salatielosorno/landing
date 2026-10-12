"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import type { IProduct } from "../data/products";
import { waLink } from "../data/site";

interface Props {
  items: IProduct[];
  index: number | null;
  onIndex: (i: number | null) => void;
}

export default function Lightbox({ items, index, onIndex }: Props) {
  const ref = useRef<HTMLDialogElement>(null);
  const touchX = useRef<number | null>(null);
  const item = index === null ? null : items[index];

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (index !== null && !d.open) d.showModal();
    if (index === null && d.open) d.close();
  }, [index]);

  const go = (delta: number) => {
    if (index === null) return;
    onIndex((index + delta + items.length) % items.length);
  };

  return (
    <dialog
      ref={ref}
      aria-label={item ? item.alt : "Galería"}
      onClose={() => onIndex(null)}
      onClick={(e) => e.target === ref.current && onIndex(null)}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
        touchX.current = null;
      }}
      className="m-auto h-[100dvh] w-full max-w-lg bg-transparent p-0 backdrop:bg-black/80 sm:h-auto sm:max-h-[95dvh]"
    >
      {item && (
        <div className="relative flex h-full flex-col bg-cream sm:rounded-2xl sm:overflow-hidden">
          <div className="relative min-h-0 flex-1 sm:aspect-[2/3] sm:flex-none">
            <Image src={item.image} alt={item.alt} fill sizes="(min-width: 512px) 512px, 100vw" className="object-cover" priority />
            <button
              type="button"
              aria-label="Cerrar"
              onClick={() => onIndex(null)}
              className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
            </button>
            {(["prev", "next"] as const).map((dir) => (
              <button
                key={dir}
                type="button"
                aria-label={dir === "prev" ? "Anterior" : "Siguiente"}
                onClick={() => go(dir === "prev" ? -1 : 1)}
                className={`absolute top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white ${dir === "prev" ? "left-3" : "right-3"}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
                </svg>
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between gap-3 p-4">
            <div>
              <p className="text-xl font-bold">{item.name}</p>
              <p className="text-sm">{item.category}</p>
            </div>
            <a
              href={waLink(`Hola, me gustaría pedir algo como ${item.name}.`)}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gold px-5 py-3 font-bold text-ink active:scale-95"
            >
              Pedir este
            </a>
          </div>
        </div>
      )}
    </dialog>
  );
}
