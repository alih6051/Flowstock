import React from "react";
import { GridItem } from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";

const CartList = () => {
  const { shoppingCart, updateItemQuantity, removeItem } =
    useContext(ShoppingCartContext);

  return (
    <GridItem colSpan={[2, 2, 2, 3, 3, 3]}>
      {shoppingCart &&
        shoppingCart.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            updateItemQuantity={updateItemQuantity}
            removeItem={removeItem}
          />
        ))}
    </GridItem>
  );
};

export default CartList;
