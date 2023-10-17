import { useState } from "react";

export const useFetchProducts = () => {

    const [returnedMessage, setReturnedMessage] = useState();

    const fetchProduct = async (currentPage: number, itemsPerPage: number) => {
        const url = `https://api.escuelajs.co/api/v1/products?offset=${currentPage}&limit=${itemsPerPage}`;
        return await fetch(url, { method: 'GET', })
            .then((res) => res.json())
            .catch((error) => setReturnedMessage(error.error));
    }
    return {
        fetchProduct,
        returnedMessage
    }
}