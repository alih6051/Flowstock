import React from "react";
import { GridItem, Image, Flex, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const CategoryItem = ({ img, title }) => {
  return (
    <RouterLink>
      <GridItem w="100%">
        <Flex flexDirection="column">
          <Image boxSize="100%" objectFit="cover" src={img} alt="Dan Abramov" />
          <Text color="#545658" fontSize="xl" paddingY="20px">
            {title}
          </Text>
        </Flex>
      </GridItem>
    </RouterLink>
  );
};

export default CategoryItem;
