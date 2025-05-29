
// export default ProductList;
import { useEffect, useState } from "react";
import type { Product } from "../types/Product";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
   const get_products = async () => {
            const res = await axios.get<Product[]>("http://localhost:5000/api/products");
            const data = res.data.data;
            // console.log(data.data)
            setProducts(data)

        }
        get_products();
  }, []);

  return (
  
    <section className="flex flex-col gap-8 p-8 bg-black">
  {products.map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</section>

  );
};

export default ProductList;
