import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import StartPage from "./StartPage/StartPage";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Blockchain privacy for mass adoption"
    >
      <StartPage />
    </Layout>
  );
};

export default Home;
