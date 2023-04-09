import React from "react";
import { useState } from "react";
import {
  Text,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Flex,
  Checkbox,
  Button,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleCreateUser = () => {
    setLoading(true);
    axios
      .post(
        "https://ill-puce-bunny-cape.cyclic.app/api/users/register",
        formData
      )
      .then((res) => {
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      })
      .catch((err) => {
        toast({
          title: "Email already registered.",
          description: "Please use another email address.",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
      });
  };

  return (
    <GridItem
      w="100%"
      paddingX="40px"
      paddingY="40px"
      border="1px solid #dadcdf"
    >
      <Text as="b" color="#444" fontSize="2xl">
        Create Account
      </Text>
      <VStack paddingY="20px" align="left" spacing={5}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            value={formData.name}
            placeholder="Name"
            borderRadius="3px"
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Email"
            borderRadius="3px"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Flex
          justifyContent="space-between"
          flexDirection={{ base: "column", sm: "column", md: "row" }}
        >
          <FormControl
            isRequired
            w={{ base: "100%", sm: "100%", md: "45%" }}
            mb={{ base: "20px", sm: "20px", md: "0" }}
          >
            <FormLabel>Create Password</FormLabel>
            <Input
              placeholder="Password"
              type="password"
              onChange={(e) => handleChange(e)}
              value={formData.password}
              borderRadius="3px"
            />
          </FormControl>
          <FormControl isRequired w={{ base: "100%", sm: "100%", md: "45%" }}>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              placeholder="Confirm Password"
              type="password"
              borderRadius="3px"
            />
          </FormControl>
        </Flex>
        <Flex
          textAlign="left"
          alignItems="start"
          bg="#f9fafc"
          border="1px solid #dadcdf"
          padding="8px 20px"
          borderRadius="3px"
        >
          <Checkbox colorScheme="blue" marginRight="10px" marginTop="5px" />
          <Text fontSize="sm">
            Sign up today for exclusive offers from Overstock.com delivered
            right to your inbox**
          </Text>
        </Flex>
        <Button
          colorScheme="blue"
          size="md"
          borderRadius="3px"
          isLoading={loading}
          loadingText="Submitting"
          onClick={handleCreateUser}
        >
          Create Account
        </Button>
      </VStack>
    </GridItem>
  );
};

export default CreateUser;
