import { AltBody } from "@/components/Body";
import Products from "@/components/ProductsServices/Products";
import Services from "@/components/ProductsServices/Services";
import { Box, Heading, SimpleGrid, Stack } from "@chakra-ui/layout";
import Page from "../components/Page";

const PasPage = () => {
  return (
    <Page title="Products & Sercives">
      <AltBody title="Our Products & Sercives">
        <Stack direction="column" spacing={5} w="full">
          <SimpleGrid columns={1} spacing={20}>
            <Box
              px="-15px"
              _after={{
                content: '""',
                display: "table",
              }}
            >
              <Box id="wrapper">
                <Heading color="red.500" textAlign="center">
                  Our Services
                </Heading>
                <Box h={5}>
                  <Box as="span" />
                </Box>
              </Box>
              <Box mx={10}>
                <Box
                  pos="relative"
                  left="-24.5156px"
                  pl="24.5156px"
                  pr="24.4844px"
                  px={10}
                  w={{ base: "full", lg: "1018px" }}
                  overflow="hidden"
                  transition="opacity .5s ease"
                  py={15}
                  bgImage="url(/static/images/bg-h4-50776.jpg)"
                  bgSize="cover"
                  bgRepeat="no-repeat"
                  bgPos="center"
                  mx="-15px"
                  _after={{
                    content: '""',
                    display: "table",
                  }}
                  _before={{
                    content: '""',
                    display: "table",
                  }}
                >
                  <Services />
                </Box>
              </Box>
            </Box>
          </SimpleGrid>
          {/* <SimpleGrid columns={1} spacing={20}> */}
          <Products />
          {/* </SimpleGrid> */}
        </Stack>
      </AltBody>
    </Page>
  );
};

export default PasPage;
