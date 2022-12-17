import React from "react";
import { GridItem } from "@chakra-ui/react";
import PromoCode from "./PromoCode";
import CartTotal from "./CartTotal";

const Checkout = () => {
  return (
    <GridItem colSpan={[2, 2, 2, 1, 1, 1]} color="#2f3337">
      <PromoCode />
      <CartTotal />
    </GridItem>
  );
};

export default Checkout;
