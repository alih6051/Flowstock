import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import AuthContextProvider from "./Context/AuthContext";
import ShoppingCartContextProvider from "./Context/ShoppingCartContext";
import ScrollToTop from "./utils/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        <ShoppingCartContextProvider>
          <ScrollToTop />
          <App />
        </ShoppingCartContextProvider>
      </AuthContextProvider>
    </ChakraProvider>
  </BrowserRouter>
);
