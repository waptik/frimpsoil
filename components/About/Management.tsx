import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";

interface Person {
  name: string;
  pic: string;
  role: string;
}

const people: { [key: string]: Person[] } = {
  mgt: [
    {
      name: "Rev. Dr. Kwaku Frimpong",
      role: "Managing Director",
      pic: "frimpong",
    },
    {
      name: "Mr. Kofi Yaro",
      role: "Head of Operations",
      pic: "yaro",
    },
    {
      name: "Mr. Stephen Appiah",
      role: "Finance Manager",
      pic: "stephen",
    },
    {
      name: "Erica Frimpong",
      role: "Legal Advisor",
      pic: "erica",
    },
    {
      name: "Samuel Opoku",
      role: "Head Audit",
      pic: "Samuel",
    },
  ],
  staff: [
    {
      name: "Mr. Martin Osafo-Adjei",
      role: "Operations Assitant",
      pic: "Martin",
    },
    {
      name: "Mr. Richard Quainoo",
      role: "Internal Auditor",
      pic: "Richard",
    },
    {
      name: "Mr. Solomon Sackey",
      role: "Compliance Officer",
      pic: "Solomon",
    },
    {
      name: "Gifty Agbenyo",
      role: "HR Officer",
      pic: "Gifty",
    },
    {
      name: "Dorcas Okyerewaa Appiah",
      role: "Executive Assistant",
      pic: "Dorcas",
    },
  ],
};

function SocialProfileSimple({ name, pic, role }: Person) {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={`/static/images/people/${pic}.jpg`}
          alt={name}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: "ref.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {role}
        </Text>
      </Box>
    </Center>
  );
}

export const AboutManagement = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {people.mgt.map((person, i) => (
        <SocialProfileSimple key={i} {...person} />
      ))}
    </SimpleGrid>
  );
};

export const AboutStaff = () => {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
      {people.staff.map((person, i) => (
        <SocialProfileSimple key={i} {...person} />
      ))}
    </SimpleGrid>
  );
};
