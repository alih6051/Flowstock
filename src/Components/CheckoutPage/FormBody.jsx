import React from "react";
import { Flex } from "@chakra-ui/react";
import Shipping from "./Shipping";
import Payment from "./Payment";

const FormBody = ({ handleFormData }) => {
  return (
    <Flex flexDirection={["column", "column", "row", "row", "row", "row"]}>
      <Shipping handleFormData={handleFormData} />
      <Payment handleFormData={handleFormData} />
    </Flex>
  );
};

export default FormBody;
