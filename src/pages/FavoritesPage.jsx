import { useEffect, useState } from "react";
import ProductList from "../components/ProductList/ProductList";

export default function FavoritesPage() {

    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        setFavoriteProducts(JSON.parse(localStorage.getItem("favoriteProducts")) || []);
    }, []);

    return (
        <div>
            <h1 style={{textAlign: "center", margin:"20px"}}>My favorite products</h1>
            <ProductList products={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />
        </div>
    )
} 

