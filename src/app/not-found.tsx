import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/sofy-logo.png";

export default function NotFound() {
  return (
    <main className="flex min-h-[100svh] flex-col items-center justify-center px-4 py-10 text-center">
      <Image src={logo} alt="Sofy Todo Fiesta" priority sizes="240px" className="h-auto w-48" />
      <p className="mt-4 text-7xl font-bold text-white legend-shadow">404</p>
      <h1 className="mt-2 text-balance text-2xl font-bold sm:text-3xl">¡Ups! No encontramos esta página.</h1>
      <p className="mt-2 max-w-sm text-lg">Puede que el enlace esté mal o que la página ya no exista. Vuelve al inicio para ver nuestras piñatas, recuerdos, moños y dulceros.</p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3">
        <Link href="/" className="rounded-full bg-gold px-8 py-3.5 text-lg font-bold text-ink shadow-md active:scale-95">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
