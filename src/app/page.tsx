import Header from "./components/Header";
import Hero from "./components/Hero";
import { PRODUCT_TYPES } from "./data/products";
import Portfolio from "./components/Portfolio";
import Pinatas from "./components/Pinatas";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        {PRODUCT_TYPES.map((t) => (
          <Portfolio key={t.id} type={t.id} />
        ))}
        <Pinatas />
        <Packages />
      </main>
      <Footer />
    </>
  );
}
