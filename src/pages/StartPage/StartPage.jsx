import React from "react";
import styles from "./StartPage.module.css";
import StartArticle from "../../components/StartArticle/StartArticle";
import LearnMore from "../../components/LearnMore/LearnMore";
import Projects from "../../components/Projects/Projects";
import zanoTradeLogo from "../../assets/projects/zano-trade_logo_square.png";
import clBridgeLogo from "../../assets/projects/confidential_bridge_logo_square.png";
import bazaarLogo from "../../assets/projects/bazaar_logo_square.png";
import devIcon from "../../assets/icons/developers_ico.svg";
import mineIcon from "../../assets/icons/miners_ico.svg";
import stakeIcon from "../../assets/icons/stakers_ico.svg";
import userIcon from "../../assets/icons/users_ico.svg";

const content = [
  {
    title: "About Zano",
    items: [
      {
        link: "/docs/learn/what-is-zano",
        linkText: "What is Zano?",
        content:
          "Begin your exploration into Zano. Discover the vision behind this privacy-centric cryptocurrency platform, understand its core values, and delve into its foundational concepts.",
      },
    ],
  },
  {
    title: "Getting Started",
    items: [
      {
        link: "docs/use/overview",
        linkText: "Setup your environment",
        content:
          "Kickstart your Zano experience. Start with GUI wallet or get hands-on with the Zano CLI and set up your local development environment. Whether you're a developer or an enthusiast, this is your first step.",
      },
    ],
  },
  {
    title: "Mine and Stake",
    items: [
      {
        link: "docs/mine/overview",
        linkText: "Mining Guide",
        content:
          "Venture into Zano's dual earning avenues. Learn how to mine Zano efficiently, ensuring optimal returns and network security.",
      },
      {
        link: "docs/stake/overview",
        linkText: "Staking Guide",
        content:
          "Explore the intricacies of staking on the Zano platform. Understand the rewards, risks, and best practices to maximize your stake's potential.",
      },
    ],
  },
  {
    title: "Build on Zano",
    items: [
      {
        link: "docs/build/rpc-api/overview",
        linkText: "Development APIs",
        content:
          "Harness Zano's powerful suite of APIs. Tailored for developers looking to innovate and integrate with the Zano platform, these comprehensive guides will get you started.",
      },
      {
        link: "docs/build/confidential-assets/overview",
        linkText: "Zano Confidential Assets",
        content:
          "Deploy a tokens with native privacy features. Experiment, test, and deploy Confidential Assets within the Zano network with ease. Perfect for developers new to privacy coins, or those looking to test new concepts.",
      },
    ],
  },
];

const links = [
  {
    name: "Developers",
    link: "docs/build/overview",
    Icon: devIcon,
  },
  {
    name: "Users",
    link: "docs/use/overview",
    Icon: userIcon,
  },
  {
    name: "Miners",
    link: "docs/mine/overview",
    Icon: mineIcon,
  },
  {
    name: "Stakers",
    link: "docs/stake/overview",
    Icon: stakeIcon,
  },
];
const projects = [
  {
    name: "Zano Trade",
    link: "https://trade.zano.org",
    logo: zanoTradeLogo,
  },
  {
    name: "Confidential Bridge",
    link: "https://bridge.confidentiallayer.com",
    logo: clBridgeLogo,
  },
  { name: "Bazaar", link: "#", logo: bazaarLogo },
];

function StartPage() {
  return (
    <>
      <main className={styles.container}>
        <StartArticle content={content} />
        <Projects projects={projects} />
        <LearnMore links={links} />
      </main>
    </>
  );
}

export default StartPage;
