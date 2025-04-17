import { useEffect, useState } from "react";
import InputText from "../components/InputText/InputText.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";
import useProducts from "../hooks/useProducts.js";
import Loading from "../components/Layout/LoadingComponent/Loading.jsx";

export default function Home() {

    const { loading, products } = useProducts();
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleInputChange = (value) => {
        console.log(value);
        const filtered = products.filter((product) => { return product.title.toLowerCase().includes(value.toLowerCase()) });
        setFilteredProducts(filtered);

    }

    return (
        <div>
            <div>
                <InputText placeholder={"Refine your search"} handleInputChange={handleInputChange} />
            </div>

            {loading && <Loading />}
            {!loading && (
                <ProductList products={filteredProducts} />
            )}
        </div>
    )
}
