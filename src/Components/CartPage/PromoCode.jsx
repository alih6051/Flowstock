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
import { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCartContext } from "../../Context/ShoppingCartContext";
import { useContext } from "react";
import { useToast } from "@chakra-ui/react";

const PromoCode = () => {
  const [coupons, setCoupons] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const { applyDiscount } = useContext(ShoppingCartContext);

  useEffect(() => {
    axios
      .get("https://flowstock-json-server.onrender.com/coupons")
      .then(({ data }) => setCoupons(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCouponApply = () => {
    setLoading(true);
    setTimeout(() => {
      let state = { isVaild: false, amount: 0 };
      for (let i = 0; i < coupons.length; i++) {
        if (coupons[i].code === text) {
          state.isVaild = true;
          state.amount = coupons[i].amount;
          break;
        }
      }

      if (state.isVaild) {
        applyDiscount(state.amount);
        setLoading(false);
        toast({
          title: "Coupon applied Successfully",
          description: "Happy Shopping !",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        setLoading(false);
        toast({
          title: "Invaild Coupon code",
          description: "Please enter vaild coupon code",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }, 500);
  };

  return (
    <Accordion allowToggle marginBottom="10px">
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
              onChange={(e) => setText(e.target.value.toUpperCase())}
            />
            <Button
              colorScheme="teal"
              variant="outline"
              border="2px solid black"
              color="#2f3337"
              size="lg"
              width="30%"
              onClick={handleCouponApply}
              isLoading={loading}
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
