import axios from "axios";
import { useEffect, useState } from "react";


export default function useProducts(id) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {

        const url = "https://fakestoreapi.com/products/";

        setLoading(true);
        axios.get(id ? `${url}${id}` : url)
            .then((res) => {
                setProducts(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                setError(err);
                console.log("Error desde hook:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [id]);

    return {
        loading,
        products,
        error,
    }
}
