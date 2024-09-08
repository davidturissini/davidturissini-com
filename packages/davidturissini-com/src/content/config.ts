import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: ({ image }) => z.object({
    title: z.string(),
    draft: z.boolean().optional().default(false),
    pubDate: z.date().optional(),
    image: image().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
