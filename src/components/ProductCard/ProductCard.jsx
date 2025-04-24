import { useNavigate } from 'react-router';
import { useState } from 'react';
import './ProductCard.css';


export default function ProductCard({ producto, addToFavorite, removeFromFavorite, isFaved }) {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);

    //Este useEffect es para el render del corazon
    const favorite = isFaved(producto);

    //Esto es para ir al detalle
    const handleSelected = () => {
        setSelected(!selected);
        navigate(`/products/${producto.id}`);
    }

    const markFavorite = () => {
        addToFavorite(producto);
    }
    const unmarkFavorite = () => {
        removeFromFavorite(producto);
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
                        onClick={favorite ? unmarkFavorite : markFavorite}
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
