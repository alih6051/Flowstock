import React from "react";
import { GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";

const ProductItem = ({ category, image, price, rating, title }) => {
  return (
    <GridItem border="1px solid #dadcdf">
      <Image src={image} alt={title} />
      <Box padding="7px" h="130px">
        <Text fontSize="lg" color="#c7202c">
          Sale INR {price}
        </Text>
        <ReactStars size={25} value={rating} edit={false} isHalf={true} />
        <Text fontSize="sm" noOfLines={2}>
          {title}
        </Text>
      </Box>
      <Button borderRadius="0" width="100%">
        Add to Cart
      </Button>
    </GridItem>
  );
};

export default ProductItem;
