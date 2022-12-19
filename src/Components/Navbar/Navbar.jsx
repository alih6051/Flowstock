import React from "react";
import BrandIcon from "./BrandIcon";
import SearchBar from "./SearchBar";
import AccountIcon from "./AccountIcon";
import WishlistIcon from "./WishlistIcon";
import CartIcon from "./CartIcon";
import Navlink from "./Navlink";
import { Container, Flex, Box, Hide } from "@chakra-ui/react";

export const Links = [
  "Furniture",
  "Kitchen",
  "Lighting",
  "Bedding",
  "Home Improvement",
  "Rugs",
  "Outdoor",
  "Decor",
  "Kids & Baby",
  "Gifts",
  "More",
  "Holiday",
  "Sales & Deals",
];

const Navbar = () => {
  return (
    <Box style={{ position: "sticky", top: "0", zIndex: "1001" }}>
      <Container
        maxW="full"
        bg="#fff"
        paddingY="14px"
        borderBottom="1px solid #dadcdf"
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
      {/* Navigations links */}
      <Hide below="lg">
        <Container maxW="full" bg="#fff" borderY="1px solid #dadcdf">
          <Flex
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {Links.map((link, i) => (
              <Navlink key={i} name={link} />
            ))}
          </Flex>
        </Container>
      </Hide>
    </Box>
  );
};

export default Navbar;
