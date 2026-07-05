# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Single-page landing site for **Lash Legacy SG**, a Singapore lash & brow studio. The repo contains both a Next.js 15 project and a self-contained static HTML fallback.

## Common commands

```bash
# Install dependencies
npm install

# Start the Next.js dev server
npm run dev

# Build the Next.js static export (output goes to `dist/`)
npm run build

# Run Next.js lint
npm run lint
```

There are no tests in this project.

## Deployment modes

This codebase supports two ways to go live:

1. **Static HTML fallback (currently used for GitHub Pages)**  
   `public/index.html` is a complete, self-contained page using CDN Tailwind CSS. It requires no build and is the fastest way to publish. It is currently deployed to `https://phichua.github.io/lash-legacy-sg/`.

2. **Next.js static export (future / Vercel path)**  
   `next.config.js` uses `output: 'export'` and `distDir: 'dist'`. Running `npm run build` produces a static site in `dist/`. To deploy to Vercel, link the `phichua/lash-legacy-sg` repo and use the Next.js preset with output directory `dist` (or the static preset with output directory `public` if deploying only `index.html`).

## Data flow

- `lib/salon-data.ts` is the single source of truth for all salon information (name, contact details, hours, services, prices, about text, gallery images).
- React components in `components/` import from `@/lib/salon-data`.
- `public/index.html` is a hand-maintained static mirror of the React version. When salon data changes, update **both** `lib/salon-data.ts` and `public/index.html` until the static fallback is generated automatically from the React build.

## Architecture

- **Framework:** Next.js 15 App Router (`app/`).
- **Styling:** Tailwind CSS 3 with a custom `rose` palette in `tailwind.config.ts`.
- **Font:** Geist (Sans + Mono) loaded via `next/font/google` in `app/layout.tsx`.
- **Page structure:** `app/page.tsx` composes sections in order: Navbar → Hero → Services → About → Gallery → Contact → Footer.
- **Components:** Mostly server components. `components/navbar.tsx` is a client component (`"use client"`) because it manages mobile menu state.
- **Images:** Gallery and hero images are loaded from Unsplash URLs; no local image assets are stored in the repo.

## Important files

- `lib/salon-data.ts` — all editable salon content.
- `public/index.html` — standalone static page used by GitHub Pages.
- `next.config.js` — static export configuration.
- `upload.ps1` — PowerShell helper that uploads `public/index.html` to GitHub via the Contents API. It previously contained a hardcoded GitHub token; rotate the token and replace it with an environment variable or secure secret before reusing.

## Things to watch

- The static `public/index.html` and the React `components/` can drift. Keep them in sync when editing copy, prices, or contact details.
- `tsconfig.json` maps `@/*` to `./*`, so imports use `@/components/...` and `@/lib/...`.
- The project has no runtime secrets, API routes, or backend dependencies.
