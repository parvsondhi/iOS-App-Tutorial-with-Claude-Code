import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Part 1 — Getting Started',
      className: 'sidebar-part sidebar-part-1',
      collapsible: false,
      items: [
        'part-1-getting-started/tools-setup',
      ],
    },
    {
      type: 'category',
      label: 'Part 2 — Scaffolding',
      className: 'sidebar-part sidebar-part-2',
      collapsible: false,
      items: [
        'part-2-scaffolding/scaffolding',
      ],
    },
    {
      type: 'category',
      label: 'Part 3 — The Idea',
      className: 'sidebar-part sidebar-part-3',
      collapsible: false,
      items: [
        'part-3-the-idea/blueprint',
      ],
    },
    {
      type: 'category',
      label: 'Part 4 — Web App',
      className: 'sidebar-part sidebar-part-4',
      collapsible: false,
      items: [
        'part-4-web-app/ui-shell',
        'part-4-web-app/entries',
        'part-4-web-app/auth',
        'part-4-web-app/polish',
        'part-4-web-app/streaks',
      ],
    },
    {
      type: 'category',
      label: 'Part 5 — Going Mobile',
      className: 'sidebar-part sidebar-part-5',
      collapsible: false,
      items: [
        'part-5-capacitor/capacitor-setup',
        'part-5-capacitor/camera-haptics',
        'part-5-capacitor/shake',
        'part-5-capacitor/ios-specifics',
      ],
    },
    {
      type: 'category',
      label: 'Part 6 — TestFlight (Optional)',
      className: 'sidebar-part sidebar-part-6',
      items: [
        'part-6-testflight/apple-developer',
        'part-6-testflight/app-store-connect',
        'part-6-testflight/testflight',
      ],
    },
    {
      type: 'category',
      label: 'Part 7 — Next Steps',
      className: 'sidebar-part sidebar-part-7',
      items: [
        'part-7-next-steps/iteration',
        'part-7-next-steps/app-store',
      ],
    },
  ],
};

export default sidebars;
