// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://wdl.docs.thearchive.world',
  base: '/',
  integrations: [
    starlight({
      title: 'Archive World Downloader',
      editLink: { baseUrl: 'https://github.com/thearchive-world/archive-world-downloader-docs/edit/main/' },
      customCss: ['./src/styles/custom.css'],
      // Match the mobile browser chrome to the page surface in each theme.
      head: [
        { tag: 'meta', attrs: { name: 'theme-color', content: '#17181c', media: '(prefers-color-scheme: dark)' } },
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ffffff', media: '(prefers-color-scheme: light)' } },
        // Social share card. Starlight emits og:title/description/url and
        // twitter:card=summary_large_image by default, but no image; og:image
        // must be an absolute URL for social scrapers.
        { tag: 'meta', attrs: { property: 'og:image', content: 'https://wdl.docs.thearchive.world/og.png' } },
        { tag: 'meta', attrs: { property: 'og:image:width', content: '1200' } },
        { tag: 'meta', attrs: { property: 'og:image:height', content: '630' } },
        { tag: 'meta', attrs: { property: 'og:image:alt', content: 'Archive World Downloader' } },
        { tag: 'meta', attrs: { name: 'twitter:image', content: 'https://wdl.docs.thearchive.world/og.png' } },
        // PNG icon fallbacks alongside the SVG favicon (iOS ignores SVG icons).
        { tag: 'link', attrs: { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' } },
        { tag: 'link', attrs: { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' } },
      ],
      // English-only at launch; the root-locale form keeps English at the
      // site root so a later locale adds a /<lang>/ prefix without changing
      // any existing English URL.
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/thearchive-world/archive-world-downloader' },
      ],
      sidebar: [
        { label: 'Get started', items: [
          { label: 'Install with a launcher', slug: 'get-started/install-launcher' },
          { label: 'Install', slug: 'get-started/install' },
          { label: 'Your first download', slug: 'get-started/first-download' },
        ]},
        { label: 'Guides', items: [
          { label: 'Check what you actually saved', slug: 'guides/check-coverage' },
          { label: 'Resume an interrupted download', slug: 'guides/resume-download' },
          { label: 'Restore a download you opened in singleplayer', slug: 'guides/restore-download' },
          { label: 'Download from a replay', slug: 'guides/replay-download' },
        ]},
        { label: 'Settings, screens, and commands', items: [
          { label: 'Configuration', items: [
            { label: 'Interface settings', slug: 'reference/config/interface' },
            { label: 'World settings', slug: 'reference/config/world' },
            { label: 'Download settings', slug: 'reference/config/download' },
          ]},
          { label: 'The downloads screen', slug: 'reference/downloads-screen' },
          { label: 'The download HUD', slug: 'reference/hud' },
          { label: 'Commands and keybinds', slug: 'reference/commands' },
          { label: 'The wdl/ folder', slug: 'reference/wdl-folder' },
        ]},
        { label: 'Concepts', items: [
          { label: 'What gets downloaded', slug: 'concepts/what-gets-downloaded' },
          { label: 'When a download can hold the wrong thing', slug: 'concepts/wrong-contents' },
          { label: 'Chests carried by Minecarts, Boats, and animals', slug: 'concepts/container-vehicles' },
          { label: 'Why machines and redstone load stopped', slug: 'concepts/machines-load-stopped' },
          { label: 'How coverage is measured', slug: 'concepts/coverage-measurement' },
        ]},
      ],
    }),
  ],
});
