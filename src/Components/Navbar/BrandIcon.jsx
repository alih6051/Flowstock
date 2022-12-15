import React from "react";
import { Image } from "@chakra-ui/react";
import logoName from "../../assets/logo_name.png";
import { Link as LinkRouter } from "react-router-dom";

const BrandIcon = () => {
  return (
    <LinkRouter to="/">
      <Image src={logoName} width="181px" marginRight="20px"></Image>
    </LinkRouter>
  );
};

export default BrandIcon;
