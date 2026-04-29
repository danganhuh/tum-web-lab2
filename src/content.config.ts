import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string()
  })
});

const event_announcements = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/event-announcements" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string()
  })
});

const event_cards = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/event-cards" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    image: z.string(),
    link: z.string()
  })
});

export const collections = {
  articles,
  event_announcements,
  event_cards
};
