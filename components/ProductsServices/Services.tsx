import { ReactElement } from "react";
import { Avatar, Box, SimpleGrid, Text, Stack, Flex } from "@chakra-ui/react";

interface ServiceProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Service = ({ title, text, icon }: ServiceProps) => {
  return (
    <Stack>
      <Flex
        w={16}
        h={16}
        align={"center"}
        justify={"center"}
        color={"white"}
        rounded={"full"}
        bg={"gray.100"}
        mb={4}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} color="red.500">
        {title}
      </Text>
      <Text color={"white"}>{text}</Text>
    </Stack>
  );
};

function Services() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={10}>
        <Service
          icon={<Avatar src="/static/images/services/lube.jpg" size="xl" />}
          title={"LUBE BAY"}
          text={
            "At Frimps oil, we have only experienced engineers who will change your oil as and when the need arises."
          }
        />
        <Service
          icon={<Avatar src="/static/images/services/washing.jpg" size="xl" />}
          title={"WASHING BAY"}
          text={
            "Our washing bay is well equipped with state-of the - art machines to give you the best of interior and exterior cleaning of your car. At Frimps, you are assured of the best!!!"
          }
        />
        <Service
          icon={<Avatar src="/static/images/services/mart.jpg" size="xl" />}
          title={"MART"}
          text={
            "Our supermarket gives you the comfort of shopping from our wide variety of products."
          }
        />
      </SimpleGrid>
    </Box>
  );
}

export default Services;
