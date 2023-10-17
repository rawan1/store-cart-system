import React, { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import { useFetchProducts } from "../../hooks";
import { TProduct } from '../../types';

const ProductList: React.FC = () => {
    const { fetchProduct, returnedMessage } = useFetchProducts();
    const [products, setProducts] = useState<Array<TProduct>>();

    useEffect(() => {
        fetchProduct(0, 10).then((data) => setProducts(data));
    }, []);
    console.log(products);
    if (returnedMessage) {
        alert(returnedMessage);
        return <></>;
    }
    return <div className="container">
        <div className="row">
            {
                products ? products.map((product) => {
                    return <>
                        <ProductCard productInfo={product}></ProductCard>
                    </>
                }) : <span>LOADING</span>
            }
        </div>
    </div>
}
export default ProductList;