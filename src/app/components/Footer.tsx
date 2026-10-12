import Image from "next/image";
import { waLink } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-gold px-4 pb-24 pt-10 text-center text-sm text-ink">
      <p className="mx-auto max-w-2xl">
        Los precios no incluyen costo por envío. Pedidos con mínimo 5 días de anticipación al evento. Todos los pedidos pasan a lista de espera con el 50% de anticipo.
      </p>
      <p className="mt-6 font-semibold">Sofy Todo Fiesta · {new Date().getFullYear()}</p>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="fixed bottom-4 right-4 z-30 h-14 w-14 rounded-full shadow-lg transition active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Image src="/images/whats-icon.png" alt="" width={56} height={56} />
      </a>
    </footer>
  );
}
