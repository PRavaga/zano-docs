import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Intro from "../components/Intro/Intro";
import Buttons from "../components/Buttons/Buttons";

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Blockchain privacy for mass adoption"
    >
      <main>
        <Intro />
        <Buttons />
      </main>
    </Layout>
  );
};

export default Home;
