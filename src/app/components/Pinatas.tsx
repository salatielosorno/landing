import PricingCard from "./PricingCard";
import SectionTitle from "./SectionTitle";

const common = ["Metálica", "Imagen a elección", "Foamy o papel"];
const SIZES = [
  { name: "Piñata Básica", items: ["Circular, 50cm diámetro", "Metálica", "Imagen a elección"] },
  { name: "Piñata Chica", items: ["Circular, 50cm diámetro", ...common] },
  { name: "Piñata Mediana", items: ["Circular, 80cm diámetro", ...common] },
  { name: "Piñata Jumbo", items: ["Circular, 1m diámetro", ...common] },
];

export default function Pinatas() {
  return (
    <section id="personalizar" aria-labelledby="personalizar-title" className="mx-auto max-w-6xl px-4 py-14">
      <SectionTitle id="personalizar-title">Piñata personalizada</SectionTitle>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SIZES.map((s) => (
          <PricingCard key={s.name} name={s.name} items={s.items} message={`Hola, me gustaría información sobre ${s.name}.`} />
        ))}
      </div>
    </section>
  );
}
