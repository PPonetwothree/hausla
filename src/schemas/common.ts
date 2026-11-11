import { z } from 'astro/zod';

/** A source that backs a piece of content. Every medical claim must trace to one. */
export const sourceSchema = z.object({
  title: z.string(),
  publisher: z.string(), // e.g. "ICMR-NCDIR", "Tata Memorial Centre", "WHO"
  url: z.url(),
  published: z.coerce.date().optional(),
  accessed: z.coerce.date(),
});

/**
 * Honest review status. Until a qualified reviewer joins, medical content is
 * "summarised" from official sources and says so on the page.
 */
export const reviewSchema = z.object({
  status: z.enum(['summarised', 'medically-reviewed']),
  reviewer: z.string().optional(), // name or qualification, e.g. "Oncology nurse, MSc"
  lastChecked: z.coerce.date(),
  nextReviewDue: z.coerce.date().optional(),
});

export const audienceSchema = z.enum([
  'caregiver',
  'newly-diagnosed',
  'in-treatment',
  'after-treatment',
  'learner',
]);
