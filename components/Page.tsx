import Head from "next/head";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import Navbar from "./Navbar";
import WithDefaultGlobalStyles from "./WithDefaultGlobalStyles";

type PageProps = {
  title?: string;
  description?: string;
};

const Page: React.FC<PageProps> = ({ title, description, children }) => {
  const sitename = "Frimps Oil";
  return (
    <WithDefaultGlobalStyles>
      <Head>
        <title>
          {title ? `${title} | ${sitename}` : `${sitename} - Energy on the GO`}
        </title>
        <meta
          name="description"
          content={description || `${sitename} - Energy on the GO`}
        />
      </Head>
      {/* <Navbar /> */}
      <Header />
      {children}
      <Footer />
    </WithDefaultGlobalStyles>
  );
};

export default Page;
