import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'From Idea to iOS',
  tagline: 'Build your first iOS app with React, Firebase, Capacitor & Claude Code',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ios-app-tutorial.vercel.app',
  baseUrl: '/',

  organizationName: 'parvsondhi',
  projectName: 'iOS-App-Tutorial-with-Claude-Code',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.png',
    colorMode: {
      defaultMode: 'light',
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3,
    },
    navbar: {
      title: 'Idea to iOS',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorial',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Part 1 — Getting Started',
              to: '/docs/part-1-getting-started/tools-setup',
            },
            {
              label: 'Part 4 — Web App',
              to: '/docs/part-4-web-app/ui-shell',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Claude Code',
              href: 'https://docs.anthropic.com/en/docs/claude-code/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Follow @parvsondhi on X',
              href: 'https://x.com/parvsondhi',
            },
          ],
        },
        {
          title: 'Tech Stack',
          items: [
            {
              label: 'React',
              href: 'https://react.dev',
            },
            {
              label: 'Firebase',
              href: 'https://firebase.google.com',
            },
            {
              label: 'Capacitor',
              href: 'https://capacitorjs.com',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} From Idea to iOS. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'swift'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
