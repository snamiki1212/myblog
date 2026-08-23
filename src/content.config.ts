import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/index.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    slug: z.string(),
  }),
});

const about = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/about" }),
});

export const collections = { blog, about };
