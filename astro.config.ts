import { defineConfig } from 'astro/config';

// GitHub Pages serves this repo at /portfolio, so every URL needs that base.
export default defineConfig({
  site: 'https://mayokun05.github.io',
  base: '/portfolio',
  trailingSlash: 'ignore',
});
