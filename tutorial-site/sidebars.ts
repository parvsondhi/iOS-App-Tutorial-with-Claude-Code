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
      label: 'Part 2 — The Idea',
      className: 'sidebar-part sidebar-part-2',
      collapsible: false,
      items: [
        'part-2-the-idea/blueprint',
      ],
    },
    {
      type: 'category',
      label: 'Part 3 — Foundation',
      className: 'sidebar-part sidebar-part-3',
      collapsible: false,
      items: [
        'part-3-foundation/scaffolding',
      ],
    },
    {
      type: 'category',
      label: 'Part 4 — Web App',
      className: 'sidebar-part sidebar-part-4',
      collapsible: false,
      items: [
        'part-3-web-app/ui-shell',
        'part-3-web-app/entries',
        'part-3-web-app/firestore',
        'part-3-web-app/storage',
        'part-3-web-app/auth',
        'part-3-web-app/polish',
        'part-3-web-app/streaks-heatmap',
      ],
    },
    {
      type: 'category',
      label: 'Part 5 — Going Mobile',
      className: 'sidebar-part sidebar-part-5',
      collapsible: false,
      items: [
        'part-4-capacitor/capacitor-setup',
        'part-4-capacitor/camera-haptics',
        'part-4-capacitor/shake',
        'part-4-capacitor/ios-specifics',
      ],
    },
    {
      type: 'category',
      label: 'Part 6 — TestFlight (Optional)',
      className: 'sidebar-part sidebar-part-6',
      items: [
        'part-5-testflight/apple-developer',
        'part-5-testflight/app-store-connect',
        'part-5-testflight/testflight',
      ],
    },
    {
      type: 'category',
      label: 'Part 7 — Next Steps',
      className: 'sidebar-part sidebar-part-7',
      items: [
        'part-6-next-steps/iteration',
        'part-6-next-steps/app-store',
      ],
    },
  ],
};

export default sidebars;
