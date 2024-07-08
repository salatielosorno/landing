'use client'
import { useState } from 'react'

const LinkTo = ({ className, productName }: any) => {
    return <a className={className}
        href={`https://api.whatsapp.com/send/?phone=5212223609002&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20pi%C3%B1ata%20${productName}.`}
        target="_blank"
        rel="noreferrer">Lo quiero</a>
}

const CardBlock = ({ src, productId, productName, productDescription, isLoading, onLoadingComplete }: any) => {
    return <>
        <div className="w-full max-w-sm bg-[#86A69D] rounded-lg shadow-2xl">
            <a
                href={`https://api.whatsapp.com/send/?phone=5212223609002&text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20la%20pi%C3%B1ata%20${productName}.`}
                target="_blank"
                rel="noreferrer">
                <img className="rounded-t-lg" src={src} alt={productName} />
            </a>
            <div className="px-5 pt-5 pb-5">
                <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-white">{productName}</h5>
                    <p className='text-white'>{productDescription}</p>
                </a>
                <div className="flex items-center justify-between pt-6">
                    <LinkTo productName={productName} className="text-white bg-[#F2B263] hover:bg-bg-[#F2B263] focus:ring-4 focus:outline-none focus:ring-[#F2B263] font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer" />
                </div>
            </div>
        </div>
    </>
}

export default function ProductCard({ product }: any) {
    const [isLoading, setLoading] = useState(true)

    return <CardBlock src={product.imageGroups[0].images[0].link} productId={product.id} productName={product.name} productDescription={product.shortDescription} isLoading={isLoading} onLoadingComplete={() => setLoading(false)} />
}
