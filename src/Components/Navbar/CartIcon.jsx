import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { BsCart, BsJustify } from "react-icons/bs";

const CartIcon = () => {
  return (
    <button style={{ position: "relative" }}>
      <VStack VStack spacing={0} paddingTop="5px">
        <BsCart fontSize="30px" />
        <Text fontSize="xs">Cart</Text>
      </VStack>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "18px",
          fontSize: "15px",
          background: "#ff1f2c",
          color: "white",
          borderRadius: "50%",
          width: "22px",
          height: "22px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        0
      </div>
    </button>
  );
};

export default CartIcon;
