import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import Account from "../pages/Account";
import SingleProduct from "../pages/SingleProduct";
import Newsletter from "../Components/Newsletter";
import Navbar from "../Components/Navbar/Navbar";
import CountryBar from "../Components/CountryBar";
import Footer from "../Components/Footer/Footer";
import { useLocation } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import Success from "../Components/Success";
import Cancel from "../Components/Cancel";

const AllRoutes = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname !== "/checkout" && <Newsletter />}

      {pathname !== "/checkout" && <CountryBar />}

      {pathname !== "/checkout" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myaccount" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/furniture" element={<Products />} />
        <Route path="/lighting" element={<Products />} />
        <Route path="/kitchen" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />

        <Route
          path="/payment/success"
          element={
            <PrivateRoutes>
              <Success />
            </PrivateRoutes>
          }
        />
        <Route
          path="/payment/failure"
          element={
            <PrivateRoutes>
              <Cancel />
            </PrivateRoutes>
          }
        />
        <Route path="/furniture/:id" element={<SingleProduct />} />
        <Route path="/lighting/:id" element={<SingleProduct />} />
        <Route path="/kitchen/:id" element={<SingleProduct />} />
        <Route path="*" element={<Home />} />
      </Routes>

      {pathname !== "/checkout" && <Footer />}
    </>
  );
};

export default AllRoutes;
