import { useParams, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
// import { Product } from "../types/Product";
import type { Product } from "../types/Product";

import Navbar from "../components/Navbar";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error("Product fetch error", err));
  }, [id]);

  if (!product) return <div className="text-center p-20 text-white">Loading...</div>;

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-10 flex flex-col md:flex-row gap-10">
        <img src={product.image} className="w-full md:w-1/2 rounded-xl" alt={product.name} />
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-lg text-gray-300">{product.description}</p>
          <p className="text-2xl font-semibold text-green-400">₹{product.price}</p>
          <div className="space-x-4">
            {product.sizes.map(size => (
              <button key={size} className="border px-4 py-2 rounded text-sm hover:bg-white hover:text-black transition">
                {size}
              </button>
            ))}
          </div>
          <button onClick={() => navigate("/checkout")} className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
