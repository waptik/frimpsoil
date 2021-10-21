import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { ReactElement } from "react";

import Page from "@/components/Page";
import { AboutManagement, AboutStaff } from "@/components/About/Management";
import AboutMissionsAndValues from "@/components/About/MissionsAndValues";
import { Box } from "@chakra-ui/react";
import Body from "@/components/Body";

type PageProps = {
  slug: string;
};

const obj: {
  [key: string]: {
    title: string;
    description: string;
    component: ReactElement;
  };
} = {
  "mission-values": {
    title: "Our Mission and Values",
    description: "Mission and Core values of FrimpsOil",
    component: <AboutMissionsAndValues />,
  },
  staff: {
    title: "Meet our Staff",
    description: "Staff team of FrimpsOil",
    component: <AboutStaff />,
  },
  management: {
    title: "Meet our Management team",
    description: "Management team of FrimpsOil",
    component: <AboutManagement />,
  },
};

const About: NextPage<PageProps> = ({ slug }) => {
  const { title, description, component } = obj[slug];

  return (
    <Page title={title} description={description}>
      <Body title={obj[slug].title}>{component}</Body>
    </Page>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = ({ params }) => {
  const slug = params!.slug as string;

  return { props: { slug } };
};

export const getStaticPaths: GetStaticPaths = () => {
  const slugs = ["mission-values", "staff", "management"];

  const paths = slugs.map((slug) => ({
    params: {
      slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default About;
