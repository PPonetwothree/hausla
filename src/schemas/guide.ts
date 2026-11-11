import { z } from 'astro/zod';
import { audienceSchema, reviewSchema, sourceSchema } from './common';

/** A long-form guide (the seven flagship guides, Phase 1–2). */
export const guideSchema = z.object({
  title: z.string(),
  summary: z.string().max(220),
  order: z.number().int().positive(),
  audience: z.array(audienceSchema).min(1),
  readingMinutes: z.number().int().positive(),
  sources: z.array(sourceSchema).min(1),
  review: reviewSchema,
  related: z.array(z.string()).default([]),
});
