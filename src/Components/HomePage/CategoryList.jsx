import React from "react";
import { Container, Heading, Grid } from "@chakra-ui/react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ title, list }) => {
  return (
    <Container maxW="92%" paddingY="50px" textAlign="center">
      <Heading as="h3" size="lg" marginBottom="50px">
        {title}
      </Heading>
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {list.map((item, i) => (
          <CategoryItem key={i} {...item} />
        ))}
      </Grid>
    </Container>
  );
};

export default CategoryList;
