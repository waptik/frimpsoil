import { Box } from "@chakra-ui/react";
import React from "react";

const EmptySpace = () => {
  return (
    <Box h={5}>
      <Box as="span" />
    </Box>
  );
};

export default EmptySpace;
