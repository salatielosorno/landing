export default function SectionTitle({ children, id }: { children: React.ReactNode; id?: string }) {
  return (
    <h2 id={id} className="text-balance text-center text-3xl font-bold text-white legend-shadow sm:text-4xl">
      {children}
    </h2>
  );
}
