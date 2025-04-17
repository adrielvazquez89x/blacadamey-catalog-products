import { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css';

export default function ProductList({ products }) {

    const [favoriteProducts, setFavoriteProducts] = useState([]);


    useEffect(() => {
        setFavoriteProducts(localStorage.getItem("favoriteProducts") ? JSON.parse(localStorage.getItem("favoriteProducts")) : []);

    }, []);

    return (
        <div className='container-products'>
            <ul className='products-list'>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard producto={product} favoriteProducts={favoriteProducts} setFavoriteProducts={setFavoriteProducts} />
                    </li>
                ))}
            </ul>
        </div>
    )
}
