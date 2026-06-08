# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## What this is

The personal homepage at [oztamir.com](https://oztamir.com) — a single-page React
app. It introduces Oz Tamir and links out to the [blog](https://posts.oztamir.com/)
(Ghost CMS) and [talks](https://talks.oztamir.com/) site. Latest blog posts are
fetched live from the Ghost Content API.

## Stack

- **React 18** + **TypeScript**
- **Vite** (build + dev server)
- **Tailwind CSS 3** for styling
- **axios** for the Ghost API call
- **lucide-react** for icons

## Commands

```sh
npm install        # install deps
npm run dev        # local dev server (do not run unless asked)
npm run build      # type-check (tsc) + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint, zero-warning policy
```

`npm run build` is the canonical check — it runs `tsc` before bundling, so a
green build means types pass too.

## Design language

This site deliberately matches the talks and blog sites:

- Background `#1a1a1a` (`ink`), text `#f2f2f2` (`paper`), accent `#FFB300` (`golden`)
- **JetBrains Mono** everywhere (loaded via Google Fonts in `index.html`; set as
  the default `font-mono`/`font-sans` in `tailwind.config.js`)
- **Dark only** — no light mode, no theme toggle
- Minimal: single centered column, thin `border-white/10` dividers, generous spacing

Keep new UI consistent with this. Prefer Tailwind utility classes over custom CSS.

## Structure

- `src/App.tsx` — page composition (Hero, LinkBar, BlogPosts, Socials, Footer)
- `src/components/`
  - `Avatar.tsx` — round profile photo
  - `LinkBar.tsx` — generic, data-driven row of text links (Blog · Talks · …)
  - `SectionList.tsx` — generic titled list of rows; reused for any "section"
    (blog posts now, talks/projects later)
  - `BlogPosts.tsx` — thin adapter: fetches posts, feeds `SectionList`
  - `Socials.tsx` — footer icon row
- `src/hooks/useLatestPosts.ts` — fetches latest posts from Ghost
- `src/api/ghostApi.ts` — axios client for the Ghost Content API
- `public/` — static assets, `llms.txt`, profile images, favicon, OG image

## Adding a section (Talks, Projects, …)

`SectionList` is generic. To add a "Talks" section, render another `<SectionList
title="Talks" items={...} />` in `App.tsx`. To add a top-level nav entry, append
to the `navLinks` array in `App.tsx`.

## Conventions

- Conventional Commits for messages (`feat:`, `fix:`, `docs:`, …).
- Keep components small and single-purpose.
- Generic, data-driven components over one-off markup.
