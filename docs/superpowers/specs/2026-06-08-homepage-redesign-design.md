# Homepage Redesign — Design

**Date:** 2026-06-08
**Goal:** Redesign oztamir.com to match the minimal, monospace, dark aesthetic of
`talks.oztamir.com` (code in `~/Code/talks`) and `posts.oztamir.com` (Ghost blog).
Keep React + Tailwind + Vite. Modernize the repo (AGENTS.md, CLAUDE.md, llms.txt).

## Visual language (shared with talks + blog)

- Background `#1a1a1a`, primary text `#f2f2f2`
- Golden accent `#FFB300` (already in Tailwind config as `golden`), `darkGolden` `#FFA000`
- JetBrains Mono everywhere (Google Fonts: `ital,wght@0,400;0,500;0,700;1,400`),
  set as the default `font-mono` / `font-sans` so the whole page is monospace
- Thin dividers (`border-white/10`), generous vertical spacing
- Single centered column, max width ~`3xl`, comfortable padding on mobile
- **Dark only** — remove `useDarkMode`, the `me_dark.png` swap, and light-mode CSS

## Layout (top → bottom)

```
            ( ◯ )                  circular avatar — public/profile/profile-256.png
          OZ TAMIR                 golden mono eyebrow
   ¯\_(ツ)_/¯ as a Service          big mono h1 (kept verbatim)
   Hi, I'm Oz 👋 ... [REDACTED]     kept intro copy + working-on + inline blog link
       Blog · Talks                text link bar (golden hover), near the top
   ─────────────────────────
   Latest Posts                    generic SectionList instance (blog posts, kept)
     title         excerpt  →      rows styled like the talks list
   ─────────────────────────
   [icon row: GitHub Twitter LinkedIn Email]   existing Socials, footer
   This site is open-source 🚀      footer link (kept)
```

## Components

- **`LinkBar`** — generic, data-driven from `{ label, href }[]`. Renders the
  `Blog · Talks` row as monospace text links with golden hover. Adding `Projects`
  later = one array entry. Lives near the top of the hero.
- **`SectionList`** — generic titled list. Props: `title`, `titleHref?`,
  `items: { title, href, excerpt?, meta? }[]`. Renders a heading + dividered rows
  (title left, optional `meta` right, excerpt under title, arrow on hover) styled
  like the talks list. Reusable as-is for a future "Talks" section.
- **`BlogPosts`** — refactored to a thin adapter: fetch via existing
  `useLatestPosts`, map posts → `SectionList` items. No bespoke card grid anymore.
- **`Socials`** — kept (icon row), restyled to golden/mono palette, moved to footer.
- **`Avatar`**, **`Hero`** — presentational.
- `useLatestPosts` / `ghostApi` — unchanged.

## Files touched

- `tailwind.config.js` — add JetBrains Mono to `fontFamily.mono`/`sans`; keep golden colors.
- `index.html` — add Google Fonts links; update favicon to match (optional); keep meta/Plausible.
- `src/index.css` — dark bg only; remove light-mode block; set mono default.
- `src/App.tsx` — rebuild as centered column (Avatar, Hero, LinkBar, BlogPosts, Socials, footer).
- `src/App.css` — remove if unused.
- New: `src/components/LinkBar.tsx`, `src/components/SectionList.tsx`, `src/components/Avatar.tsx`.
- Remove: `src/hooks/useDarkMode.ts` (no longer needed).

## Repo modernization

- `AGENTS.md` — stack, conventions, commands, structure (source of truth).
- `CLAUDE.md` — points to `@AGENTS.md`.
- `public/llms.txt` — served at `oztamir.com/llms.txt`; who Oz is + links to blog/talks/github.
- `README.md` — refreshed.

## Out of scope (YAGNI)

- No router, no real Talks data yet (link only; SectionList ready for it later)
- No Projects entry yet (one-line addition when wanted)
- No light mode
