import { createContext, useState } from "react";
import { isAlreadyAdded } from "../utils/isAlreadyAdded";
import useLocalStorage from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext();

export default function ShoppingCartContextProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useLocalStorage("flowstockCart", []);
  const [discountState, setDiscountState] = useState({
    isDiscount: false,
    amount: 0,
  });

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

  // Cart Total Item
  const cartTotalItem = () => {
    let total = shoppingCart.reduce((acc, el) => {
      return acc + el.quantity;
    }, 0);
    return total;
  };

  // Cart Total amount
  const cartTotalAmount = () => {
    let totalAmount = shoppingCart.reduce((acc, el) => {
      return acc + el.price * el.quantity;
    }, 0);
    return totalAmount;
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

  // Apply Discount
  const applyDiscount = (val) => {
    setDiscountState({ isDiscount: true, amount: val });
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        shoppingCart,
        addToCart,
        cartTotalItem,
        cartTotalAmount,
        updateItemQuantity,
        removeItem,
        discountState,
        applyDiscount,
        setShoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
