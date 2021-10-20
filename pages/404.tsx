import {
  Container,
  Icon,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";

import { Logo } from "../components/Logo";
import Page from "../components/Page";

export const NotFound = () => {
  return (
    <Page title="Page not found">
      <Flex align={"center"} justify={"center"} h={"100vh"} w={"full"}>
        <Stack
          as={Container}
          bg={useColorModeValue("gray.50", "gray.900")}
          rounded={"xl"}
          p={8}
          spacing={6}
          maxW={"lg"}
          align={"center"}
          textAlign={"center"}
        >
          <Icon as={Logo} w={10} h={10} />
          <Stack spacing={2}>
            <Heading>Page not found</Heading>
            <Text>
              This page was not found. You may have mistyped the address or the
              page may have moved.
            </Text>
          </Stack>
          <Flex>
            <NextLink href={"/"} passHref>
              <Button
                as={"a"}
                colorScheme={"red"}
                rounded={"full"}
                bg={"red.400"}
                _hover={{ bg: "red.500" }}
              >
                Take me to the home page
              </Button>
            </NextLink>
          </Flex>
        </Stack>
      </Flex>
    </Page>
  );
};

export default NotFound;
