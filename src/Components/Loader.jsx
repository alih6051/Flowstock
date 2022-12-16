import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Flex
      width="100%"
      thickness="4px"
      speed="0.4s"
      emptyColor="gray.200"
      color="blue.500"
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
    </Flex>
  );
};

export default Loader;
