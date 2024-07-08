import { Box } from "@mui/material";

import AppBar from "./components/AppBar";
import Hero from "./components/Hero";
//import ProductCard from "./components/ProductCard";
import Pinatas from "./components/Pinatas";
import Packages from "./components/Packages";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { products } from './data/products'

export default function Home() {
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
          <Gallery products={products} />
          {/* <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products &&
              products.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </div> */}
          <Pinatas />
          <Packages />
        </div>
      </Box>
    </Box>
    <Footer/>
  </>
}
