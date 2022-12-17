import React from "react";
import { Box, Divider, Flex, Text, Button } from "@chakra-ui/react";

const CartTotal = () => {
  return (
    <Box border="1px solid #dadcdf" marginTop="10px" padding="20px">
      <Flex justifyContent="space-between">
        <Text as="b" fontSize="md">
          (2) Items:
        </Text>
        <Text as="b" fontSize="md">
          INR 58,922.21
        </Text>
      </Flex>
      <Flex justifyContent="space-between">
        <Text fontSize="md">Discount:</Text>
        <Text fontSize="md" color="#c7202c">
          - INR 5,805.05
        </Text>
      </Flex>
      <Flex justifyContent="space-between" marginBottom="10px">
        <Text as="b" fontSize="md">
          Subtotal:
        </Text>
        <Text as="b" fontSize="md">
          INR 53,117.16
        </Text>
      </Flex>
      <Divider />
      <Flex justifyContent="space-between" marginTop="10px">
        <Text as="b" fontSize="xl">
          Your Total:
        </Text>
        <Text as="b" fontSize="xl">
          INR 53,117.16
        </Text>
      </Flex>
      <Button
        width="100%"
        bg="#2f3337"
        color="white"
        _hover={{ bg: "black" }}
        _active={{ bg: "black" }}
        size="lg"
        marginTop="20px"
      >
        Check Out
      </Button>
    </Box>
  );
};

export default CartTotal;
