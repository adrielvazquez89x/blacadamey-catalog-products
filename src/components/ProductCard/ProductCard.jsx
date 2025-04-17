import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import './ProductCard.css';


export default function ProductCard({ producto, favoriteProducts, setFavoriteProducts }) {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);

    const [favorite, setFavorite] = useState(false);

    //Este useEffect es para el render del corazon
    useEffect(() => {
        if(favoriteProducts.some(fp => fp.id === producto.id)) {
            setFavorite(true);
        }
    }, [favoriteProducts, producto]);

    //Esto es para ir al detalle
    const handleSelected = () => {
        setSelected(!selected);
        navigate(`/products/${producto.id}`);
    }

    const handleSetFavorite = () => {
        setFavorite(!favorite);

        const exists = favoriteProducts.some(fp => fp.id === producto.id);
        console.log("HandleSetFavorite: ", exists);

        let updatedFavorites = [...favoriteProducts];

        if (!exists) {
            console.log("Se agregó correctamente.");
            updatedFavorites.push(producto);
            localStorage.setItem("favoriteProducts", JSON.stringify(updatedFavorites));
            setFavoriteProducts(updatedFavorites);
        }
        else {
            console.log("Se eliminó correctamente.");
            updatedFavorites = updatedFavorites.filter(fp => fp.id !== producto.id);
            localStorage.setItem("favoriteProducts", JSON.stringify(updatedFavorites));
            setFavoriteProducts(updatedFavorites);
        }
    }


    return (
        <div className="product-card">
            <img src={producto.image} alt={producto.title} className="product-img" />
            <div className="product-info">
                <h3 className="product-nombre">{producto.title}</h3>
                <p className="product-precio">${producto.price}</p>
                <div>
                    <label
                        className='add-favs'
                        onClick={handleSetFavorite}
                    >{favorite ? "❤️" : "🤍"}</label>
                </div>
                <button
                    className="product-btn"
                    onClick={handleSelected}
                >Details</button>
            </div>
        </div>
    );
}
