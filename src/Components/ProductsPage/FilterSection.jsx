import React from "react";
import { Box, Show, Text, Select, VStack } from "@chakra-ui/react";

const FilterSection = () => {
  return (
    <Show above="md">
      <Box width="25%" border="1px solid black">
        <Text as="b">Filtered By:</Text>
      </Box>
    </Show>
  );
};

export default FilterSection;
