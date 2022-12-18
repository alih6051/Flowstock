import React from "react";
import { Box, Divider, Flex, Text, Button } from "@chakra-ui/react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { useContext } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { calculateDiscount } from "../../utils/calculateDiscount";
import { useLocation } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const CartTotal = () => {
  const { cartTotalItem, cartTotalAmount, discountState } =
    useContext(ShoppingCartContext);

  const { pathname } = useLocation();

  return (
    <Box border="1px solid #dadcdf" padding="20px">
      <Flex justifyContent="space-between">
        <Text as="b" fontSize="md">
          ({cartTotalItem()}) Items:
        </Text>
        <Text as="b" fontSize="md">
          {formatCurrency(cartTotalAmount())}
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="md">Discount:</Text>
        <Text fontSize="md" color="#c7202c">
          -{" "}
          {discountState.isDiscount
            ? formatCurrency(
                calculateDiscount(cartTotalAmount(), discountState.amount)
              )
            : "0.00"}
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginBottom="10px">
        <Text as="b" fontSize="md">
          Subtotal:
        </Text>
        <Text as="b" fontSize="md">
          {formatCurrency(
            cartTotalAmount() -
              calculateDiscount(cartTotalAmount(), discountState.amount)
          )}
        </Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between" marginTop="10px">
        <Text as="b" fontSize="xl">
          Your Total:
        </Text>
        <Text as="b" fontSize="xl">
          {formatCurrency(
            cartTotalAmount() -
              calculateDiscount(cartTotalAmount(), discountState.amount)
          )}
        </Text>
      </Flex>
      {pathname !== "/checkout" ? (
        <RouterLink to="/checkout">
          <Button
            width="100%"
            bg="#2f3337"
            color="white"
            _hover={{ bg: "black" }}
            _active={{ bg: "black" }}
            size="lg"
            marginTop="20px"
          >
            Check Out
          </Button>
        </RouterLink>
      ) : null}
    </Box>
  );
};

export default CartTotal;
