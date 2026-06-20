# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## What this is

The personal homepage at [oztamir.com](https://oztamir.com) — a single-page React
app. It introduces Oz Tamir and links out to the [blog](https://posts.oztamir.com/)
(an Astro site) and [talks](https://talks.oztamir.com/) site. Latest blog posts are
fetched live from the blog's static JSON feed (`$VITE_BLOG_URL/posts.json`).

## Stack

- **React 18** + **TypeScript**
- **Vite** (build + dev server)
- **Tailwind CSS 3** for styling
- **axios** for the talks API call (blog posts use `fetch`)
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

## Environment

- `VITE_BLOG_URL` — base URL of the blog. The `~/posts` section fetches
  `$VITE_BLOG_URL/posts.json` and links its heading there. Copy `.env.example`
  to `.env` to set it (currently the temporary `posts.oztamir.workers.dev` host
  until the Astro blog is repointed at `posts.oztamir.com`).

## Design language

This site deliberately matches the talks and blog sites:

- Background `#1a1a1a` (`ink`), text `#f2f2f2` (`paper`), accent `#FFB300` (`golden`)
- **JetBrains Mono** everywhere (loaded via Google Fonts in `index.html`; set as
  the default `font-mono`/`font-sans` in `tailwind.config.js`)
- **Dark only** — no light mode, no theme toggle
- Minimal: single centered column, thin `border-white/10` dividers, generous spacing

Keep new UI consistent with this. Prefer Tailwind utility classes over custom CSS.

## Structure

- `src/App.tsx` — page composition (Hero, `~/posts`, `~/talks`, Socials, Footer)
- `src/components/`
  - `Avatar.tsx` — round profile photo with golden halo
  - `SectionList.tsx` — generic titled list of rows; reused for any "section"
  - `BlogPosts.tsx` — thin adapter: maps fetched posts, feeds `SectionList` (`~/posts`)
  - `Talks.tsx` — thin adapter: fetches talks, feeds `SectionList` (`~/talks`)
  - `Socials.tsx` — footer icon row
- `src/hooks/`
  - `useLatestPosts.ts` — fetches latest posts from the blog's JSON feed
  - `useTalks.ts` — fetches talks from the talks site API
- `src/api/`
  - `talksApi.ts` — axios client for `talks.oztamir.com/api`
- `public/` — static assets, `llms.txt`, profile images, favicon, OG image

## Adding a section (Projects, …)

`SectionList` is generic. Mirror `BlogPosts`/`Talks`: write a small adapter that
fetches (or hard-codes) data, maps it to `SectionItem[]`, and renders a
`<SectionList title="~/projects" items={...} />`. Then drop the adapter into the
`<main>` in `App.tsx`. Section headings render as authored (terminal-style
`~/path` labels), so keep the lowercase convention.

## Conventions

- Conventional Commits for messages (`feat:`, `fix:`, `docs:`, …).
- Keep components small and single-purpose.
- Generic, data-driven components over one-off markup.
