import { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Loading from '../components/Layout/LoadingComponent/Loading';

export default function ProductDetailsPage() {

    const { id } = useParams();
    const { products, loading } = useProducts(id);
    const [product, setProduct] = useState({});


    useEffect(() => {
        setProduct(products);
        console.log(products);
    }, [id, products]);


    return (
        <div>
            {loading && <Loading />}
            {!loading && <ProductDetail producto={product} />}

        </div>
    )
}
