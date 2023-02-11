import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import ProductItem from "./ProductItem";

const ProductList = ({ productData }) => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
      paddingY="20px"
    >
      {productData.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
