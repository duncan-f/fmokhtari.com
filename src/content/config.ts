import { z, defineCollection } from 'astro:content';

const postsCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  'posts': postsCollection
}
