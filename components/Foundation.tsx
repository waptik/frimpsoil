import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Foundation() {
  return (
    <Container maxW={"5xl"} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={"uppercase"}
            color={"red.400"}
            fontWeight={600}
            fontSize={"sm"}
            bg={useColorModeValue("red.50", "red.900")}
            p={2}
            alignSelf={"flex-start"}
            rounded={"md"}
          >
            The Frimps Foundation
          </Text>
          <Heading>
            A Foundation by Rev.Dr Kwaku Frimpong of Frimps Oil Company Limited
          </Heading>
          <Text color={"gray.500"} fontSize={"lg"}>
            The foundation works in partnership the Frimps Group which Comprises
            of Frimps Oil, Eagle Petroleum and Loyalty Insurance in the
            execution of its initiatives.
          </Text>
        </Stack>
        <Flex>
          <Link href="http://www.thefrimpsfoundation.com/" target="_blank">
            <Image
              rounded={"md"}
              alt={"feature image"}
              src={"/static/images/foundation.jpg"}
              objectFit={"cover"}
            />
          </Link>
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
