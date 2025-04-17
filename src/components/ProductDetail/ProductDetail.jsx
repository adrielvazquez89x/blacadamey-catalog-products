import './ProductDetail.css';
import { Link } from 'react-router';

export default function ProductDetail({ producto }) {

    if (producto.length === 0) {
        return <div className="detalle-container error">
            <h2>Oops! Product not found!</h2>
            <Link to={"/"} className="detalle-link">Go back to Home</Link>
        </div>;
    }

    return (
        <div className="detalle-container">
            <img src={producto.image} alt={producto.title} className="detalle-img" />
            <div className="detalle-info">
                <h2 className="detalle-title">{producto.title}</h2>
                <p className="detalle-description">{producto.description}</p>
                <p className="detalle-category">Categoría: {producto.category}</p>
                <p className="detalle-price">${producto.price}</p>
                <p className="detalle-rating">⭐ {producto.rating?.rate} ({producto.rating?.count} reviews)</p>
            </div>
        </div>
    );
}

