import React, { useContext } from "react";
import {
  VStack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  Box,
  Button,
  Flex,
  Link,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { VscAccount } from "react-icons/vsc";
import { AuthContext } from "../../Context/AuthContext";
import SignInDiv from "./SignInDiv";

const AccountIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { authState, handleLogout } = useContext(AuthContext);

  return (
    <>
      <Menu isOpen={isOpen}>
        <MenuButton
          as={Button}
          bg="none"
          paddingX="none"
          _hover="none"
          _active="none"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <VStack spacing={0} paddingTop="5px">
            <VscAccount fontSize="30px" />
            <Text fontSize="xs">Account</Text>
          </VStack>
        </MenuButton>
        <MenuList
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={onClose}
          borderRadius={0}
          maxW="150px"
        >
          <Box paddingX="15px">
            {/* Sign in Div */}
            {!authState.isAuth && <SignInDiv />}

            {/* body */}
            <Flex flexDirection="column" gap={2}>
              <Link fontSize="md">My Account</Link>
              <Link fontSize="md">My Orders</Link>
              <Link fontSize="md">My Reviews</Link>
              <Link fontSize="md">Help</Link>
            </Flex>
            <Divider marginY="10px" />

            {/* logout div */}
            {authState.isAuth && (
              <button
                onClick={() => {
                  setTimeout(() => {
                    handleLogout();
                  }, 500);
                }}
                style={{ width: "100%" }}
              >
                Sign Out
              </button>
            )}
          </Box>
        </MenuList>
      </Menu>
    </>
  );
};

export default AccountIcon;
