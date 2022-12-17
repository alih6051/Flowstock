import React from "react";
import { useDisclosure, Menu, MenuButton, MenuList } from "@chakra-ui/react";
import NavlinkDropdown from "./NavlinkDropdown";
import { Link as LinkRouter } from "react-router-dom";

const Navlink = ({ name }) => {
  let linkTo;
  switch (name) {
    case "Furniture": {
      linkTo = name.toLowerCase();
      break;
    }
    case "Kitchen": {
      linkTo = name.toLowerCase();
      break;
    }
    case "Lighting": {
      linkTo = name.toLowerCase();
      break;
    }
    default: {
      linkTo = "";
    }
  }

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Menu isOpen={isOpen} gutter={0}>
      <LinkRouter to={linkTo}>
        <MenuButton
          variant="outline"
          mx={1}
          style={
            name === "Sales & Deals"
              ? { color: "#c7202c", borderBottom: "2px solid #c7202c" }
              : null
          }
          _active={
            name === "Sales & Deals"
              ? { borderBottom: "2px solid #c7202c" }
              : { borderBottom: "2px solid black" }
          }
          aria-label="Courses"
          fontWeight="normal"
          paddingX="2px"
          paddingY="5px"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
          onClick={onClose}
        >
          {name}
        </MenuButton>
      </LinkRouter>
      <MenuList
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        borderRadius="none"
      >
        <NavlinkDropdown />
      </MenuList>
    </Menu>
  );
};

export default Navlink;
