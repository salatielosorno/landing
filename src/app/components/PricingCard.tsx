import { waLink } from "../data/site";

interface Props {
  name: string;
  items: string[];
  message: string;
}

export default function PricingCard({ name, items, message }: Props) {
  return (
    <article className="flex flex-col rounded-2xl bg-sage p-6 text-white shadow-md">
      <h3 className="text-2xl font-bold">{name}</h3>
      <ul className="my-5 flex-1 space-y-3">
        {items.map((text) => (
          <li key={text} className="flex items-start gap-3">
            <svg className="mt-1 h-4 w-4 shrink-0" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
            </svg>
            <span className="leading-snug">{text}</span>
          </li>
        ))}
      </ul>
      <a
        href={waLink(message)}
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-gold py-3 text-center font-bold text-ink transition hover:brightness-105 active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-gold"
      >
        Lo quiero
      </a>
    </article>
  );
}
