import React from "react";
import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

const CarouselCard = ({ img, title, des }) => {
  return (
    <Box w="95%" height="100%">
      <Flex flexDirection={"column"}>
        <Image boxSize="100%" objectFit="cover" src={img} alt="Dan Abramov" />
        <Box bg="#f5f5f5" textAlign="left" paddingY="16px" paddingX="24px">
          <Heading as="h3" size="md" marginBottom="8px">
            {title}
          </Heading>
          <Text fontSize="lg">{des}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default CarouselCard;
