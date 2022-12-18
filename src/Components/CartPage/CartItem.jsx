import React from "react";
import { Box, Text, Flex, Image, Select, Button } from "@chakra-ui/react";
import { formatCurrency } from "../../utils/formatCurrency";
import ReactStars from "react-rating-stars-component";
import { useState } from "react";

const CartItem = ({
  id,
  image,
  price,
  quantity,
  rating,
  title,
  updateItemQuantity,
  removeItem,
}) => {
  const [loading, setLoading] = useState(false);
  // Handle Quantity update
  const handleUpdateQuantity = (e) => {
    updateItemQuantity(id, Number(e.target.value));
  };

  // Handle remove Item
  const handleRemoveItem = () => {
    setLoading(true);
    setTimeout(() => {
      removeItem(id);
      setLoading(false);
    }, 700);
  };

  return (
    <Flex
      border="1px solid #dadcdf"
      padding="20px"
      justifyContent="space-between"
      marginBottom="10px"
    >
      <Box width="30%">
        <Image src={image} alt={title} />
      </Box>
      <Box width="67%" flexGrow="grow">
        <Text fontSize="lg">{title}</Text>
        <ReactStars size={25} value={rating} edit={false} isHalf={true} />

        <Text fontSize="lg" color="#c7202c" marginTop="20px">
          Sale {formatCurrency(price)}
        </Text>
        <Flex marginTop="30px">
          <Select
            size="sm"
            maxW="80px"
            borderRadius="3px"
            marginRight="20px"
            value={quantity}
            onChange={handleUpdateQuantity}
          >
            <option value="1">Qty 1</option>
            <option value="2">Qty 2</option>
            <option value="3">Qty 3</option>
            <option value="4">Qty 4</option>
            <option value="5">Qty 5</option>
            <option value="6">Qty 6</option>
            <option value="7">Qty 7</option>
            <option value="8">Qty 8</option>
            <option value="9">Qty 9</option>
            <option value="10">Qty 10</option>
          </Select>
          <Button
            bg="#2f3337"
            color="white"
            _hover={{ bg: "black" }}
            _active={{ bg: "black" }}
            size="sm"
            borderRadius="3px"
            isLoading={loading}
            onClick={handleRemoveItem}
          >
            Remove
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartItem;
