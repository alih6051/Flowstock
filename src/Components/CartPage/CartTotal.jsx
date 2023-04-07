import React from "react";
import { Box, Divider, Flex, Text, Button } from "@chakra-ui/react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { useContext } from "react";
import { formatCurrency } from "../../utils/formatCurrency";
import { calculateDiscount } from "../../utils/calculateDiscount";
import { Link as RouterLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import { useState } from "react";
import axios from "axios";

const CartTotal = () => {
  const { authState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const { cartTotalItem, cartTotalAmount, discountState, shoppingCart } =
    useContext(ShoppingCartContext);

  const createStripeCheckout = async () => {
    setLoading(true);
    try {
      axios
        .post(
          "https://flowstock-stripe-backend.onrender.com/stripe-create-checkout",
          shoppingCart
        )
        .then((res) => {
          setLoading(false);
          window.location.href = res.data.url;
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data.error);
          return Promise.reject(err);
        });
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

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
      {authState.isAuth ? (
        <Button
          disabled={shoppingCart.length === 0}
          width="100%"
          bg="#2f3337"
          color="white"
          _hover={{ bg: "black" }}
          _active={{ bg: "black" }}
          size="lg"
          marginTop="20px"
          isLoading={loading}
          loadingText="Processing"
          onClick={createStripeCheckout}
        >
          Check Out
        </Button>
      ) : (
        <RouterLink to="/myaccount">
          <Button
            width="100%"
            bg="#2f3337"
            color="white"
            _hover={{ bg: "black" }}
            _active={{ bg: "black" }}
            size="lg"
            marginTop="20px"
          >
            Sign In first to checkout
          </Button>
        </RouterLink>
      )}
    </Box>
  );
};

export default CartTotal;
