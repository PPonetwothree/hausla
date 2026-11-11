# Hausla — project memory

Hausla ("courage") is a free, India-first cancer resource platform: knowledge and
guides, a verified directory of care and financial help, and emotional support.
Tagline: "Courage for every step." / "हर कदम पर हौसला".

The founder stays anonymous publicly. Claude develops the site and drafts content;
the founder approves anything before it is published. Read `ROADMAP.md` at the start
of every session and update it at the end.

## Decisions already made (don't re-litigate without a reason)

- **Primary persona:** a caregiver from outside Delhi bringing a family member to
  Delhi NCR for treatment (often from UP, Bihar, Haryana).
- **Tone:** warm companion. Honest, never falsely cheerful. Never present positive
  thinking or willpower as a substitute for treatment.
- **Region first:** Delhi NCR (Delhi, Noida, Gurugram, Faridabad, Ghaziabad).
- **Languages:** English → Hindi → then by total patient burden (likely Bengali,
  Marathi, Tamil, Telugu, Kannada/Malayalam; confirm against ICMR-NCRP). Human
  review required for every translation of medical content.
- **Hindi words in English text:** wrapped in `<Term id="...">`, meaning shown on
  hover/tap/focus, defined once in `src/data/glossary.yaml`. Only first use underlined.
- **Cancer types first:** breast, oral/head-and-neck, cervical, lung, oesophageal,
  stomach, colorectal, childhood leukaemia (verify against GLOBOCAN 2022 / NCRP).
- **No medical reviewer yet → "curated, not authored".** Medical pages summarise
  named official sources (ICMR, NCDIR, Tata Memorial, AIIMS, WHO, NCI…) and show
  `<SourceBadge status="summarised">`. Never write original medical advice. Never
  recommend treatments, diagnose, or promise outcomes.
- **Stories:** never republish others' writing without permission. Story library =
  our one-line summary + short attributed quote + link to the original.
  Never fabricate stories or testimonials. Placeholders must be labelled "Sample".
- **Statistics:** never on the homepage. Live under Research & Data with source,
  date, coverage and methodology on every figure. Never fabricate or present
  estimates as confirmed.
- **No specialist (individual doctor) listings.** List hospital departments instead.
- **Directory entries** must have a source and `lastVerified` date (schema-enforced).
  Costs only from official sources (e.g. government package rates).
- **Privacy:** no accounts, no tracking, bookmarks in localStorage only.
- **No own forum** in year one; link to moderated existing communities.
- **Budget: ₹0.** GitHub Pages hosting at https://pponetwothree.github.io/hausla/.
- **Web only** (installable PWA later in Phase 1+). No native app.
- **AI features postponed** until a verified content base exists (~month 8+).

## Tech

- Astro 7 (static output), TypeScript strict, Node ≥ 22.23.4.
- Content collections in `src/content.config.ts`; schemas in `src/schemas/`.
  Register a collection only when its first real content arrives.
- Plain CSS with tokens in `src/styles/tokens.css`. No CSS framework.
- Fonts self-hosted via Fontsource: Atkinson Hyperlegible Next (body),
  Hanken Grotesk (headings), Mukta (Devanagari).
- Interactive bits: small inline `<script>`s. Add Preact islands only when a
  component genuinely needs state (finance finder, filters).
- Search: Pagefind 1.5.2 runs after `astro build` (see `package.json`). Pages are indexed via
  `data-pagefind-body` on `<main>` in `Base.astro`; `noindex` pages are left out. Section filter
  is derived from the URL there. Search UI: `src/pages/search.astro`. Not available in `astro dev`.
- Charts (Phase 4): Observable Plot; India maps must
  use official Survey of India boundaries.
- Deploy: `.github/workflows/deploy.yml` builds on push to `main`.

## Conventions

- **Always** build internal links with `url()` from `src/lib/url.ts` (base path is `/hausla`).
- Every text colour must pass WCAG AA (4.5:1) on `--bg`. `--clay` is decorative only.
- Touch targets ≥ 44px. Motion ≤ 300ms, and off under `prefers-reduced-motion`.
- Content is visible without JavaScript; JS only enhances.
- `compressHTML` is off in `astro.config.mjs` because it dropped the space before
  inline tags that start a new line ("our<a>"). Don't turn it back on without
  checking the built HTML for that.
- Guides are Markdown in `src/content/guides/`. Write internal links as `/find-care/...`;
  `src/lib/rehype-base-links.mjs` adds the `/hausla` base. Guide order/titles: `src/lib/guides.ts`.
- **Dependencies:** pin exact versions (`npm i -E`) released at least two weeks ago.
  Astro 7's default Markdown processor needs `@astrojs/markdown-remark` for rehype plugins.
- Crisis numbers live in `src/lib/site.ts` (`crisis`); re-verify before releases.
- Commands: `npm run dev`, `npm run build`, `npm run preview`.
