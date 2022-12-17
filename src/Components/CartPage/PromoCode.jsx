import React from "react";
import {
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  Button,
  AccordionIcon,
  AccordionPanel,
  Input,
  Flex,
} from "@chakra-ui/react";

const PromoCode = () => {
  return (
    <Accordion allowToggle>
      <AccordionItem border="1px solid #dadcdf">
        <AccordionButton>
          <Text fontWeight="550" fontSize="xl" flex="1" textAlign="left">
            Add a Promo Code
          </Text>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          <Flex justifyContent="space-between">
            <Input
              variant="outline"
              placeholder="Enter promo code"
              focusBorderColor="black"
              size="lg"
              width="65%"
            />
            <Button
              colorScheme="teal"
              variant="outline"
              borderColor="black"
              color="#2f3337"
              size="lg"
              width="30%"
            >
              Apply
            </Button>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default PromoCode;
