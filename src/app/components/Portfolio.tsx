"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { PRODUCT_TYPES, products, type ProductType } from "../data/products";
import Lightbox from "./Lightbox";
import SectionTitle from "./SectionTitle";

import { waLink } from "../data/site";

export default function Portfolio({ type }: { type: ProductType }) {
  const meta = PRODUCT_TYPES.find((t) => t.id === type)!;
  const own = useMemo(() => products.filter((p) => p.type === type), [type]);
  const [filter, setFilter] = useState("Todos");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "Todos" ? own : own.filter((p) => p.category === filter)),
    [filter, own]
  );
  const categories = Array.from(new Set(own.map((p) => p.category)));
  const filters = categories.length > 1 ? ["Todos", ...categories] : [];

  return (
    <section id={type} aria-labelledby={`${type}-title`} className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle id={`${type}-title`}>{meta.title}</SectionTitle>
      <p className="mt-3 text-center text-lg">{meta.tagline}.{own.length > 0 && " Toca uno para verlo y pedir el tuyo."}</p>

      {own.length === 0 && (
        <div className="mx-auto mt-8 max-w-md rounded-2xl bg-white/70 p-6 text-center shadow-sm">
          <p className="text-lg font-semibold">Estamos preparando nuestra galería de {meta.title.toLowerCase()}.</p>
          <p className="mt-1">Mientras tanto, cuéntanos qué necesitas y lo hacemos para ti.</p>
          <a
            href={waLink(`Hola, me gustaría información sobre ${meta.title.toLowerCase()}.`)}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block rounded-full bg-gold px-6 py-3 font-bold text-ink active:scale-95"
          >
            Cotizar {meta.title.toLowerCase()}
          </a>
        </div>
      )}

      {filters.length > 0 && <div className="sticky top-14 z-30 -mx-4 mt-6 bg-cream/90 px-4 py-3 backdrop-blur">
        <div role="group" aria-label="Filtrar por categoría" className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] sm:justify-center">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`min-h-11 shrink-0 rounded-full px-5 font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral ${
                filter === f ? "bg-coral text-white shadow" : "bg-white/70 text-ink hover:bg-blush"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>}

      <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {visible.map((p, i) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Ver ${p.alt}`}
              className="group relative block aspect-[2/3] w-full overflow-hidden rounded-2xl bg-blush shadow-sm focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-coral"
            >
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-10 text-left text-sm font-bold text-white">
                {p.name}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Lightbox items={visible} index={active} onIndex={setActive} />
    </section>
  );
}
