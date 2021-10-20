import AboutManagement from "@/components/About/Management";
import Page from "@/components/Page";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Component, ReactElement } from "react";

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
    title: "Mission and Values",
    description: "Mission and Core values of FrimpsOil",
    component: <AboutManagement />,
  },
  staff: {
    title: "Management team",
    description: "Management team of FrimpsOil",
    component: <AboutManagement />,
  },
  management: {
    title: "Staff",
    description: "Staff team of FrimpsOil",
    component: <AboutManagement />,
  },
};

const About: NextPage<PageProps> = ({ slug }) => {
  const { title, description, component } = obj[slug];

  function renderAboutSection() {
    return component;
  }

  return (
    <Page title={title} description={description}>
      {renderAboutSection()}
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
