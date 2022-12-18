import React from "react";
import { Flex, Image, Box } from "@chakra-ui/react";
import logo from "../../assets/logo_name.png";

const Header = () => {
  return (
    <Flex
      height="80px"
      justifyContent="center"
      alignItems="center"
      borderBottom="1px solid #dadcdf"
      marginBottom="30px"
    >
      <Box>
        <Image src={logo} alt="logo" width="181px"></Image>
      </Box>
    </Flex>
  );
};

export default Header;
