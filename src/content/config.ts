import { defineCollection, z } from 'astro:content';

const airdrops = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    endDate: z.date().optional(),
    link: z.string().optional(),
    value: z.string(),
    requirements: z.array(z.string()),
    image: z.string(),
    status: z.enum(['active', 'ended', 'upcoming']),
    difficulty: z.enum(['easy', 'medium', 'hard']),
  })
});

export const collections = {
  airdrops,
};