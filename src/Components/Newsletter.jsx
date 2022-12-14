import React from "react";
import {
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Flex,
  Link,
  VStack,
  Input,
  Button,
} from "@chakra-ui/react";

const Newsletter = () => {
  return (
    <>
      <Container maxW="full" bg="#2f3337" color="white" minH="40px">
        <Accordion allowToggle>
          <AccordionItem margin="auto" border="none" maxW="430px">
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="center">
                  <Flex justifyContent="space-around" alignItems="center">
                    <Text fontSize="13px">
                      Sign up to receive our latest <b>deals</b> and get a{" "}
                      <b>10% off coupon</b>
                    </Text>
                    <AccordionIcon fontSize="25px" />
                  </Flex>
                </Box>
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <VStack>
                <Flex w="100%">
                  <Input
                    placeholder="enter email address"
                    bg="white"
                    borderRadius="3px 0 0 3px"
                  />
                  <Button
                    colorScheme="blue"
                    bg="#f5f6f7"
                    color="#2f3337"
                    borderRadius="0 3px 3px 0"
                    _hover="none"
                  >
                    Sign up
                  </Button>
                </Flex>
                <Box fontSize="13px" width="100%">
                  <Flex justifyContent="space-between">
                    <Link>Terms & Conditions</Link>
                    <Text>|</Text>
                    <Link>Privacy Policy</Link>
                    <Text>|</Text>
                    <Link>*You can unsubscribe at any time</Link>
                  </Flex>
                </Box>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </>
  );
};

export default Newsletter;
