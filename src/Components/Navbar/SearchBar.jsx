import React from "react";
import { Flex, Input, Button, Hide } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  return (
    <Hide below="md">
      <Flex>
        <Input
          bg="#f9fafb"
          focusBorderColor="black"
          placeholder="Search... everything you find ships for free"
          size="md"
          borderRadius="5px 0 0 5px"
        />
        <Button
          color="white"
          bg="#ff1f2c"
          size="md"
          borderRadius="0 5px 5px 0"
          paddingX="10px"
          _hover="none"
          _active="none"
        >
          <BiSearch fontSize="30px" />
        </Button>
      </Flex>
    </Hide>
  );
};

export default SearchBar;
