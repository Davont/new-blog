/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Davont",
  tagline: "Dinosaurs are cool",
  url: "http://www.siyuanwa.cn",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/home/logo.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  // staticDirectories: ['public', 'static'],
  themeConfig: {
    // 增加js语言高亮提示，其他语言参考:  https://prismjs.com/#supported-languages
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      additionalLanguages: ["javascript","typescript","jsx"],
    },
    // SEO
    metadata: [
      { name: "Davont", content: "Davont, 博客" },
      { name: "前端", content: "Front End" },
      { name: "博客", content: "blog" },
    ],
    navbar: {
      title: "Davont",
      logo: {
        alt: "My Site Logo",
        src: "img/home/logo.ico",
      },
      items: [
        {
          type: "localeDropdown",
          position: "left",
        },
        {
          to: "/",
          activeBasePath: "blog",
          label: "博客",
          position: "right",
          items: [
            {
              label: "编程笔记",
              to: "/blog/tags/coding",
            },
            {
              label: "生活笔记",
              to: "/blog/tags/living",
            },
          ],
        },
        {
          to: "docs/algorithm/二叉树/preorder",
          label: "算法",
          position: "right",
        },
        {
          to: "docs/react/react-hooks",
          label: "React源码",
          position: "right",
        },
        {
          to: "docs/interview/May/5-10",
          label: "每日面试题",
          position: "right",
        },
        {
          to: "docs/typescript/type-challenges",
          label: "Typescript",
          position: "right",
        },
        {
          to: "docs/guide/协同开发-快速开始",
          label: "协同开发",
          position: "right",
        },
        {
          to: "docs/resources/resources-intro",
          label: "资源整理",
          position: "right",
        },
        {
          href: "https://space.bilibili.com/32715946",
          label: "B站",
          position: "right",
        },
        {
          href: "https://github.com/Davont",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Davont, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsed: false,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // 国际化
  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en", "zh-cn"],
  },
  plugins: ["docusaurus-plugin-sass"],
};
