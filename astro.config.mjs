// @ts-check
import { defineConfig } from 'astro/config';

// Hosted on GitHub Pages under /hausla/ until a custom domain is added.
// When a domain is added: set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://pponetwothree.github.io',
  base: '/hausla',
  trailingSlash: 'ignore',
  i18n: {
    // English first; Hindi is next (Phase 5). Further languages are added here.
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
