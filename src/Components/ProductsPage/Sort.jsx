import React from "react";
import { Flex, Text, Select } from "@chakra-ui/react";

const Sort = ({ handleOrder }) => {
  return (
    <Flex justifyContent="right">
      <Flex justifyContent="space-between" alignItems="center" width="300px">
        <Text>Sort By:</Text>
        <Select
          placeholder="Select a option"
          width="70%"
          onChange={(e) => handleOrder(e.target.value)}
        >
          <option value="asc">Price Low - High</option>
          <option value="desc">Price High - Low</option>
        </Select>
      </Flex>
    </Flex>
  );
};

export default Sort;
