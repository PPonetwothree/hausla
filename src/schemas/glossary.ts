import { z } from 'astro/zod';

/** A word explained by the <Term> component and listed on /glossary. */
export const glossarySchema = z.object({
  id: z.string(),
  term: z.string(),
  hindi: z.string().optional(),
  meaning: z.string().max(240), // short: shown in the tap/hover popup
  more: z.string().optional(), // longer explanation for the glossary page
});
