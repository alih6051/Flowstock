import React from "react";
import { GridItem, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const BrandItem = ({ img }) => {
  return (
    <RouterLink>
      <GridItem w="100%">
        <Image boxSize="100%" objectFit="cover" src={img} alt="Dan Abramov" />
      </GridItem>
    </RouterLink>
  );
};

export default BrandItem;
