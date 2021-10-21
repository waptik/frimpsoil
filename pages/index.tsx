import Carousel from "@/components/Carousel";
import { Hero } from "@/components/HomepageSections/Hero";
import News from "@/components/News";
import { NextPage } from "next";
import Page from "../components/Page";

const news = [
  {
    title: "Frimps Rebrand Launch Held",
    image: "qw",
    date: "JANUARY, 2018",
    intro:
      "Data breaches and other types of modern, large-scale cyberattacks have been making headlines for more than a decade, but recently, it seems like organizations in the life sciences and healthcare industry have been taking on more than their fair share. As it turns out, it...",
  },
  {
    title: "Pentecost University College honours Rev Dr Frimpong",
    image:
      "Pentecost University College honours Rev Dr Frimpong_2e5c19c08bd958788c6204a012c50b93",
    date: "SEPTEMBER 29, 2017",
    intro:
      "The award was in recognition of his ability to combine stewardship with leadership in the oil and gas industry, an industry so fraught with unpredictable challenges and competition. “This gives credence to the string of awards and acknowledgement you and your company FRIMPS Oil Company Limited, have attained over the years,” the citation stated.",
  },
  {
    title: "Jubilee partners to cough US$150m to fix FPSO",
    image: "ursa-1_custom-8358af5fba589f61d21864036b6ce4551c33fa4b-s800-c85",
    date: "SEPTEMBER 26, 2017",
    intro:
      "Jubilee Field operator, Tullow Oil, estimates that it will cost the five partners between US$100 million and US$150 million to repair the damaged turret bearing on the floating vessel used in producing and temporarily storing oil offshore.",
  },
  {
    title: "NPA to launch Petroleum Safety Campaign",
    image: "oil-rig-explosion",
    date: "SEPTEMBER 29, 2017",
    intro:
      "The National Petroleum Authority (NPA) is to embark on a National Petroleum Safety Campaign to engage all stakeholders in the petroleum downstream industry and the general public on the collective responsibility of safety. Dubbed “People Safety First”, the goal of the campaign is...",
  },
];

const Index: NextPage = () => {
  return (
    <Page>
      <Hero locationsCount={69} />
      <Carousel />
      <News news={news} />
    </Page>
  );
};

export default Index;
