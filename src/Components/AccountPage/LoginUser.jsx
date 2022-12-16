import React, { useState, useContext } from "react";
import {
  Text,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  Link,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";

const LoginUser = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { handleLogin } = useContext(AuthContext);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.type]: e.target.value });
  };

  const handleLoginUser = () => {
    setLoading(true);
    axios
      .post("https://dull-tan-antelope-tux.cyclic.app/signIn", formData)
      .then(({ data }) => {
        toast({
          title: data.message,
          description: "You are Successfully Logged in.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
        setLoading(false);
        handleLogin(data.user[0], data.token);
      })
      .catch((err) => {
        toast({
          title: "Invaild Email or Password",
          description: "Please check your Email and Password.",
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
      boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <Text as="b" color="#444" fontSize="2xl">
        Sign In
      </Text>
      <VStack paddingY="20px" spacing={5}>
        <FormControl isRequired>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            borderRadius="3px"
            value={formData.email}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Password"
            type="password"
            borderRadius="3px"
            value={formData.password}
            onChange={(e) => handleChange(e)}
          />
        </FormControl>
        <Button
          colorScheme="green"
          size="md"
          width="100%"
          borderRadius="3px"
          isLoading={loading}
          loadingText="Logging In"
          onClick={handleLoginUser}
        >
          Sign In
        </Button>
        <Link color="#0272a2">Forgot your password?</Link>
      </VStack>
    </GridItem>
  );
};

export default LoginUser;
