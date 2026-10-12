import Image from "next/image";
import logo from "../../../public/images/sofy-logo.png";
import { waLink } from "../data/site";
import Confetti from "./Confetti";

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-[85svh] flex-col items-center justify-center px-4 py-10 text-center">
      <Confetti />
      <Image
        src={logo}
        alt="Sofy Todo Fiesta"
        priority
        sizes="(max-width: 640px) 80vw, 480px"
        className="h-auto w-4/5 max-w-md"
      />
      <h1 className="mt-4 max-w-md text-balance text-3xl font-bold text-white legend-shadow sm:text-4xl">
        La vida es mejor con una piñata.
      </h1>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <a
          href={waLink("Hola, me gustaría cotizar una piñata.")}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-gold px-8 py-3.5 text-lg font-bold text-ink shadow-md transition hover:brightness-105 active:scale-95 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Cotiza por WhatsApp
        </a>
        <a
          href="#pinatas"
          className="rounded-full border-2 border-sage px-8 py-3 text-lg font-bold text-ink transition hover:bg-sage hover:text-white active:scale-95"
        >
          Ver piñatas
        </a>
      </div>
    </section>
  );
}
