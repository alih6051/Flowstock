import { Text, Flex, Link, Divider } from "@chakra-ui/react";

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

export default SignInDiv;
