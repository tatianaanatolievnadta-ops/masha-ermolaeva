import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// GitHub Pages: https://tatianaanatolievnadta-ops.github.io/masha-ermolaeva/
// После своего домена .ru — уберите base и смените site.
export default defineConfig({
  site: 'https://tatianaanatolievnadta-ops.github.io',
  base: '/masha-ermolaeva',
  trailingSlash: 'always',
  output: 'static',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
});
