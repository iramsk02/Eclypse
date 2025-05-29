// // import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import './App.css'

// // import CheckoutPage from './components/CheckoutPage'
// // import Store from './components/Store'
// import ProductDetails from './components/ProductDetails'
// // import ProductList from './components/ProductList'

// function App() {

//   return (
//     <>
//       {/* <BrowserRouter>
//         <Routes>
//           <Route path='/' element={<Store/>}></Route>
//           <Route path='/checkout' element={<CheckoutPage />}></Route>

//         </Routes>
//       </BrowserRouter> */}

//       <ProductDetails/>
//       {/* <ProductList/> */}

//     </>
//   )
// }

// export default App
import {  Routes, Route } from "react-router-dom";
import HomePage from "./Pages/Home";
import CheckoutPage from "./Pages/Checkout";
import { ToastContainer } from "react-toastify";

function App() {
  return (
     <div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  );
}

export default App;
