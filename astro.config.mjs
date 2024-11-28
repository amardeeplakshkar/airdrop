import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://airdropwatch.vercel.app',
  integrations: [tailwind(), mdx(), sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2024-11-28'),
  })],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
});