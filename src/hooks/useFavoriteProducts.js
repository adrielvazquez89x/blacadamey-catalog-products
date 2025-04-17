import { useEffect, useState } from "react";


export default function useFavoriteProduct(producto) {

    const [isProductFav, setIsProductFaved] = useState(false);
    const [favoriteProds, setFavoriteProds] = useState([]);

    useEffect(() => {
        //Primero chequeamos si hay productos favoritos en el localStorage, sino array vacio.
        const storedFavorites = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        console.log(storedFavorites);
        setFavoriteProds(storedFavorites);
        //una vez steado, buscamos si el producto actual es uno de los favoritos, para marcarle el corazon
        if (storedFavorites.find((fav) => fav.id === producto.id)) {
            setIsProductFaved(true);
        }
    }, [producto]); //para que funcione bien tengo que favoriteProds, pero se explota



    const handleToggleFav = () => {
        setIsProductFaved(!isProductFav);

        //Buscamos en el localStorage si el producto ya es favorito o no.
        //Si es favorito, lo sacamos del array de favoritos y lo guardamos en el localStorage.
        const checkFavorite = favoriteProds.find((fav) => fav.id === producto.id);

        console.log(checkFavorite);

        if (checkFavorite) {
            const updatedFavorites = favoriteProds.filter((prod) => prod.id !== producto.id);
            setFavoriteProds(updatedFavorites);
            localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));

        }
        else {
            const updatedFavorites = [...favoriteProds, producto];
            JSON.stringify(updatedFavorites);
            localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
        }

    }

    return {
        isProductFav,
        favoriteProds,
        handleToggleFav
    }
}
