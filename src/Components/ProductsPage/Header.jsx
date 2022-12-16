import { Container, Heading } from "@chakra-ui/react";
import React from "react";

const Header = ({ title }) => {
  return (
    <Container maxW="92%" padding="0">
      <Heading as="h2" size="xl" paddingY="50px">
        {title === "/furniture" && "Furniture Products"}
        {title === "/kitchen" && "Kitchen Products"}
        {title === "/lighting" && "Lighting Products"}
      </Heading>
    </Container>
  );
};

export default Header;
