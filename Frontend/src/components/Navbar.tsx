import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-6 bg-black text-white">
    <h1 className="text-2xl font-semibold"><img src="/tshirt11.jpg" className="h-10" alt="" /></h1>
    <div className="space-x-6">
      <Link to="/">Home</Link>
      <Link to="/About">About us</Link>
      <Link to="/Wishlist">Wishlist</Link>
      <Link to="/checkout">Cart</Link>

    </div>
  </nav>
);

export default Navbar;
