import React from "react";
import {
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";

const AccountIcon = () => {
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
          <VStack VStack spacing={0} paddingTop="5px">
            <VscAccount fontSize="30px" />
            <Text fontSize="xs">Account</Text>
          </VStack>
        </MenuButton>
        <MenuList borderRadius={0}>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default AccountIcon;
