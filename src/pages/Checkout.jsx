import React from "react";
import { Container, Grid, GridItem, Button, Box } from "@chakra-ui/react";
import Header from "../Components/CheckoutPage/Header";
import FormBody from "../Components/CheckoutPage/FormBody";
import CartTotal from "../Components/CartPage/CartTotal";
import OtpVerify from "../Components/CheckoutPage/OtpVerify";
import { useState } from "react";

const Checkout = () => {
  const [otpMenu, setOtpMenu] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    setTimeout(() => {
      setOtpMenu(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <Container maxW="5xl">
      <Header />
      <Grid
        h="200px"
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
        <GridItem colSpan={[2, 2, 2, 3, 3, 3]} border="1px solid #dadcdf">
          <FormBody />
          <Box padding="20px">
            <Button
              width="100%"
              borderRadius="3px"
              bg="#2f3337"
              color="white"
              _hover={{ bg: "black" }}
              _active={{ bg: "black" }}
              size="lg"
              onClick={handlePayment}
              isLoading={loading}
              loadingText="Processing payment"
            >
              Continue to payment
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1, 1, 1]}>
          <CartTotal />
          {otpMenu && <OtpVerify />}
        </GridItem>
      </Grid>
    </Container>
  );
};

export default Checkout;
