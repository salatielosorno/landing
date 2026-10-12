import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";

const PACKAGES = [
  { name: "Paquete 1", items: ["2 piñatas básicas de 50cm diámetro", "Metálica", "Imagen a elección", "24 aguinaldos personalizados circulares"] },
  { name: "Paquete 2", items: ["1 piñata básica de 50cm diámetro", "1 piñata de 80cm diámetro", "Foamy o papel", "Imagen a elección", "24 aguinaldos personalizados circulares"] },
  { name: "Paquete 3", items: ["1 piñata básica de 50cm diámetro", "1 piñata de 80cm diámetro", "1 piñata de 1m diámetro", "Foamy o papel", "Imagen a elección", "24 aguinaldos personalizados cilíndricos"] },
];

export default function Packages() {
  return (
    <section id="paquetes" aria-labelledby="paquetes-title" className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle id="paquetes-title">Paquetes Fiesta</SectionTitle>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PACKAGES.map((p) => (
          <PricingCard key={p.name} name={p.name} items={p.items} message={`Hola, me gustaría información sobre el ${p.name.toLowerCase()}.`} />
        ))}
      </div>
    </section>
  );
}
