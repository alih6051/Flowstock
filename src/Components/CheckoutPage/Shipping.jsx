import React from "react";
import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
} from "@chakra-ui/react";

const Shipping = ({ handleFormData }) => {
  return (
    <Box width={["100%", "100%", "50%", "50%", "50%", "50%"]} padding="20px">
      <Text as="b" color="#444" fontSize="2xl">
        Billing Address
      </Text>
      <FormControl marginTop="20px">
        <FormLabel>Full Name</FormLabel>
        <Input
          type="text"
          borderRadius="3px"
          placeholder="Enter your name"
          focusBorderColor="black"
          name="name"
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          borderRadius="3px"
          placeholder="Enter your email"
          focusBorderColor="black"
          name="email"
          onChange={handleFormData}
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel>Address</FormLabel>
        <Input
          type="text"
          borderRadius="3px"
          placeholder="Enter your address"
          focusBorderColor="black"
          name="address"
          onChange={handleFormData}
        />
      </FormControl>
      <FormControl marginTop="10px">
        <FormLabel>City</FormLabel>
        <Input
          type="text"
          borderRadius="3px"
          placeholder="City"
          focusBorderColor="black"
          name="city"
          onChange={handleFormData}
        />
      </FormControl>
      <Flex justifyContent="space-between" alignItems="center">
        <FormControl marginTop="10px" width="42%">
          <FormLabel>State</FormLabel>
          <Input
            type="text"
            borderRadius="3px"
            placeholder="State"
            focusBorderColor="black"
            name="state"
            onChange={handleFormData}
          />
        </FormControl>
        <FormControl marginTop="10px" width="42%">
          <FormLabel>Zip</FormLabel>
          <Input
            type="number"
            borderRadius="3px"
            placeholder="110001"
            focusBorderColor="black"
            name="zip"
            onChange={handleFormData}
          />
        </FormControl>
      </Flex>
    </Box>
  );
};

export default Shipping;
