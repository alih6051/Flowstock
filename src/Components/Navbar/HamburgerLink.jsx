import React from "react";
import { Text } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

const HamburgerLink = ({ title, closeBtn }) => {
  let link = "";
  if (title === "Furniture") {
    link = "/furniture";
  } else if (title === "Kitchen") {
    link = "/kitchen";
  } else if (title === "Lighting") {
    link = "/lighting";
  }

  return (
    <LinkRouter to={link}>
      <Text
        fontSize="lg"
        borderBottom="1px solid #dadcdf"
        paddingY="7px"
        onClick={closeBtn}
      >
        {title}
      </Text>
    </LinkRouter>
  );
};

export default HamburgerLink;
