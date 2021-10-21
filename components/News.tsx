import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  Button,
  Stack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogDateProps {
  date: Date;
}

interface NewsProps {
  title: string;
  date: string;
  image: string;
  intro: string;
}

export const BlogDate: React.FC<BlogDateProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const News = ({ news }: { news: NewsProps[] }) => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" color="red.500" textAlign="center">
        News & Stories about FrimpsOil
      </Heading>

      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        {news.map(({ title, date, image, intro }, i) => (
          <WrapItem
            key={i}
            width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
          >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={`/static/images/news/${image}.jpg`}
                    alt={title}
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <BlogTags tags={["News", "Updates"]} marginTop="3" />
              <Heading fontSize="xl" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {title}
                </Link>
              </Heading>
              <Text as="p" fontSize="md" marginTop="2">
                {intro}
              </Text>
              <BlogDate date={new Date(date)} />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        pt={8}
        alignSelf={"center"}
        position={"relative"}
      >
        <Button
          colorScheme={"red"}
          bg={"red.600"}
          rounded={"full"}
          px={6}
          _hover={{
            bg: "red.500",
          }}
        >
          <Link
            target="_blank"
            href="https://www.google.com/search?q=frimpsoil"
            color="white"
            _hover={{
              textDecor: "none",
            }}
          >
            Read more news
          </Link>
        </Button>
      </Stack>
    </Container>
  );
};

export default News;
