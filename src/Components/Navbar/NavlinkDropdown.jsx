import React from "react";
import { Box, Grid, GridItem, Heading, Link, Flex } from "@chakra-ui/react";

const NavlinkDropdown = () => {
  return (
    <Box paddingX="15px" paddingY="10px">
      <Grid templateColumns="repeat(3, 1fr)" gap={20}>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Living Room Furnitures
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Sofas & Couches</Link>
            <Link>Benches</Link>
            <Link>Ottomans & Poufs</Link>
            <Link>Accent Chairs</Link>
            <Link>Recliners</Link>
            <Link>Coffee & Accent Tables</Link>
            <Link>TV Stands</Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Patio & Outdoor Furniture
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Patio Furniture Sets</Link>
            <Link>Sofas, Chairs & Sectionals</Link>
            <Link>Dining Sets</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Chaise Lounges</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Outdoor Benches</Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Living Room Furnitures
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Sofas & Couches</Link>
            <Link>Benches</Link>
            <Link>Ottomans & Poufs</Link>
            <Link>Accent Chairs</Link>
            <Link>Recliners</Link>
            <Link>Coffee & Accent Tables</Link>
            <Link>TV Stands</Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Patio & Outdoor Furniture
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Patio Furniture Sets</Link>
            <Link>Sofas, Chairs & Sectionals</Link>
            <Link>Dining Sets</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Chaise Lounges</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Outdoor Benches</Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Living Room Furnitures
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Sofas & Couches</Link>
            <Link>Benches</Link>
            <Link>Ottomans & Poufs</Link>
            <Link>Accent Chairs</Link>
            <Link>Recliners</Link>
            <Link>Coffee & Accent Tables</Link>
            <Link>TV Stands</Link>
          </Flex>
        </GridItem>
        <GridItem w="100%">
          <Heading as="h6" size="xs" marginBottom="10px">
            Patio & Outdoor Furniture
          </Heading>
          <Flex flexDirection="column" gap={1}>
            <Link>Patio Furniture Sets</Link>
            <Link>Sofas, Chairs & Sectionals</Link>
            <Link>Dining Sets</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Chaise Lounges</Link>
            <Link>Adirondack Chairs</Link>
            <Link>Outdoor Benches</Link>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default NavlinkDropdown;
