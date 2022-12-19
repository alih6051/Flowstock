import React from "react";
import { Flex } from "@chakra-ui/react";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormBody = () => {
  return (
    <Flex flexDirection={["column", "column", "row", "row", "row", "row"]}>
      <Shipping />
      <Payment />
    </Flex>
  );
};

export default FormBody;
