import React from "react";
import { Flex } from "@chakra-ui/react";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormBody = () => {
  return (
    <Flex>
      <Shipping />
      <Payment />
    </Flex>
  );
};

export default FormBody;
