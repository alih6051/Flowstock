import React from "react";
import { Button, Container } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Text } from "@chakra-ui/react";
import { RxCross1 } from "react-icons/rx";

const Cancel = () => {
  return (
    <Container maxW="5xl" p="20px">
      <Flex
        flexDirection="column"
        padding="40px"
        justifyContent="center"
        alignItems="center"
      >
        <Box bg="#D0342C" rounded="full" p="15px">
          <RxCross1 color="#fff" fontSize="40px" />
        </Box>
        <Text fontSize="2xl" marginTop="20px">
          Order Failed !
        </Text>
        <Text fontSize="sm">We could not acquire the payment</Text>
        <RouterLink to="/cart">
          <Button colorScheme="yellow" mt="20px" rounded="none">
            TRY AGAIN
          </Button>
        </RouterLink>
      </Flex>
    </Container>
  );
};

export default Cancel;
