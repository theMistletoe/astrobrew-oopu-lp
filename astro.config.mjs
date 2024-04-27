import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  })]
});