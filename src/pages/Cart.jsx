import React from "react";
import { Container, Grid, Text } from "@chakra-ui/layout";
import CartList from "../Components/CartPage/CartList";
import Checkout from "../Components/CartPage/Checkout";
import EmptyCart from "../Components/CartPage/EmptyCart";
import { useContext } from "react";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

// 1px solid #dadcdf

const Cart = () => {
  const { shoppingCart } = useContext(ShoppingCartContext);

  return (
    <Container maxW="7xl" marginY="30px">
      <Text color="#2f3337" fontSize="2xl" marginBottom="20px">
        Shopping Cart
      </Text>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={4}
      >
        {shoppingCart.length === 0 ? <EmptyCart /> : <CartList />}
        <Checkout />
      </Grid>
    </Container>
  );
};

export default Cart;
