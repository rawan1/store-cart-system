import React, { useEffect, useState } from "react";
import { ProductCard } from "./productCard";
import { useFetchProducts } from "../../hooks";
import { TProduct } from '../../types';
import '../../styles/ProductList.css';
import { Cart } from "../cart/cart";

const ProductList: React.FC = () => {
    const { fetchProduct, returnedMessage } = useFetchProducts();
    const [products, setProducts] = useState<Array<TProduct>>();
    const [currentPage, setCurrentPage] = useState<number>(0);
    useEffect(() => {
        fetchProduct(currentPage, 20).then((data) => setProducts(data));
    }, []);

    if (returnedMessage) {
        alert(returnedMessage);
        return <></>;
    }
    return <div className="dashboard-container">
        <div className="col">
            <Cart></Cart>
        </div>
        <div className="col">
            <div className="grid-container">
                {
                    products ? products.map((product) => {
                        return <>
                            <ProductCard productInfo={product}></ProductCard>
                        </>
                    }) : <span>LOADING</span>
                }
            </div>
        </div>

    </div>
}
export default ProductList;
