import { z } from 'astro/zod';

/**
 * A story in the library. We link to the original and write our own one-line
 * summary — we never republish someone's writing without their permission.
 */
export const storySchema = z.object({
  title: z.string(),
  author: z.string(), // as credited by the original publisher; "Anonymous" if so
  perspective: z.enum(['patient', 'survivor', 'caregiver', 'clinician', 'bereaved']),
  themes: z.array(z.string()).min(1),
  ourSummary: z.string().max(200),
  quote: z.string().max(240).optional(), // short, attributed, linked
  url: z.url(),
  publisher: z.string(),
  published: z.coerce.date().optional(),
  permissionToRepublish: z.boolean().default(false),
  contentNote: z.string().optional(), // e.g. "Discusses end of life"
});
