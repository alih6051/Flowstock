import { Container, Text, Flex, Box, Image } from "@chakra-ui/react";
import React from "react";

const CountryBar = () => {
  return (
    <Container
      maxW="full"
      bg="#f9fafb"
      paddingY="3px"
      borderY="1px solid #dadcdf"
    >
      <Flex justifyContent="left" alignItems="center">
        <Text color="#94979b">Ships to :</Text>
        <Flex alignItems="center">
          <Image
            width="25px"
            objectFit="cover"
            marginX="10px"
            alt="flag"
            src="data:image/png;base64,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"
          />
          <Text fontWeight="600">INDIA</Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default CountryBar;
