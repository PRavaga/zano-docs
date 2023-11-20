const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require("remark-math");
const katex = require("rehype-katex");

const config = {
  title: "Zano Docs",
  tagline: "Blockchain privacy for mass adoption",
  favicon: "img/favicon.ico",

  url: "https://docs.zano.org",
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],

  themeConfig: {
    image: "img/zano_dev_meta.png",
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
              to: "/docs/stake/proof-of-stake-mining",
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
    algolia: {
      appId: 'GZR5BV1JNU',
      apiKey: 'aa52f5e09870e3882638cccd64c79ad0',
      indexName: 'zano',
    }
  },
};

module.exports = config;
