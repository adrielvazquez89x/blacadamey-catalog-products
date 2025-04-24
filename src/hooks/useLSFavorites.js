import { useEffect, useState } from 'react';

export default function useLSFavorites() {

    const [favoriteProducts, setFavoriteProducts] = useState(() => {
        const stored = localStorage.getItem("favoriteProducts");
        return stored ? JSON.parse(stored) : [];
    });


    useEffect(() => {
        localStorage.setItem("favoriteProducts", JSON.stringify(favoriteProducts));
    }, [favoriteProducts]);

    return [favoriteProducts, setFavoriteProducts];
}
