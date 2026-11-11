// @ts-check
import { defineConfig } from 'astro/config';
import rehypeBaseLinks from './src/lib/rehype-base-links.mjs';

const base = '/hausla';

// Hosted on GitHub Pages under /hausla/ until a custom domain is added.
// When a domain is added: set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://pponetwothree.github.io',
  base,
  trailingSlash: 'ignore',
  // Astro's HTML compression drops the space before inline tags that start a new
  // line ("our<a>"). Keep whitespace; pages are small and gzip handles the rest.
  compressHTML: false,
  markdown: {
    rehypePlugins: [[rehypeBaseLinks, { base }]],
  },
  i18n: {
    // English first; Hindi is next (Phase 5). Further languages are added here.
    locales: ['en', 'hi'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },
});
