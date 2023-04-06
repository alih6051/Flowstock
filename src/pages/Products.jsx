import React from "react";
import { useLocation } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Header from "../Components/ProductsPage/Header";
import Loader from "../Components/Loader";
import Sort from "../Components/ProductsPage/Sort";
import ProductList from "../Components/ProductsPage/ProductList";
import Pagination from "../Components/ProductsPage/Pagination";
import axios from "axios";

const Products = () => {
  let { pathname } = useLocation();

  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://flowstock-json-server.onrender.com${pathname}?${order}_page=${page}&_limit=20`
      )
      .then(({ data }) => {
        setProductData(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [pathname, order, page]);

  const handleOrder = (val) => {
    setOrder(`_sort=price&_order=${val}&`);
  };

  return (
    <>
      <Header title={pathname} />

      {/* Products Page Body */}
      <Container maxW="92%" padding="0" marginBottom="50px">
        {/* Sorting Component */}
        <Sort handleOrder={handleOrder} />

        {/* Products List */}
        {loading ? <Loader /> : <ProductList productData={productData} />}
        <Pagination
          currentPage={page}
          total={3}
          onChange={(val) => setPage(val)}
        />
      </Container>
    </>
  );
};

export default Products;
