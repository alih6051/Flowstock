import { createContext, useState } from "react";
import { isAlreadyAdded } from "../utils/isAlreadyAdded";

export const ShoppingCartContext = createContext();

export default function ShoppingCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState([]);
  console.log("From Cart Context", shoppingCart);

  // Add to Cart
  const addToCart = (item) => {
    if (isAlreadyAdded(shoppingCart, item.id)) {
      let updated_cart = shoppingCart.map((el) =>
        el.id === item.id
          ? { ...el, quantity: el.quantity + item.quantity }
          : el
      );
      setShoppingCart(updated_cart);
    } else {
      setShoppingCart([...shoppingCart, item]);
    }
  };

  // Cart Total
  const cartTotalItem = () => {
    let total = shoppingCart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return total;
  };

  // Update Item Quantity
  const updateItemQuantity = (id, qty) => {
    let updated_cart = shoppingCart.map((item) =>
      item.id === id ? { ...item, quantity: qty } : item
    );
    setShoppingCart(updated_cart);
  };

  // Remove Item
  const removeItem = (id) => {
    let updated_cart = shoppingCart.filter((item) => {
      return item.id !== id;
    });
    setShoppingCart(updated_cart);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        cartTotalItem,
        updateItemQuantity,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
