import React from "react";
import { GridItem, Image, Box, Text, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { formatCurrency } from "../../utils/formatCurrency";

const ProductItem = ({ image, price, rating, title, id }) => {
  let { pathname } = useLocation();

  return (
    <GridItem border="1px solid #dadcdf">
      <RouterLink to={`${pathname}/${id}`}>
        <Image src={image} alt={title} />
        <Box padding="7px" h="130px">
          <Text fontSize="lg" color="#c7202c">
            Starting at {formatCurrency(price)}
          </Text>
          <ReactStars size={25} value={rating} edit={false} isHalf={true} />
          <Text fontSize="sm" noOfLines={2}>
            {title}
          </Text>
        </Box>
      </RouterLink>
      <Button borderRadius="0" width="100%">
        Add to Cart
      </Button>
    </GridItem>
  );
};

export default ProductItem;
