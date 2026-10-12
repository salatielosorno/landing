"use client";

import { useState } from "react";
import { NAV_ITEMS } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-coral text-white shadow-md">
      <nav aria-label="Principal" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <a href="#inicio" className="text-lg font-bold tracking-wide">
          Sofy Todo Fiesta
        </a>
        <ul className="hidden gap-1 sm:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 font-semibold transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full hover:bg-white/20 sm:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      <ul
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/30 bg-coral px-2 pb-3 pt-1 sm:hidden"
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-lg font-semibold active:bg-white/20"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
