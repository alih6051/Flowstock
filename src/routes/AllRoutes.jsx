import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Account from "../pages/Account";
import SingleProduct from "../pages/SingleProduct";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myaccount" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/furniture" element={<Products />} />
        <Route path="/lighting" element={<Products />} />
        <Route path="/kitchen" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/furniture/:id" element={<SingleProduct />} />
        <Route path="/lighting/:id" element={<SingleProduct />} />
        <Route path="/kitchen/:id" element={<SingleProduct />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
