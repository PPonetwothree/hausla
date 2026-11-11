# Hausla roadmap

Working style: small steps, most days. Each session: read this file, pick the next
unchecked item, finish it, update this file, commit.

## Phase 0 — Foundation (current)

- [x] Project setup: Astro, TypeScript, fonts, folder structure
- [x] Content schemas (guide, hospital, story, glossary) with required sources and dates
- [x] Design tokens and base styles (WCAG AA colours, reduced motion)
- [x] Components: Header, Footer, CrisisLink, Logo, Icon, Term, StartHere, GuideCard,
      StoryCard, SourceBadge, Disclosure
- [x] Style tile at `/style-tile`, glossary at `/glossary`, holding homepage, friendly 404
- [x] GitHub Pages deploy workflow (Pages enabled, source: GitHub Actions)
- [x] Founder review of the style tile (approved as is)
- [x] Pages: About, Editorial policy (with sources & methods merged in), Disclaimer, Privacy
- [ ] **Founder: create a project inbox** (e.g. a new free email account), then set
      `site.contactEmail` in `src/lib/site.ts` ← next
- [ ] **Founder: create a free correction form** (Tally or Google Forms), then set
      `site.reportErrorUrl`; link "Report an error" from every page
- [ ] Optional: anonymous founder's note on the About page (founder writes it)
- [ ] Check domain / trademark / NGO-name availability for "Hausla"

## Phase 1 — Caregiver MVP (months 1–3)

- [x] Real homepage (Start here, helpline strip, note for caregivers, stories empty state,
      what's coming, how we work)
- [x] Five Start-here path pages + /start index (branch `start-paths`)
- [x] Hub pages for Learn, Guides, Support so no menu item 404s (branch `start-paths`)
- [x] Guide 6: Supporting a Loved One with Cancer (from NCI 'Caring for the Caregiver', 2024)
- [x] Guide 2: Processing the Diagnosis (from NCI 'Emotions and Cancer', updated Apr 2025)
- [x] Guide 1: Understanding Cancer: The Basics (from 4 NCI pages) — FIRST PRIORITY for a medical reviewer
- [x] Guide 5: Building Mental Strength & Resilience (from NCI PDQ 'Adjustment to Cancer', May 2025)
- [x] Guide 7: Life During and After Cancer (from NCI 'New Normal' Apr 2025, 'Follow-Up Medical Care' Dec 2024)
- [ ] Guides 3, 4 (Making Treatment Decisions; What to Expect During Treatment) — most medical; do last
- [x] Handbook draft: Coming to Delhi for treatment — on branch `handbook-coming-to-delhi`,
      awaiting founder review. Open items: DUSIB helpline and ORS details not yet confirmed
      from official sites (TLS errors from the sandbox); Vishram Sadan charges conflict between sources.
- [~] Delhi NCR hospital directory — first 6 entries on the review branch (AIIMS IRCH, NCI Jhajjar,
      DSCI East/West, Safdarjung, RGCI Rohini) with filters. Next to add: RML, Lok Nayak, LHMC,
      GTB, ESIC, RGCI Niti Bagh, Dharamshila Narayana, Action Cancer, major private hospitals.
      AIIMS pages block automated checks: verify AIIMS phone numbers by hand.
- [ ] Helplines page
- [x] Pagefind search with section filter: /search, header icon, homepage box (branch `site-search`)
- [ ] Bookmarks (localStorage) and printable checklists
- [ ] Installable PWA with offline handbooks

## Phase 2 — Money and care (months 3–5)

- [x] Financial-help guide (static) — PM-JAY (+70+, Delhi top-up), RAN/HMCPF, Delhi Arogya Kosh,
      PMNRF, documents checklist. On the review branch. DAK source is a 2015 document — confirm.
- [ ] State schemes: UP, Bihar, Haryana (home states of many Delhi patients)
- [ ] Interactive financial-help finder (after state schemes are researched)
- [ ] Guides 4–7
- [ ] Cancer-type pages for the 8 priority types
- [ ] Expanded glossary

## Phase 3 — Support (months 5–7)

- [ ] SafeSpace: communities (with peer-support disclaimer), mental health resources
- [ ] Story library (link cards); request permission from authors for longer extracts

## Phase 4 — Data (months 6–8)

- [ ] Statistics section (ICMR-NCRP, GLOBOCAN) with full source attribution
- [ ] Research library and learning paths for students

## Phase 5 — Hindi (months 8–10)

- [ ] Hindi version of core pages; recruit a Hindi reviewer and a medical reviewer

## Phase 6 — Grow (months 10–12)

- [ ] More languages and states; evaluate AI-assisted discovery

## Session log

- 2026-11-11 — Phase 0 started. Project scaffolded; style tile, glossary, holding
  homepage and deploy workflow built. Style tile approved. Trust pages written
  (About, How we make Hausla, Disclaimer, Privacy); contact shows "being set up"
  until an inbox exists. Real homepage live; fixed dropped spaces site-wide
  (compressHTML off). Delhi handbook drafted on a review branch; network allowlist
  extended for official sites (aiims.edu, ors.gov.in, dusib, vmmc-sjh, telemanas, dsci,
  rgcirc, rmlh). Directory started (6 entries) + Find care landing page, same branch.
- (session 2) Financial-help guide written from PIB/MoHFW/Delhi health/PMNRF sources; allowlist
  extended for those. pmjay.gov.in and nha.gov.in refuse automated access (403) — PM-JAY facts
  come from PIB releases. Founder approved publishing; merged to main (handbook,
  directory, Find care, financial help). Then built Start-here paths + Learn/Guides/Support hubs
  on branch `start-paths`. State schemes (UP/Bihar/Haryana) deferred: official sources need
  hosts cms.neva.gov.in, SACHIS, Bihar health — only blogs/news found so far.
- (session 3) Guides infrastructure (collection, template, base-link plugin) + guide 6 on branch
  `guide-caregivers`. Pinned astro 7.4.4 and markdown-remark 7.3.5 (≥2 weeks old).
