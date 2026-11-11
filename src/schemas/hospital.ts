import { z } from 'astro/zod';
import { sourceSchema } from './common';

/**
 * A treatment centre in the Find Care directory (Phase 1, Delhi NCR first).
 * An entry without a source and a last-verified date fails the build.
 */
export const hospitalSchema = z.object({
  name: z.string(),
  type: z.enum([
    'government',
    'private',
    'regional-cancer-centre',
    'medical-college',
    'charitable',
  ]),
  ncgMember: z.boolean().default(false), // National Cancer Grid
  city: z.string(),
  state: z.string(),
  address: z.string(),
  departments: z.array(z.string()).default([]), // e.g. "Medical oncology", "Radiation oncology"
  cancerTypes: z.array(z.string()).default([]),
  contacts: z
    .array(
      z.object({
        label: z.string(), // "OPD enquiry", "Financial assistance cell"
        phone: z.string().optional(),
        email: z.email().optional(),
        url: z.url().optional(),
      }),
    )
    .default([]),
  schemesAccepted: z.array(z.string()).default([]), // e.g. "AB-PMJAY"
  website: z.url().optional(),
  sources: z.array(sourceSchema).min(1),
  lastVerified: z.coerce.date(),
  notes: z.string().optional(),
});
