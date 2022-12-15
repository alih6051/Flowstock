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
  Flex,
  Link,
  Divider,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { Link as LinkRouter } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const SignInDiv = () => {
  return (
    <>
      <LinkRouter to="/myaccount">
        <Flex justifyContent="space-between" alignItems="center">
          <Link as="b" fontSize="lg">
            Sign in
          </Link>
          <BsChevronRight fontSize="18px" />
        </Flex>
        <Text fontSize="sm" paddingY="10px">
          View your account and <br /> check order your status.
        </Text>
        <Divider marginBottom="15px" />
      </LinkRouter>
      <LinkRouter to="/myaccount">
        <Flex justifyContent="space-between" alignItems="center">
          <Link as="b" fontSize="lg">
            Create an Account
          </Link>
          <BsChevronRight fontSize="18px" />
        </Flex>
        <Text fontSize="sm" paddingY="10px">
          Track orders, save items <br /> to lists and more!
        </Text>
        <Divider marginBottom="15px" />
      </LinkRouter>
    </>
  );
};

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
        <MenuList borderRadius={0} maxW="150px">
          <Box paddingX="15px">
            {/* Sign in Div */}
            {!false && <SignInDiv />}

            {/* body */}
            <Flex flexDirection="column" gap={2}>
              <Link fontSize="md">My Account</Link>
              <Link fontSize="md">My Orders</Link>
              <Link fontSize="md">My Reviews</Link>
              <Link fontSize="md">Help</Link>
            </Flex>
            <Divider marginY="10px" />

            {/* logout div */}
            <button>Sign Out</button>
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};

export default AccountIcon;
