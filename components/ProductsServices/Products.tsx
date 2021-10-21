import React, { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

import { Image } from "../Image";

interface ProductInterface {
  title: string;
  image: string;
  description: string;
}

const Product = ({ title, image, description }: ProductInterface) => {
  return (
    <Box>
      <ProductContent>
        <Box rounded="lg" overflow="hidden">
          <Image
            dimensions={[100, 100]}
            // transform="scale(1.0)"
            src={`/static/images/products/${image}.png`}
            alt={title}
            objectFit="contain"
            // transition="0.3s ease-in-out"
            // _hover={{
            //   transform: "scale(1.05)",
            // }}
          />
        </Box>
        <ProductHeading>{title}</ProductHeading>
        <ProductText>{description}</ProductText>
      </ProductContent>
    </Box>
  );
};

const ProductContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
    >
      {children}
    </Stack>
  );
};

const ProductHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

const ProductText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};

function Products() {
  const products: ProductInterface[] = [
    {
      title: "Diesel",
      image: "diesel",
      description: "Our fuel is the most cost effective.",
    },
    {
      title: "Kerosine",
      image: "kero",
      description: "We provide kerosene for your home and commercial use.",
    },
    {
      title: "LPG",
      image: "lpg",
      description:
        "We provide our clients with high quality and very economical LPG gas.",
    },
    {
      title: "Super",
      image: "super",
      description:
        "It is our duty to protect your car. Our fuel protects your engine from damage.",
    },
    {
      title: "LUBRICANTS",
      image: "lubi",
      description:
        "We only provide very high performance lubricants, intended for lubricating Gas and Diesel car engines.",
    },
  ];

  return (
    <Box bg={useColorModeValue("orange.100", "orange.700")}>
      <Container
        justifyContent="center"
        alignItems="center"
        w="full"
        maxW={"7xl"}
        py={16}
        as={Stack}
        spacing={12}
      >
        <Stack spacing={0} align={"center"}>
          <Heading color="red.500">Our Products</Heading>
          <Text>
            We provide a wide range of products befitting of a filling station
          </Text>
        </Stack>
        <SimpleGrid
          columns={{ base: 2, md: 3 }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          {products.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Products;
