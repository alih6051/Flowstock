import React from "react";
import { Text, GridItem } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const TrendingSearchItem = ({ title }) => {
  return (
    <RouterLink>
      <GridItem bg="#F5F6F7" paddingY="16px">
        <Text as="b" fontSize="2xl" color="#545658">
          {title}
        </Text>
      </GridItem>
    </RouterLink>
  );
};

export default TrendingSearchItem;
