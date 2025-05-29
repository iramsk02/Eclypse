
// import type { Product } from "../types/Product";


// interface ProductCardProps {
//   product: Product;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
//   <div className="text-white">
//     {(product.images).map((img)=>{return( <img src={img} alt={product.name} className="w-full h-[500px] object-cover mb-4" />)})
//    }
//     <h2 className="text-xl font-semibold">{product.name}</h2>
//     <p className="text-lg">₹ {product.price.toLocaleString()}</p>
//     <button className="mt-4 px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200">Buy</button>
//   </div>
// );

// export default ProductCard;
import type { Product } from "../types/Product";
import { useState } from "react";
interface ProductCardProps {
  product: Product;
}
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate()

  const [selectedSize, setSelectedSize] = useState<string>('M');

  const addToCart = async () => {
    try {
      const res = await axios.post('https://eclypse-backend-5li2.onrender.com/api/cart/add', {
        userId: "user123",
        productId: product._id,
        quantity: 1,
      });

      // alert(res.data.message);
      toast.success(res.data.message)
    } catch (error) {
      console.error(error);
      toast.error('Failed to add to cart');
    }
  };

  return (
    <div className="w-full bg-black text-white flex flex-col lg:flex-row gap-6 p-8">
      {/* Left: Main Lifestyle Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Right: Product Details */}
      <div className="w-full lg:w-1/2">
        {/* Description */}
        <p className="mb-4 text-sm text-gray-300">
          {product.description}
        </p>

        {/* Additional Views */}
        <div className="flex gap-4 overflow-x-auto mb-6">
          {product.images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${product.name} view ${index + 2}`}
              className="w-24 h-36 object-cover border border-gray-600"
            />
          ))}
         
        </div>

        {/* Price */}
        <p className="text-2xl font-semibold mb-2">
          ₹ {product.price.toLocaleString()} <span className="text-sm text-gray-400">MRP incl. of all taxes</span>
        </p>

        {/* Sizes */}
        <p className="mb-2 text-gray-400">Please select a size <span className="underline ml-2 cursor-pointer">Size chart</span></p>
        {/* <div className="flex gap-2 mb-6">
          {product.sizes.map(size => (
            <button onClick={() => setSelectedSize(size)}

              key={size}
              className="px-4 py-2 border border-white text-white hover:bg-white hover:text-black transition rounded"
            >
              {size}
            </button>
          ))}
        </div> */}

        <div className="flex space-x-3 m-5">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border font-medium transition-colors ${selectedSize === size
                ? 'border-black bg-gray-100 text-black'
                : 'border-gray-300 bg-black text-white hover:border-gray-400'
                }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button onClick={addToCart} className="flex-1 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200">
            Add to Cart
          </button>
          <button onClick={() => navigate("/checkout")} className="flex-1 px-6 py-3 bg-black text-white border border-white font-semibold rounded hover:bg-white hover:text-black">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
