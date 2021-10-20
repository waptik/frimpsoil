import { Box, BoxProps, Container, Stack } from "@chakra-ui/react";
import { FC } from "react";

const Body: FC<BoxProps> = ({ children }) => {
  return (
    <Box>
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
