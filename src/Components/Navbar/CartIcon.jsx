import React from "react";
import { VStack, Text } from "@chakra-ui/react";
import { BsCart } from "react-icons/bs";
import { Link as LinkRouter } from "react-router-dom";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const CartIcon = () => {
  const { cartTotalItem } = useContext(ShoppingCartContext);

  return (
    <LinkRouter to="/cart">
      <button style={{ position: "relative" }}>
        <VStack spacing={0} paddingTop="5px">
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
          {cartTotalItem()}
        </div>
      </button>
    </LinkRouter>
  );
};

export default CartIcon;
