import { Hero } from "@/components/HomepageSections/Hero";
import { NextPage } from "next";
import Page from "../components/Page";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";

const Index: NextPage = () => {
  return (
    <Page>
      <Hero locationsCount={20} />
    </Page>
  );
};

export default Index;
