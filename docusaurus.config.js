// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jackal Chain Docs',
  tagline: 'The who, what, where, why, when, and how to get started with Jackal\'s blockchain!',
  url: 'https://docs.jackaldao.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jackallabs', // Usually your GitHub org/user name.
  projectName: 'canine-docs', // Usually your repo name.

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/JackalLabs/canine-docs/blob/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
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
        title: 'Jackal Docs',
        logo: {
          alt: 'Jackal Logo',
          src: 'img/jklimage.png',
        },
        items: [
          {
            href: 'https://github.com/jackallabs/canine-chain',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Jackal',
            items: [
              {
                label: 'Website',
                href: 'https://jackaldao.com',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.com/invite/5GKym3p6rj',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/jackal_dao',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'Documentation',
                to: 'https://docs.jackaldao.com',
              },
              {
                label: 'Contribute to Docs',
                href: 'https://github.com/jackallabs/canine-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jackal Labs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

    stylesheets: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap',
      },
      {
        href: 'https://fonts.cdnfonts.com/css/segoe-ui-4'
      },
    ]
};

module.exports = config;
