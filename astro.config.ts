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

import rehypeRewrite, { RehypeRewriteOptions } from "rehype-rewrite";
import { classnames } from 'hast-util-classnames'

const shouldIgnore = (url: string): boolean => {
  const regex = /(\/404$|\/tag(s$|s\/)|\/categorie(s$|s\/)|\/[0-9]{1,}$)/;
  return regex.test(url);
};

const isInternalLink = (url: string | undefined): boolean => url?.startsWith("/") ?? false;
const isExternalLink = (url: string | undefined): boolean => url?.startsWith("https://") ?? false;
const toHrefType = (href: string | undefined): "internal" | "external" | "unknown" => {
  if (isExternalLink(href)) return "external"
  if (isInternalLink(href)) return "internal"
  return "unknown"
}

const rehypeRewriteOption: RehypeRewriteOptions = {
  selector: "a",
  rewrite: (node: any, index, parent) => {
    const href: string | undefined = (node as any)?.properties?.href;
    switch (toHrefType(href)) {
      case "internal": {
        classnames(node, "custom-anchor custom-anchor-internal")
        return
      }
      case "external": {
        classnames(node, "custom-anchor custom-anchor-external")
        return;
      }
      case "unknown": {
        console.info("Cannot identify unknown href type.", { href })
        return
      }
      default: {
        console.info("Cannot identify invalid href type.", { href })
        return
      }
    }
  },
};

export default defineConfig({
  site: SITE_URL,
  markdown: {
    rehypePlugins: [[rehypeRewrite, rehypeRewriteOption]],
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
