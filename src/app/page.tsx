import { Box } from "@mui/material";

import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Pinatas from "./components/Pinatas";
import Packages from "./components/Packages";
import Footer from "./components/Footer";

export default function Home() {

  const products = [
    {
      id: '001',
      imageGroups: [{ images: [{ link: '/images/merlina.jpeg' }] }],
      name: 'Merlina',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Merlina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '002',
      imageGroups: [{ images: [{ link: '/images/shinobu.jpeg' }] }],
      name: 'Shinobu',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Shinobu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '003',
      imageGroups: [{ images: [{ link: '/images/pikachu.jpeg' }] }],
      name: 'Pikachu',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Pikachu, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '004',
      imageGroups: [{ images: [{ link: '/images/birthday.jpeg' }] }],
      name: 'Birthday',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Birthday, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '005',
      imageGroups: [{ images: [{ link: '/images/tio-cosa.jpeg' }] }],
      name: 'Tío Cosa',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Tío Cosa, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '006',
      imageGroups: [{ images: [{ link: '/images/my-little-pony.jpeg' }] }],
      name: 'My Little Pony',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata My Little Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '007',
      imageGroups: [{ images: [{ link: '/images/guitar.jpeg' }] }],
      name: 'Guitar',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Guitarny, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '008',
      imageGroups: [{ images: [{ link: '/images/princesa-sofia.jpeg' }] }],
      name: 'Princesa Sofia',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Princesa Sofia, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '009',
      imageGroups: [{ images: [{ link: '/images/princesas-disney.jpeg' }] }],
      name: 'Princesas Disney',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Princesas Disney, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '010',
      imageGroups: [{ images: [{ link: '/images/unicornio.jpeg' }] }],
      name: 'Unicornio',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Unicornio, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '011',
      imageGroups: [{ images: [{ link: '/images/catrina.jpeg' }] }],
      name: 'Catrina',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Catrina, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '012',
      imageGroups: [{ images: [{ link: '/images/pony.jpeg' }] }],
      name: 'Pony',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Pony, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '013',
      imageGroups: [{ images: [{ link: '/images/sirenita.jpeg' }] }],
      name: 'La Sirenita',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata La Sinerita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '014',
      imageGroups: [{ images: [{ link: '/images/mariachi.jpeg' }] }],
      name: 'Mariachi',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Mariachi, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '015',
      imageGroups: [{ images: [{ link: '/images/gallinita.jpeg' }] }],
      name: 'Gallinita',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Gallinita, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '016',
      imageGroups: [{ images: [{ link: '/images/reno.jpeg' }] }],
      name: 'Rodolfo',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Rodolfo, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '017',
      imageGroups: [{ images: [{ link: '/images/snow-man.jpeg' }] }],
      name: 'Muñeco de nieve',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Muñeco de nieve, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '018',
      imageGroups: [{ images: [{ link: '/images/bautizo.jpeg' }] }],
      name: 'Mi Bautizo',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Bautizo, hecha con material de la más alta calidad. Ideal para bautizo.'
    },
    {
      id: '019',
      imageGroups: [{ images: [{ link: '/images/varios-1.jpeg' }] }],
      name: 'Varios',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    },
    {
      id: '020',
      imageGroups: [{ images: [{ link: '/images/varios-2.jpeg' }] }],
      name: 'Varios',
      price: '400.00 mxn',
      shortDescription: 'Piñata personalizada',
      longDescription: 'Piñata Varios, hecha con material de la más alta calidad. Ideal para cumpleaños.'
    }
  ]

  return <>
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ p: 3, pt: 0, pb: 0, m: "auto" }}>
        <AppBar />
        <Hero />
        <div id='pinatas' className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p
                className="mt-1 text-4xl font-bold text-white legend--text-shadow sm:text-5xl sm:tracking-tight lg:text-5xl"
              >
                Hechas a mano para ti.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div>
          <Pinatas />
          <Packages />
        </div>
      </Box>
    </Box>
    <Footer/>
  </>
}
