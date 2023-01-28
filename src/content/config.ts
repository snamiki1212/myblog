import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      layout: z.string(),
      title: z.string(),
      createdAt: z.string(), // TODO: yyyy-mm-dd xx:xx
      updatedAt: z.string(), // TODO: yyyy-mm-dd xx:xx
      category: z.string(), // TODO: add Enum
      tags: z.array(z.string()),
      // slug: z.string(), // TODO: slug
    })
  }),
  about: defineCollection({
    // schema: z.object()
  })
}