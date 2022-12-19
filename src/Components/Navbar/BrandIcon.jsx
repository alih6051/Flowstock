import React from "react";
import {
  Image,
  Show,
  Hide,
  Button,
  Flex,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import logoName from "../../assets/logo_name.png";
import logoRed from "../../assets/logo_red.png";
import logoWhite from "../../assets/logo_white.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as LinkRouter } from "react-router-dom";
import HamburgerLink from "./HamburgerLink";
import { Links } from "./Navbar";

const BrandIcon = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Show above="lg">
        <LinkRouter to="/">
          <Image src={logoName} width="181px" marginRight="20px"></Image>
        </LinkRouter>
      </Show>
      <Hide above="lg">
        <Flex justifyContent="center" alignItems="center">
          <Button
            border="1px solid #dadcdf"
            padding="5px"
            borderRadius="3px"
            marginRight="10px"
            ref={btnRef}
            onClick={onOpen}
          >
            <GiHamburgerMenu size="23px" />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton color="white" />
              <DrawerHeader bg="rgb(255, 31, 44)">
                <LinkRouter to="/">
                  <Image src={logoWhite} width="30px"></Image>
                </LinkRouter>
              </DrawerHeader>

              <DrawerBody>
                <Input placeholder="Type here..." marginBottom="20px" />
                {Links.map((el, i) => (
                  <HamburgerLink key={i} title={el} closeBtn={onClose} />
                ))}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
          <LinkRouter to="/">
            <Image src={logoRed} width="40px" marginRight="20px"></Image>
          </LinkRouter>
        </Flex>
      </Hide>
    </>
  );
};

export default BrandIcon;
