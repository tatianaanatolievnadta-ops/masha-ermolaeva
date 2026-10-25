import { defineCollection, z } from 'astro:content';

const services = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['face', 'body', 'program']),
    shortResult: z.string(),
    priceFrom: z.number(),
    seoTitle: z.string().optional(),
    seoDescription: z.string(),
    forWhom: z.string(),
    resultWhen: z.string(),
    duration: z.string(),
    recovery: z.string(),
    holds: z.string(),
    contraindications: z.array(z.string()),
    steps: z.array(z.object({ title: z.string(), text: z.string() })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })),
    related: z.array(z.string()).max(3),
    order: z.number().default(0),
  }),
});

const reviews = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    text: z.string(),
    service: z.string().optional(),
    rating: z.number().min(1).max(5).default(5),
    date: z.coerce.date().optional(),
  }),
});

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    relatedService: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, reviews, posts };
