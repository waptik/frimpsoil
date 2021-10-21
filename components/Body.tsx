import {
  Box,
  BoxProps,
  Container,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import React, { FC } from "react";

const ContentHeader: FC<BoxProps & { title?: string }> = ({ title }) => {
  return (
    <Box
      mx="auto"
      w="1170px"
      maxW="92%"
      bgImage="url(/static/images/bg-tb.png)"
      bgSize="cover"
      bgColor="whiteAlpha.600"
      bgRepeat="no-repeat"
      bgPos="top center"
      borderX="0px none #000000"
      borderTop="0px none #000000"
      borderBottom="1px solid rgba(2, 6, 32, 0.1)"
      /* mx={0} */ px={0}
      pb={0}
      pt={40}
      mb={12}
    >
      <Box
        maxW="full"
        w="1170px"
        m="0 auto"
        pos="relative"
        _after={{
          clear: "both",
          content: '""',
          display: "table",
        }}
      >
        <Flex justify="space-between" align="center" direction="row-reverse">
          <Box pos="relative" zIndex={5} outline={0}>
            <Heading as="h1" size="md" color="red.500">
              {title}
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const Body: FC<BoxProps & { title?: string }> = ({ title, children }) => {
  return (
    <Box>
      {title && <ContentHeader title={title} />}
      <Stack
        as={Container}
        maxW={"7xl"}
        h={{ base: "100%", lg: "100vh" }}
        minH={950}
        py={{ base: 24, lg: 32 }}
        spacing={{ base: 10, lg: 24 }}
        direction={{ base: "column", lg: "row" }}
        alignItems={"center"}
      >
        <Stack spacing={12} mb={{ base: 12, lg: 0 }} flex={2}>
          {children}
        </Stack>
      </Stack>
    </Box>
  );
};

export default Body;
