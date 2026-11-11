export const site = {
  name: 'Hausla',
  tagline: 'Courage for every step.',
  taglineHi: 'हर कदम पर हौसला',
  description:
    'A free, India-first companion for people affected by cancer — patients, caregivers, survivors and learners.',
  /** Public contact address. null until the founder sets up a project inbox. */
  contactEmail: null as string | null,
  /** Form for reporting mistakes. null until created (free Tally or Google Form). */
  reportErrorUrl: null as string | null,
};

/** Primary navigation. Pages not yet built show the friendly 404 for now. */
export const nav = [
  { label: 'Start here', href: '/start' },
  { label: 'Learn', href: '/learn' },
  { label: 'Guides', href: '/guides' },
  { label: 'Find care', href: '/find-care' },
  { label: 'Support', href: '/support' },
];

/**
 * Crisis contacts shown on every page. Verify before each release.
 * Tele-MANAS: Government of India national tele mental health programme.
 */
export const crisis = {
  lastVerified: '2026-11-11',
  lines: [
    { name: 'Tele-MANAS (mental health, 24×7, free)', number: '14416', tel: '14416' },
    { name: 'Emergency services', number: '112', tel: '112' },
  ],
};
