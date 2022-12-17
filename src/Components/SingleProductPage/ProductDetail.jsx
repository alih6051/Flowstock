import React from "react";
import { Box, Text, Flex, Select, Button } from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import { BsCartPlusFill } from "react-icons/bs";
import { formatCurrency } from "../../utils/formatCurrency";
import { useState } from "react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const ProductDetail = ({ title, category, rating, price, id, image }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const { addToCart } = useContext(ShoppingCartContext);

  const handleAddToCart = () => {
    setLoading(true);
    let item = {
      id,
      title,
      image,
      price,
      rating,
      quantity: quantity,
    };
    setTimeout(() => {
      addToCart(item);
      setLoading(false);
    }, 700);
  };

  return (
    <Box>
      <Text fontSize="xl" marginBottom="10px">
        {title}
      </Text>
      <Text fontSize="xs">Category : {category}</Text>
      <ReactStars size={25} value={rating} edit={false} isHalf={true} />
      <Text fontSize="2xl" color="#c7202c" marginBottom="30px">
        Sale {formatCurrency(price)}
      </Text>
      <Flex justifyContent="space-between">
        <Select
          placeholder="Quantity: 1"
          value={quantity}
          onChange={(e) => setQuantity(+e.target.value)}
          size="sm"
          width="45%"
        >
          <option value="1">Quantity: 1</option>
          <option value="2">Quantity: 2</option>
          <option value="3">Quantity: 3</option>
          <option value="4">Quantity: 4</option>
          <option value="5">Quantity: 5</option>
          <option value="6">Quantity: 6</option>
          <option value="7">Quantity: 7</option>
          <option value="8">Quantity: 8</option>
          <option value="9">Quantity: 9</option>
          <option value="10">Quantity: 10</option>
        </Select>
        <Button
          colorScheme="green"
          size="sm"
          leftIcon={<BsCartPlusFill />}
          width="45%"
          isLoading={loading}
          onClick={handleAddToCart}
        >
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductDetail;
