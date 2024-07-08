import { Fragment } from "react";
import { IProduct } from "../data/products";

const CreateColumn = ({ products }: any) => (
    <div className="grid gap-4">
        {products.map((product: IProduct, index: number) => (
            <Fragment key={index}>
                <div>
                    <img className="h-auto max-w-full rounded-lg" src={product.imageGroups[0].images[0].link} alt="" />
                </div>
            </Fragment>
        ))}
    </div>
)

export default function Gallery({ products }: { products: Array<IProduct> }) {
    const productsLength = products.length;
    const isPair = productsLength % 4;
    const rounds = isPair === 0 ? productsLength / 4 : (productsLength - isPair) / 4;
    const blocks = [];

    for (let index = 0; index < rounds; index++) {
        const start = index * 4;
        blocks.push(products.slice(start, start + 4));
    }

    return <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {blocks.map((products, index) => <Fragment key={index}><CreateColumn products={products} /></Fragment>)}
        </div>
    </>
}