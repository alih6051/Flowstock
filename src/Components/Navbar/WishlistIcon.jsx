import React from "react";
import {
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { AiOutlineHeart } from "react-icons/ai";

const WishlistIcon = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          bg="none"
          paddingX="none"
          _hover="none"
          _active="none"
        >
          <VStack spacing={0} paddingTop="5px">
            <AiOutlineHeart fontSize="30px" />
            <Text fontSize="xs">Wishlist</Text>
          </VStack>
        </MenuButton>
        <MenuList borderRadius={0}>
          <MenuItem>In Progress...</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default WishlistIcon;
