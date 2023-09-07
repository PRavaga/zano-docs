const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const config = {
  title: "Zano Docs",
  tagline: "Blockchain privacy for mass adoption",
  favicon: "img/favicon.ico",

  url: "https://zano-docs.pages.dev",
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    image: "img/zano-social-card.png",
    navbar: {
      title: "Zano Docs",
      logo: {
        alt: "Zano Logo",
        src: "img/logo_zano.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "learnSidebar",
          position: "left",
          label: "Learn",
        },
        {
          type: "docSidebar",
          sidebarId: "useSidebar",
          position: "left",
          label: "Use",
        },
        {
          type: "docSidebar",
          sidebarId: "buildSidebar",
          position: "left",
          label: "Build",
        },
        {
          type: "docSidebar",
          sidebarId: "mineSidebar",
          position: "left",
          label: "Mine",
        },
        {
          type: "docSidebar",
          sidebarId: "stakeSidebar",
          position: "left",
          label: "Stake",
        },
        {
          href: "https://github.com/hyle-team/zano",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Learn",
              to: "/docs/learn/what-is-zano",
            },
            {
              label: "Use",
              to: "/docs/use/overview",
            },
            {
              label: "Build",
              to: "/docs/build/overview",
            },
            {
              label: "Mine",
              to: "/docs/mine/overview",
            },
            {
              label: "Stake",
              to: "/docs/stake/overview",
            },
          ],
        },
        {
          title: "Zano",
          items: [
            {
              label: "Homepage",
              to: "https://new.zano.org",
            },
            {
              label: "Downloads",
              to: "https://new.zano.org/downloads",
            },
            {
              label: "Blog",
              to: "https://blog.zano.org",
            },
            {
              label: "Wrapped Zano",
              to: "https://wrapped.zano.org",
            },
          ],
        },
        {
          title: "Resources",
          items: [
            {
              label: "Explorer",
              to: "https://explorer.zano.org",
            },
            {
              label: "Github",
              to: "https://github.com/hyle-team/zano",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              to: "https://discord.gg/wE3rmYY",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/zano_project",
            },
            {
              label: "Telegram",
              to: "https://t.me/zanocoin",
            },
            {
              label: "Youtube",
              to: "https://www.youtube.com/@zanoproject",
            },
            {
              label: "Reddit",
              to: "https://www.reddit.com/r/Zano",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Zano.org`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
