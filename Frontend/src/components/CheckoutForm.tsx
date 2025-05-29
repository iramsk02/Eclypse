// import { useState, useEffect } from "react";
// import axios from "axios";

// interface Product {
//   _id: string;
//   name: string;
//   price: number;
//   images: string[];
// }

// interface CartItem {
//   _id: string;
//   userId: string;
//   productId: Product;
//   quantity: number;
// }

// const CheckoutForm = () => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const userId = 'user123'; // Replace with actual userId from auth or context

//   useEffect(() => {
//     const fetchCart = async () => {


//       try {
//         const response = await axios.get(`http://localhost:5000/api/cart/get/${userId}`);
//          const data = response.data.cart; // Extract `cart` array
//          console.log(data)
//          setCart(data)
//       } catch (error) {
//         console.error('Error fetching cart:', error);
//         return [];
//       }


//     };

//     fetchCart();
//   }, [userId]);

//   return (
//     <div className="bg-white text-black p-8 max-w-4xl mx-auto my-10 rounded">
//       <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
//       <form className="grid grid-cols-2 gap-4">
//         <input className="p-3 border" placeholder="First Name" />
//         <input className="p-3 border" placeholder="Last Name" />
//         <input className="col-span-2 p-3 border" placeholder="Street Address" />
//         <input className="p-3 border" placeholder="Apt Number" />
//         <input className="p-3 border" placeholder="State" />
//         <input className="col-span-2 p-3 border" placeholder="Zip" />
//         <button className="col-span-2 mt-4 p-3 bg-black text-white hover:opacity-90">Save This Address</button>
//       </form>

//       <div className="mt-10 bg-gray-100 p-4 rounded">
//         <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
//         <div className="flex justify-between">

//           <span>Item - Silhouette No. 1</span>
//           <span>₹ 7,999</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Shipping</span>
//           <span>₹ 200</span>
//         </div>
//         <div className="flex justify-between">
//           <span>Tax</span>
//           <span>₹ 1,400</span>
//         </div>
//         <div className="flex justify-between font-bold mt-2">
//           <span>Total</span>
//           <span>₹ 8,199</span>
//         </div>
//         <button className="mt-4 p-3 bg-black text-white w-full hover:opacity-90">Place Order</button>
//       </div>
//     </div>
//   );
// };

// export default CheckoutForm;
import { useState, useEffect } from "react";
import axios from "axios";
// import { Heading1 } from "lucide-react";
import { toast } from "react-toastify";
import Navbar from "./Navbar";

interface Product {
  _id: string;
  name: string;
  price: number;
  images: string[];
}

interface CartItem {
  _id: string;
  name: string;
  userId: string;
  productId: Product;
  quantity: number;
  price:number
}

const CheckoutForm = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [subTotal, setSubTotal] = useState(0);
  const shipping = 200;
  const taxRate = 0.18; // 18% tax

  const userId = 'user123'; // Replace with actual userId from auth or context

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`https://eclypse-backend-5li2.onrender.com/api/cart/get/${userId}`);
        const data = response.data.cart;
        console.log(data)
        setCart(data);

        // Calculate subtotal
        const total = data.reduce((sum: number, item: CartItem) => {
          return sum + item.price * item.quantity;
        }, 0);
        setSubTotal(total);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCart([]);
      }
    };

    fetchCart();
  }, [userId]);
  
  const placeOrder=()=>{
    toast.success("order placed successfully")
    setCart([])
    setSubTotal(0)
  }

  const tax = subTotal * taxRate;
  const total = subTotal + shipping + tax;
  if(!cart){
    return(<h1>Nothing in Cart</h1>)
  }

  return (<>      <Navbar/>
    <div className="bg-white text-black p-8 max-w-4xl mx-auto my-10 rounded">
    
      <h2 className="text-2xl font-bold mb-6">Shipping Address</h2>
      <form className="grid grid-cols-2 gap-4">
        <input className="p-3 border" placeholder="First Name" />
        <input className="p-3 border" placeholder="Last Name" />
        <input className="col-span-2 p-3 border" placeholder="Street Address" />
        <input className="p-3 border" placeholder="Apt Number" />
        <input className="p-3 border" placeholder="State" />
        <input className="col-span-2 p-3 border" placeholder="Zip" />
        <button className="col-span-2 mt-4 p-3 bg-black text-white hover:opacity-90">
          Save This Address
        </button>
      </form>

      <div className="mt-10 bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>

        {/* List all items */}
        {cart.map((item) => (
          <div key={item._id} className="flex justify-between py-1">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹ {(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}

        <hr className="my-2" />

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹ {subTotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹ {shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tax</span>
          <span>₹ {tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold mt-2">
          <span>Total</span>
          <span>₹ {total.toFixed(2)}</span>
        </div>
        <button onClick={placeOrder} className="mt-4 p-3 bg-black text-white w-full hover:opacity-90">
          Place Order
        </button >
      </div>
    </div>
    </>

  );
};

export default CheckoutForm;
