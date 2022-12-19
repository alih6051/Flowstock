import React from "react";
import { Container, Heading, Grid } from "@chakra-ui/react";
import TrendingSearchItem from "./TrendingSearchItem";

const TrendingSearchList = ({ title, list }) => {
  return (
    <Container maxW="92%" paddingY="50px" textAlign="center">
      <Heading as="h3" size="lg" marginBottom="50px">
        {title}
      </Heading>
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          "repeat(1, 1fr)",
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
          "repeat(3, 1fr)",
        ]}
        gap={6}
      >
        {list.map((item, i) => (
          <TrendingSearchItem key={i} title={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default TrendingSearchList;
