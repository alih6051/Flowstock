import React from "react";
import { SimpleGrid, Box } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const ProductList = ({ productData }) => {
  return (
    <SimpleGrid columns={[1, 2, 3, 3, 4, 4]} spacing={7} paddingY="20px">
      {productData.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
