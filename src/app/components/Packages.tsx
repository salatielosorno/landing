import { PricingCard } from "./Pinatas";

export default function Packages() {

    return <>
        <div id='paquetes' className="sm:py-15 mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center">
                <p
                    className="mt-1 text-4xl font-bold text-white legend--text-shadow sm:text-5xl sm:tracking-tight lg:text-5xl">
                    Paquetes Fiesta
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <PricingCard packageName="Paquete 1" price="1149.99" oldPrice='1460.00' packageItems={[{ text: "2 piñatas básicas de 50cm diametro" }, { text: "Metálica" }, { text: "Imagen a elección" }, { text: "24 aguinaldos personalizados circulares" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20paquete%201." />
            <PricingCard packageName="Paquete 2" price="1379.99" oldPrice='1560.00' packageItems={[{ text: "1 piñata básicas de 50cm diametro" }, { text: "1 piñata de 80cm diametro" }, { text: "Foamy o papel" }, { text: "Imagen a elección" }, { text: "24 aguinaldos personalizados circulares" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20paquete%202." />
            <PricingCard packageName="Paquete 3" price="1939.99" oldPrice='2120.00' packageItems={[{ text: "1 piñata básicas de 50cm diametro" }, { text: "1 piñata de 80cm diametro" }, { text: "1 piñata de 1m diametro" }, { text: "Foamy o papel" }, { text: "Imagen a elección" }, { text: "24 aguinaldos personalizados cilíndricos" }]} packageLink="https://api.whatsapp.com/send/?phone=5212251107907&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20el%20paquete%203." />
        </div >
    </>
}