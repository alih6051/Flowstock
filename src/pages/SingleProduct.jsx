import React from "react";
import { useLocation } from "react-router";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import LoaderSingle from "../Components/LoaderSingle";
import axios from "axios";
import ProductImage from "../Components/SingleProductPage/ProductImage";
import ProductDetail from "../Components/SingleProductPage/ProductDetail";

const SingleProduct = () => {
  let { pathname } = useLocation();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://flowstock-json-server.onrender.com${pathname}`)
      .then(({ data }) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [pathname]);

  return (
    <Container
      maxW={{ base: "90%", sm: "90%", md: "60%" }}
      color="#262626"
      marginY="30px"
      paddingX="0"
    >
      {loading ? (
        <LoaderSingle />
      ) : (
        <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} spacing={10}>
          <ProductImage {...product} />
          <ProductDetail {...product} />
        </SimpleGrid>
      )}
    </Container>
  );
};

export default SingleProduct;
