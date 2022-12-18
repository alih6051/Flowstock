import React from "react";
import { Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SignInBtn = () => {
  return (
    <>
      <Text fontSize="xs">
        Started a cart already? Sign in to get your items!
      </Text>
      <RouterLink to="/myaccount">
        <Button
          colorScheme="blue"
          size="lg"
          variant="outline"
          width="180px"
          marginTop="20px"
        >
          Sign In
        </Button>
      </RouterLink>
      <Text fontSize="sm" marginTop="15px">
        New to Flowstock?{" "}
        <RouterLink to="/myaccount">Create an account</RouterLink>
      </Text>
    </>
  );
};

export default SignInBtn;
