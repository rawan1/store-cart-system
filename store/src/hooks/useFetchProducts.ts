import { useState } from "react";
import { TProduct } from "../types";

export const useFetchProducts = () => {

    const [returnedMessage, setReturnedMessage] = useState();

    const fetchProduct = async (currentPage: number, itemsPerPage: number) => {
        const url = `https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=${itemsPerPage}`;
        return await fetch(url, { method: 'GET', })
            .then((res) => res.json())
            .then((res) => res.map((product: TProduct) => { return { ...product, state: 'normal' } }))
            .catch((error) => setReturnedMessage(error.error));
    }
    return {
        fetchProduct,
        returnedMessage
    }
}