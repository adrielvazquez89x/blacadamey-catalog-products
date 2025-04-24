import useLSFavorites from "./useLSFavorites";


export default function useFavoriteProducts() {

    const [favoriteProducts, setFavoriteProducts] = useLSFavorites([]);
    const addToFavorite = (producto) => {
        const isAlreadyFavorite = favoriteProducts.some(p => p.id === producto.id);
        setFavoriteProducts(isAlreadyFavorite
            ? favoriteProducts
            : [...favoriteProducts, producto]
        );
    }

    const removeFromFavorite = (producto) => {
        setFavoriteProducts(prev =>
            prev.filter(p => p.id !== producto.id)
        );
    }

    const isFaved = (producto) => {
        return favoriteProducts.some(p => p.id === producto.id);
    }


    return {
        favoriteProducts,
        addToFavorite,
        removeFromFavorite,
        isFaved
    }
}
