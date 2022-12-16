import React from "react";
import { useLocation } from "react-router-dom";
import { Container, Flex } from "@chakra-ui/react";
import Header from "../Components/ProductsPage/Header";
import FilterSection from "../Components/ProductsPage/FilterSection";
import ProductSection from "../Components/ProductsPage/ProductSection";

const Products = () => {
  let { pathname } = useLocation();

  return (
    <>
      <Header title={pathname} />

      {/* Products Page Body */}
      <Container maxW="92%" padding="0" marginBottom="50px">
        <Flex border="1px solid red" justifyContent="space-between">
          <FilterSection />
          <ProductSection />
        </Flex>
      </Container>
    </>
  );
};

export default Products;
