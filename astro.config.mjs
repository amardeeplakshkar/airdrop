import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import node from '@astrojs/node'; // Import the Node adapter

export default defineConfig({
  integrations: [
    tailwind(),
    mdx()
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula'
    }
  },
});
