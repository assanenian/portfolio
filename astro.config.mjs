import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://bdou.org',
  integrations: [mdx(), sitemap(), tailwind(), compress()],
  redirects: {
    '/': '/en/'
  }
});