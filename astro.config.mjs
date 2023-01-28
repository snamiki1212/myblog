import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/constants/site";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config

const shouldIgnore = (url) => {
  const regex = /(\/404$|\/tag(s$|s\/)|\/categorie(s$|s\/)|\/[0-9]{1,}$)/;
  return regex.test(url);
};

export default defineConfig({
  site: SITE_URL,
  markdown: {
    // syntaxHighlight: "prism",
  },
  integrations: [
    mdx(),
    tailwind(),
    react(),
    sitemap({ filter: (url) => !shouldIgnore(url) }),
    partytown({
      /**
       * @link https://www.kevinzunigacuellar.com/blog/google-analytics-in-astro/
       * Adds dataLayer.push as a forwarding-event.
       */
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
});
