@AGENTS.md

# Portfolio — Peace Williams-Ojomu

Dark editorial personal portfolio built with Next.js 16 App Router.

## Stack

- **Next.js** 16.2.4 — App Router, Turbopack
- **React** 19, **TypeScript**
- **Tailwind CSS** v4 via `@tailwindcss/postcss`
- **Framer Motion** — animations and scroll-reveal
- **Biome** — linter and formatter (not ESLint, not Prettier)

## Fonts

Loaded via `next/font/google` in `src/app/layout.tsx`:
- `Fraunces` → CSS var `--font-fraunces` (display headings, serif)
- `DM Mono` → CSS var `--font-dm-mono` (body, labels, monospace)

## Design tokens

All CSS custom properties are defined in `src/app/globals.css`:
- `--bg`, `--bg-card` — background levels
- `--fg`, `--fg-muted` — text levels
- `--border`, `--border-hi` — hairline borders
- `--amber`, `--rose`, `--sky`, `--sage`, `--violet` — accent palette

## File layout

```
src/
├── app/
│   ├── globals.css        design tokens + base styles
│   ├── layout.tsx         fonts, metadata (Server Component)
│   └── page.tsx           assembles sections (Server Component)
├── components/
│   ├── NavBar.tsx          fixed nav, fades in on scroll
│   ├── HeroSection.tsx     staggered name reveal + tagline
│   ├── AboutSection.tsx    bio + skill pills
│   ├── ProjectsSection.tsx hover-expand project rows
│   ├── ExperienceSection.tsx  scroll-revealed experience rows
│   ├── ContactSection.tsx  slide-on-hover contact links
│   └── Footer.tsx          static footer
└── lib/
    └── data.ts             PROJECTS, SKILLS, EXPERIENCE, CONTACT_LINKS
```

## Conventions

- All animated/interactive components have `'use client'` at the top
- `page.tsx` and `layout.tsx` remain Server Components
- Content data lives in `src/lib/data.ts` — edit there to update projects, skills, experience, or contact links
- Inline styles are used for design-system values (CSS vars + `clamp()` sizes); Tailwind is available for utilities

## Commands

```bash
npm run dev       # dev server (Turbopack)
npm run build     # production build
npx biome check   # lint + format check
```
