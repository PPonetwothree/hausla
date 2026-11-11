import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { glossarySchema } from './schemas/glossary';
import { hospitalSchema } from './schemas/hospital';

// Collections are registered as their content arrives, so empty ones don't
// produce build warnings. Schemas ready to register:
//   guides    -> ./schemas/guide.ts     (glob 'src/content/guides/*.md')
//   stories   -> ./schemas/story.ts     (file 'src/data/stories.yaml')

const glossary = defineCollection({
  loader: file('src/data/glossary.yaml'),
  schema: glossarySchema,
});

const hospitals = defineCollection({
  loader: file('src/data/hospitals.yaml'),
  schema: hospitalSchema,
});

export const collections = { glossary, hospitals };
