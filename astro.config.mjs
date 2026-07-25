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
      // English-only at launch; the root-locale form keeps English at the
      // site root so a later locale adds a /<lang>/ prefix without changing
      // any existing English URL.
      locales: {
        root: { label: 'English', lang: 'en' },
      },
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/thearchive-world/archive-world-downloader' },
      ],
    }),
  ],
});
