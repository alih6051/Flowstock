import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Container, Image } from "@chakra-ui/react";

const Banner = ({ image, textImage }) => {
  return (
    <RouterLink to="/furniture">
      <Container maxW="92%" padding="0" style={{ position: "relative" }}>
        <Image boxSize="100%" objectFit="cover" src={image} alt="Dan Abramov" />
        <Box
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            boxSize="100%"
            objectFit="cover"
            src={textImage}
            alt="Dan Abramov"
          />
        </Box>
      </Container>
    </RouterLink>
  );
};

export default Banner;
