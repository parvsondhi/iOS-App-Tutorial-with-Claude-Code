import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'From Idea to TestFlight',
  tagline: 'Build your first iOS app with React, Firebase, Capacitor & Claude Code',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ios-app-tutorial.vercel.app',
  baseUrl: '/',

  organizationName: 'parvsondhi',
  projectName: 'iOS-App-Tutorial-with-Claude-Code',

  onBrokenLinks: 'throw',

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
          editUrl:
            'https://github.com/parvsondhi/iOS-App-Tutorial-with-Claude-Code/tree/main/tutorial-site/',
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
    navbar: {
      title: 'Idea to TestFlight',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/parvsondhi/iOS-App-Tutorial-with-Claude-Code',
          label: 'GitHub',
          position: 'right',
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
              label: 'Part 1 — The Idea',
              to: '/docs/part-1-the-idea/blueprint',
            },
            {
              label: 'Part 3 — Web App',
              to: '/docs/part-3-web-app/ui-shell',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Companion Repo',
              href: 'https://github.com/parvsondhi/iOS-App-Tutorial-with-Claude-Code',
            },
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
      copyright: `Copyright © ${new Date().getFullYear()} From Idea to TestFlight. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'typescript', 'swift'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
