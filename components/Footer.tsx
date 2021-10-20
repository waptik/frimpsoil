import {
  Container,
  Icon,
  Box,
  Stack,
  Text,
  Link,
  SimpleGrid,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { ReactNode } from "react";

import { Logo } from "../components/Logo";

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "http://m.facebook.com/pg/frimpsoilLtd/about/",
  },
];

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("orange.50", "orange.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <ListHeader>Locate us</ListHeader>
            <Text>
              Head Office : 3rd Floor, Advantage Place Building (Adjacent Ridge
              Hospital ) Mayor Road Ridge, Accra – Ghana
            </Text>
            <br />
            <Text>
              Open Monday to Sunday +233(0)302 690 527 – available 24/7
            </Text>
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Social</ListHeader>
            {SOCIAL_LINKS.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </Stack>

          <Stack align={"flex-start"}>
            <ListHeader>Quick Links</ListHeader>
            <Link href="/about/mvc">About us</Link>
            <Link href="/contact">Contact us</Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box pb={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <NextLink href={"/"} passHref>
            <Link>
              <Icon as={Logo} w={{ base: 12 }} h={{ base: 12 }} />
            </Link>
          </NextLink>
        </Flex>
        <Text pt={6} fontSize={"sm"} textAlign={"center"}>
          Made on the Internet by{" "}
          <Link href="https://twitter.com/_waptik">Stephane Mensah</Link>
        </Text>
      </Box>
    </Box>
  );
};
