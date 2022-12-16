import React from "react";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ title, list }) => {
  return (
    <Container maxW="92%" paddingY="50px" textAlign="center">
      <Heading as="h3" size="lg" marginBottom="50px">
        {title}
      </Heading>
      <SimpleGrid columns={[3, 3, 4, 4, 6, 6]} gap={6}>
        {list.map((item, i) => (
          <CategoryItem key={i} {...item} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default CategoryList;
