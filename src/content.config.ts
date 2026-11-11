import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { glossarySchema } from './schemas/glossary';

// Collections are registered as their content arrives, so empty ones don't
// produce build warnings. Schemas ready to register:
//   guides    -> ./schemas/guide.ts     (glob 'src/content/guides/*.md')
//   hospitals -> ./schemas/hospital.ts  (file 'src/data/hospitals.yaml')
//   stories   -> ./schemas/story.ts     (file 'src/data/stories.yaml')

const glossary = defineCollection({
  loader: file('src/data/glossary.yaml'),
  schema: glossarySchema,
});

export const collections = { glossary };
