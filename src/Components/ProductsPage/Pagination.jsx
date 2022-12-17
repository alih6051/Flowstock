import React from "react";
import { Button, Box } from "@chakra-ui/react";

const Pagination = ({ currentPage, total, onChange }) => {
  const prevBtn = (
    <Button
      colorScheme="red"
      marginX="px"
      disabled={currentPage === 1}
      onClick={() => onChange(currentPage - 1)}
    >
      Prev
    </Button>
  );
  const buttons = [1, 2, 3].map((el, i) => (
    <Button
      key={i}
      marginX="10px"
      onClick={() => onChange(el)}
      isActive={currentPage === el}
    >
      {el}
    </Button>
  ));
  const nextBtn = (
    <Button
      marginX="10px"
      colorScheme="red"
      disabled={currentPage === total}
      onClick={() => onChange(currentPage + 1)}
    >
      Next
    </Button>
  );
  return (
    <Box textAlign="center">
      {prevBtn}
      {buttons}
      {nextBtn}
    </Box>
  );
};

export default Pagination;
