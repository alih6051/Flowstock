import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

const Payment = () => {
  return (
    <Box width="50%" padding="20px">
      <Text as="b" color="#444" fontSize="2xl">
        Payment
      </Text>
      <FormControl marginTop="20px">
        <FormLabel>Name on Card</FormLabel>
        <Input
          type="text"
          borderRadius="3px"
          placeholder="Hasan"
          focusBorderColor="black"
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel>Debit / Credit Card number</FormLabel>
        <Input
          type="number"
          borderRadius="3px"
          placeholder="1111-2222-3333-4444"
          focusBorderColor="black"
          name="card"
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel>Exp Month</FormLabel>
        <Input
          type="number"
          borderRadius="3px"
          placeholder="November"
          focusBorderColor="black"
          name="month"
        />
      </FormControl>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl marginTop="10px" width="42%">
          <FormLabel>Exp Year</FormLabel>
          <Input
            type="number"
            borderRadius="3px"
            placeholder="2025"
            focusBorderColor="black"
            name="year"
          />
        </FormControl>
        <FormControl marginTop="10px" width="42%">
          <FormLabel>CVV</FormLabel>
          <Input
            type="number"
            borderRadius="3px"
            placeholder="598"
            focusBorderColor="black"
            name="cvv"
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Payment;
