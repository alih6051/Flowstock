import React, { useContext, useEffect } from "react";
import { Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { BsCheckCircleFill } from "react-icons/bs";
import { ShoppingCartContext } from "../Context/ShoppingCartContext";

const Success = () => {
  const { setShoppingCart } = useContext(ShoppingCartContext);

  useEffect(() => {
    localStorage.removeItem("flowstockCart");
    setShoppingCart([]);
  }, []);

  return (
    <Container maxW="5xl" p="20px">
      <Flex
        flexDirection="column"
        padding="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <BsCheckCircleFill color="#16a34a" fontSize="60px" />
        </Box>
        <Text fontSize="2xl" marginTop="20px">
          Payment Done !
        </Text>
        <Text fontSize="sm">
          Thank you for completing your secure online payment
        </Text>
        <Text as="b">Have a nice day !</Text>
        <RouterLink to="/">
          <Button colorScheme="green" mt="20px" rounded="none">
            Go to Home
          </Button>
        </RouterLink>
      </Flex>
    </Container>
  );
};

export default Success;
