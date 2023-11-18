import React,{useState} from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Prenav from "./components/Prenav";
import Slider from "./components/Slider";
import { Route, Routes } from "react-router-dom";
import Bags from "./Bags";
import WomenShoes from "./components/WomenShoes";
import WomenApparels from "./components/WomenApparels";
import Kids from "./components/Kids";
import Accessories from "./components/Accessories";
import Beauty from "./components/Beauty";
import Sale from "./components/Sale";

import Dress from "./components/Dress";
import ProductDetails from "./components/ProductDetails";
import ProductDetailsApparels from "./components/ProductDetailsApparels";
import ProductDetailsBags from "./ProductDetailsBags";
import ProductDetailsKids from "./components/ProductDetailsKids";
import ProductDetailsAccessories from "./components/ProductDetailsAccessories";
import ProductDetailsBeauty from "./components/ProductDetailsBeauty";
import ProductDetailsSale from "./components/ProductDetailsSale";
import ContactUs from "./components/ContactUs";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/Modal";
import Admin from "./components/Admin";
import Quries from "./components/Quries";
import Users from "./components/Users";
import DbProducts from "./components/DbProducts";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProductForm from "./components/ProductForm";
import UpdateUser from "./components/UpdateUser";
import "./App.css";
import Cart from "./components/Cart";

// import { useSelector,useDispatch } from "react-redux";

function App() {
  //const count =useSelector((state)=>state.count)
  //const dispatch =useDispatch()
  // const [token, setToken] = useState();
  //if(!token) {
   //return <Login setToken={setToken} />
  //}
  const currentPath = window.location.pathname;

  return (
    <>
      {currentPath !== "/admin" ? (
        <>
          <Prenav />
          <Navbar />
        </>
      ) : (
        <Admin />
      )}
      <ToastContainer
        position="top-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/quries" element={<Quries />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/edit/:id" element={<UpdateUser />}></Route>
        <Route path="/dbproducts" element={<DbProducts />}></Route>
        <Route path="/productform" element={<ProductForm />}></Route>
        <Route path="/" element={<Slider />}></Route>
        <Route path="/sale" element={<Sale />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/dress" element={<Dress />}></Route>
        <Route path="/bags" element={<Bags />}></Route>
        <Route path="/womenshoes" element={<WomenShoes />}></Route>
        <Route path="/womenapparels" element={<WomenApparels />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/accessories" element={<Accessories />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>

        <Route path="/womenshoes/:id" element={<ProductDetails />}></Route>
        <Route
          path="/womenapparels/:id"
          element={<ProductDetailsApparels />}
        ></Route>
        <Route path="/bags/:id" element={<ProductDetailsBags />}></Route>
        <Route path="/kids/:id" element={<ProductDetailsKids />}></Route>
        <Route path="/sale/:id" element={<ProductDetailsSale />}></Route>
        <Route
          path="/accessories/:id"
          element={<ProductDetailsAccessories />}
        ></Route>
        <Route path="/beauty/:id" element={<ProductDetailsBeauty />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/modal/productdetails" element={<Modal />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>

      {currentPath !== "/admin" ? <Footer /> : null}
    </>
  );
}

export default App;
