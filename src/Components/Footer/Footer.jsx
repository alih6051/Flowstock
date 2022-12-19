import { Container, Flex, Box, Text, Show } from "@chakra-ui/react";
import FooterCard from "./FooterCard";
import React from "react";

const Footer = () => {
  const footer_data = [
    {
      title: "MY ACCOUNT",
      list: ["Orders & Returns", "Email Preferences", "Account Settings"],
    },
    {
      title: "LET US HELP",
      list: [
        "Contact Customer Care",
        "Shipping Information",
        "Return Policy",
        "International Help",
        "Accessibility",
      ],
    },
    {
      title: "COMPANY INFORMATION",
      list: [
        "About Overstock™",
        "Contact Us",
        "Careers",
        "Investor Relations",
        "Sell Your Products",
        "Supply Chain Transparency",
      ],
    },
    {
      title: "MORE WAYS TO SHOP",
      list: ["Tips & Ideas", "Deals", "Clearance", "New Arrivals"],
    },
  ];

  return (
    <>
      <Container
        maxW="full"
        bg="#444"
        paddingY="50px"
        paddingX="80px"
        color="white"
      >
        <Flex flexWrap="wrap" justifyContent="space-between">
          {footer_data.map((data, i) => (
            <FooterCard key={i} {...data} />
          ))}
        </Flex>
      </Container>

      {/* Footer Copyright Section */}
      <Container
        maxW="full"
        bg="#2f3337"
        paddingY="25px"
        paddingX="80px"
        color={"white"}
      >
        <Flex justifyContent="space-between" alignItems="center">
          <Box>
            <Text fontSize="sm">© Copyright 2022 , Overstock.com®, Inc.</Text>
            <Text fontSize="sm">
              799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446
            </Text>
          </Box>
          <Show above="md">
            <Flex>
              <Text fontSize="sm" paddingX="20px">
                Privacy Policy
              </Text>
              <Text fontSize="sm" paddingX="20px">
                Terms & Conditions
              </Text>
              <Text fontSize="sm" paddingX="20px">
                *Promotion Terms
              </Text>
              <Text fontSize="sm" paddingX="20px">
                Ships to : INDIA
              </Text>
            </Flex>
          </Show>
        </Flex>
      </Container>
    </>
  );
};

export default Footer;
