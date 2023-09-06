import React from "react";
import styles from "./StartPage.module.css";
import StartArticle from "../../components/StartArticle/StartArticle";
import LearnMore from "../../components/LearnMore/LearnMore";
import Projects from "../../components/Projects/Projects";
import layerLogoDark from "../../../static/img/projects/confidential-bridge_logo_1_dark.png";
import layerLogo from "../../../static/img/projects/confidential-bridge_logo_1.png";
import zanoLogo from "../../../static/img/projects/zano_white_theme.png";
import zanoLogoDark from "../../../static/img/projects/zano_block.png";
import bazaarLogo from "../../../static/img/projects/bazaar_wordmark.png";

const content = [
  {
    title: "Getting started",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Start learning",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Mine and Stake",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
  {
    title: "Build on  Zano",
    items: [
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
      {
        link: "#",
        linkText: "Add link",
        content:
          "At vero eos et accusamus et iusto odio dignissimosducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga",
      },
    ],
  },
];

const links = [
  {
    name: "Developers",
    link: "#",
  },
  {
    name: "Users",
    link: "#",
  },
  {
    name: "Miners",
    link: "#",
  },
  {
    name: "Stakers",
    link: "#",
  },
];
const projects = [
  {
    name: "Confidential Bridge",
    link: "https://bridge.confidentiallayer.com",
    logo: { light: layerLogo, dark: layerLogoDark },
  },
  {
    name: "Zano Trade",
    link: "https://trade.zano.org",
    logo: { light: zanoLogo, dark: zanoLogoDark },
  },
  { name: "Bazaar", link: "#", logo: { light: bazaarLogo, dark: bazaarLogo } },
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
