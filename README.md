# Homepage

My personal homepage, live at **[oztamir.com](https://oztamir.com)**.

A minimal single-page React app that introduces me and links out to my
[blog](https://posts.oztamir.com/) and [talks](https://talks.oztamir.com/).
Latest blog posts are pulled live from the Ghost Content API. Styled to match
the talks and blog sites: dark, monospace (JetBrains Mono), golden accent.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS

## Commands

```sh
npm install      # install dependencies
npm run dev      # local dev server
npm run build    # type-check + production build (dist/)
npm run preview  # serve the production build
npm run lint     # eslint
```

## Project notes

See [`AGENTS.md`](./AGENTS.md) for the design language, file structure, and how to
add new sections (Talks, Projects, …). There's also a machine-readable
[`/llms.txt`](./public/llms.txt) served at the site root.
