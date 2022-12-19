import React from "react";
import { Container, Heading, Grid } from "@chakra-ui/react";
import BrandItem from "./BrandItem";

const BrandList = ({ title, brandList }) => {
  return (
    <Container maxW="92%" paddingX="0" paddingY="50px" textAlign="center">
      <Heading as="h3" size="lg" marginBottom="50px">
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        {brandList.map((img, i) => (
          <BrandItem key={i} img={img} />
        ))}
      </Grid>
    </Container>
  );
};

export default BrandList;
