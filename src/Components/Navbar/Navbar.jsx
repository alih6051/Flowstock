import React from "react";
import BrandIcon from "./BrandIcon";
import SearchBar from "./SearchBar";
import AccountIcon from "./AccountIcon";
import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import { Container, Flex, Box } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container
      maxW="full"
      bg="white"
      paddingY="18px"
      style={{ position: "sticky", top: "0" }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <BrandIcon />
        </Box>
        <Box flex="1">
          <SearchBar />
        </Box>
        <Box marginX="20px">
          <Flex gap={7} justifyContent="space-between" alignItems="center">
            <AccountIcon />
            <WishlistIcon />
            <CartIcon />
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navbar;
