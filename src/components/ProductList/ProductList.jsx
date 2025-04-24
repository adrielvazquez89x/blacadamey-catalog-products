import ProductCard from '../ProductCard/ProductCard'
import './ProductList.css';
import useFavoriteProducts from '../../hooks/useFavoriteProducts';


export default function ProductList({ products }) {

    const { favoriteProducts, checkProduct, addToFavorite, removeFromFavorite, isFaved } = useFavoriteProducts();


    return (
        <div className='container-products'>
            <ul className='products-list'>
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            producto={product}
                            favoriteProducts={favoriteProducts}
                            addToFavorite={addToFavorite}
                            removeFromFavorite={removeFromFavorite}
                            checkProduct={checkProduct}
                            isFaved={isFaved}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}
