# AGENTS.md

Guidance for AI agents (and humans) working in this repo.

## What this is

The personal homepage at [oztamir.com](https://oztamir.com) — a single-page React
app. It introduces Oz Tamir and links out to the [blog](https://posts.oztamir.com/)
(Ghost CMS) and [talks](https://talks.oztamir.com/) site. Latest blog posts are
fetched live from the Ghost Content API.

## Stack

- **React 18** + **TypeScript**
- **Vite 8** (build + dev server) via the **`@cloudflare/vite-plugin`**
- **Tailwind CSS 3** for styling
- **axios** for the Ghost API call
- **lucide-react** for icons
- Deployed as a **Cloudflare Worker** (static assets) — see [Deployment](#deployment)

## Commands

```sh
npm install        # install deps
npm run dev        # local dev server (do not run unless asked)
npm run build      # type-check (tsc) + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint, zero-warning policy
npm run deploy     # build + wrangler deploy to Cloudflare
npm run cf-typegen # regenerate Worker binding types (wrangler types)
```

`npm run build` is the canonical check — it runs `tsc` before bundling, so a
green build means types pass too.

## Deployment

The site is a **Cloudflare Worker** named `homepage`, served as static assets
(no server-side Worker code). Config lives in `wrangler.jsonc`:

- No `main` — it's an assets-only Worker. The `@cloudflare/vite-plugin` writes
  `dist/wrangler.json` (with `assets.directory` filled in) during `vite build`,
  and `wrangler deploy` follows that redirected config.
- `assets.not_found_handling` is `single-page-application`, so any unmatched path
  serves `index.html` (real files like `robots.txt` / `sitemap.xml` are still
  served directly when they exist).

Two ways it ships:

1. **Workers Builds (Git CI)** — pushing to `main` triggers a build on
   Cloudflare. Build command: `npm run build`; deploy command: `npx wrangler
   deploy`. This is the normal path.
2. **Manual** — `npm run deploy` from a machine logged in via `wrangler login`.

> The plugin requires **Vite 6+**. Wrangler's framework auto-detection (used when
> there is *no* `wrangler.jsonc`) tries to configure the Vite plugin itself and
> errors on older Vite — the committed `wrangler.jsonc` is what keeps deploys
> deterministic.

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
  - `BlogPosts.tsx` — thin adapter: fetches posts, feeds `SectionList` (`~/posts`)
  - `Talks.tsx` — thin adapter: fetches talks, feeds `SectionList` (`~/talks`)
  - `Socials.tsx` — footer icon row
- `src/hooks/`
  - `useLatestPosts.ts` — fetches latest posts from Ghost
  - `useTalks.ts` — fetches talks from the talks site API
- `src/api/`
  - `ghostApi.ts` — axios client for the Ghost Content API
  - `talksApi.ts` — axios client for `talks.oztamir.com/api`
- `wrangler.jsonc` — Cloudflare Worker config (see [Deployment](#deployment))
- `vite.config.ts` — Vite + React + `@cloudflare/vite-plugin`
- `public/` — static assets, `llms.txt`, profile images, favicon, OG image
  - `robots.txt` — open crawl policy + AI-crawler rules + Content Signals
    (`ai-train/search/ai-input=yes`); references the sitemap
  - `sitemap.xml` — canonical URLs (just the homepage); bump `<lastmod>` on change
  - `.well-known/agent-skills/index.json` — Agent Skills Discovery index
    (RFC v0.2.0) listing Oz's published skills from `github.com/OzTamir/skills`

> Everything in `public/` is copied verbatim to the site root by Vite (the
> `.well-known/` dotfolder included). The skills index pins each `url` to an
> immutable commit SHA and records its `sha256:` digest, so url + digest stay
> consistent. When the skills repo changes, re-pin the SHA and recompute digests
> (`curl -fsSL <raw-url> | shasum -a 256`) rather than editing entries in place.

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
