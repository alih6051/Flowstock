import React from "react";
import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";

const Loader = () => {
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={7}
      paddingY="20px"
    >
      {[...Array(20)].map((el) => (
        <Box>
          <Skeleton height="300px" />
          <Skeleton height="20px" mt={2} width={170} />
          <Skeleton height="20px" mt={2} width={100} />
          <Skeleton height="20px" mt={2} />
          <Skeleton height="40px" mt={2} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default Loader;
