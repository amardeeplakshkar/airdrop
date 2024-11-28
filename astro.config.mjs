import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://airdropwatch.vercel.app',
  integrations: [tailwind(), mdx(), 
    sitemap({
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date('2024-11-28'),
      filter(item) {
        // Exclude any unwanted routes here
        return true;
      },
      serialize(item) {
        if (item.url === 'https://airdropwatch.vercel.app/guide/') {
          item.priority = 0.9;
        }
        // Home page priority
        if (item.url === 'https://airdropwatch.vercel.app/') {
          item.priority = 1.0;
        }

        // /airdrops priority
        if (item.url === 'https://airdropwatch.vercel.app/airdrops/') {
          item.priority = 0.9;
        }
        return item; 
      },
    }),],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
});