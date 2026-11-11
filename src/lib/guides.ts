/** The seven flagship guides. A guide is "published" when its Markdown file exists. */
export const guidePlan = [
  { order: 1, title: 'Understanding Cancer: The Basics', text: 'What cancer is, how it grows, and what words like stage and grade mean.' },
  { order: 2, title: 'Processing the Diagnosis', text: 'The first days and weeks: what you might feel, and what can wait.' },
  { order: 3, title: 'Making Treatment Decisions', text: 'Understanding options, asking questions, and second opinions.' },
  { order: 4, title: 'What to Expect During Treatment', text: 'Surgery, chemotherapy and radiotherapy, and the days in between.' },
  { order: 5, title: 'Building Mental Strength & Resilience', text: 'Coping with fear and uncertainty, and finding realistic hope.' },
  { order: 6, title: 'Supporting a Loved One with Cancer', text: 'Practical and emotional help for caregivers, including caring for yourself.' },
  { order: 7, title: 'Life During and After Cancer', text: 'Work, family, follow-ups, and finding your feet again.' },
];

/** Non-guide pages a guide can list in `related`. */
export const relatedPages: Record<string, { title: string; href: string }> = {
  'coming-to-delhi': { title: 'Coming to Delhi for treatment', href: '/find-care/coming-to-delhi' },
  'financial-help': { title: 'Help with treatment costs', href: '/find-care/financial-help' },
  hospitals: { title: 'Cancer hospitals in Delhi NCR', href: '/find-care/hospitals' },
};
