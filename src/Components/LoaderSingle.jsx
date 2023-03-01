import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";
import React from "react";

const LoaderSingle = () => {
  return (
    <SimpleGrid columns={[1, 1, 1, 2, 2, 2]} spacing={10}>
      <Box>
        <Skeleton height="400px" />
      </Box>
      <Box>
        <Skeleton height="30px" />
        <Skeleton height="20px" mt={2} width={180} />
        <Skeleton height="20px" mt={2} width={150} />
        <Skeleton height="30px" mt={2} width={200} />
        <Skeleton height="30px" mt={7} />
      </Box>
    </SimpleGrid>
  );
};

export default LoaderSingle;
