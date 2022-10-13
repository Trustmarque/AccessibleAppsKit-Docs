// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Accessible Apps Kit',
  tagline: 'A maker/developer tool to help you build more accessible Power Apps',
  url: 'https://trustmarque.github.io',
  baseUrl: '/AccessibleAppsKit-Docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'trustmarque', // Usually your GitHub org/user name.
  projectName: 'AccessibleAppsKit-Docs', // Usually your repo name.
  trailingSlash:false,
  deploymentBranch:'gh-pages',
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Accessible Apps Kit',
        logo: {
          alt: 'lens',
          src: '/img/Lens.png',
        },
        items: [
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Getting Started',
            sidebarId: 'gettingStartedSideBar',
          }, 
          {
            type: 'docSidebar',
            position: 'left',
            label: 'User Guide',
            sidebarId: 'userSideBar',
          }, 
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Icon Sets',
            sidebarId: 'iconsSideBar',
          }, 
          /*
          {
            type: 'docSidebar',
            position: 'left',
            label: 'Technical Guide',
            sidebarId: 'tech',
          }, */
          {
            href: 'https://github.com/Trustmarque/Accessible-Apps-Kit',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Trustmarque Solutions Limited`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['powershell'],

      },
    }),
};

module.exports = config;
