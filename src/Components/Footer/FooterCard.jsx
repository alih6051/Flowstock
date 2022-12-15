import React from "react";
import { Flex, Text, Link } from "@chakra-ui/react";

const FooterCard = ({ title, list }) => {
  return (
    <Flex flexDirection="column" gap={3}>
      <Text marginBottom="10px">{title}</Text>
      {list.map((el, i) => (
        <Link key={i} fontSize="14px">
          {el}
        </Link>
      ))}
    </Flex>
  );
};

export default FooterCard;
