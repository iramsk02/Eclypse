import axios from "axios";
// import { Product } from "../types/Product";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import type { Product } from "../types/Product";


const ProductGrid = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const get_products = async () => {
            const res = await axios.get<Product[]>("https://eclypse-backend-5li2.onrender.com/api/products");
            const data = res.data.data;
            // console.log(data.data)
            setProducts(data)

        }
        get_products();
    }, []);

    return (
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-black">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
    );
};

export default ProductGrid;
