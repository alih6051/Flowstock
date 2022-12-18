import React from "react";
import { Box, Image } from "@chakra-ui/react";

const ProductImage = ({ image }) => {
  return (
    <Box>
      <Image
        src={image}
        width="100%"
        alt="Dan Abramov"
        border="1px solid #dadcdf"
      />
    </Box>
  );
};

export default ProductImage;
