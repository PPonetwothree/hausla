import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { glossarySchema } from './schemas/glossary';
import { hospitalSchema } from './schemas/hospital';
import { guideSchema } from './schemas/guide';

// Collections are registered as their content arrives, so empty ones don't
// produce build warnings. Schemas ready to register:
//   stories   -> ./schemas/story.ts     (file 'src/data/stories.yaml')

const glossary = defineCollection({
  loader: file('src/data/glossary.yaml'),
  schema: glossarySchema,
});

const hospitals = defineCollection({
  loader: file('src/data/hospitals.yaml'),
  schema: hospitalSchema,
});

const guides = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/guides' }),
  schema: guideSchema,
});

export const collections = { glossary, hospitals, guides };
