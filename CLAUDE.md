# CLAUDE.md — Salud Administrativa

## Project Overview

**Salud Administrativa** is a healthcare administrative platform built with Next.js 14 (App Router). The project is in early-stage development — currently serving a "coming soon" landing page. UI content is in **Spanish**.

## Tech Stack

- **Framework:** Next.js 14.2.3 (App Router)
- **Language:** TypeScript 5 (strict mode)
- **UI:** React 18 with functional components
- **Styling:** Tailwind CSS 3.4.1 + PostCSS
- **Linting:** ESLint with `next/core-web-vitals`
- **Font:** Inter (via `next/font/google`)
- **Package Manager:** npm

## Project Structure

```
src/
└── app/
    ├── components/        # Reusable UI components
    │   ├── inicio.tsx     # Landing page "Build" component (active)
    │   ├── main.tsx       # Card component (unused)
    │   └── sidebar.tsx    # Empty placeholder
    ├── layout.tsx         # Root layout (metadata, font, lang="es")
    ├── page.tsx           # Home page entry point
    ├── globals.css        # Tailwind directives + minimal custom CSS
    └── favicon.ico
public/
    ├── build.png          # Background image
    ├── next.svg
    └── vercel.svg
```

## Commands

```bash
npm run dev      # Start development server (next dev)
npm run build    # Production build (next build)
npm run start    # Start production server (next start)
npm run lint     # Run ESLint (next lint)
```

There is no test framework configured — no test commands are available.

## Code Conventions

### Components
- Use **named exports**: `export function ComponentName() { ... }`
- Functional components only — no class components
- All components are currently **server components** (no `'use client'` directive)
- Component files use lowercase names (e.g., `inicio.tsx`, `main.tsx`)

### TypeScript
- Strict mode is enabled — respect all strict checks
- Use `import type` for type-only imports: `import type { Metadata } from "next"`
- Props use `Readonly<>` wrapper: `{ children }: Readonly<{ children: React.ReactNode }>`
- Path alias `@/*` maps to `./src/*` (configured but not yet used in codebase)

### Styling
- Use **Tailwind utility classes** exclusively — no CSS modules or styled-components
- Custom Tailwind theme extensions are in `tailwind.config.ts`
- Custom background: `bg-build` maps to `/build.png`

### Naming
- File names: lowercase (e.g., `inicio.tsx`, `main.tsx`)
- Component names: PascalCase (e.g., `Build`, `Main`)
- UI text: Spanish language

### Imports
- Next.js imports first, then local components, then CSS
- Use relative paths for local imports (path alias `@/` available but not currently used)

## Architecture Notes

- **App Router pattern** — pages live in `src/app/`, not `pages/`
- No API routes (`src/app/api/`) exist yet
- No database, authentication, or state management configured
- No environment variables are currently in use (`.env*.local` is gitignored for future use)
- No CI/CD pipelines or Docker configuration

## Git Conventions

- Main branch: `master`
- Commit messages have been short/informal (single words or phrases)
- No branch protection or PR workflow currently enforced

## Key Files

| File | Purpose |
|------|---------|
| `next.config.mjs` | Next.js config (currently empty/default) |
| `tailwind.config.ts` | Tailwind theme extensions, content paths |
| `tsconfig.json` | TypeScript strict config, path aliases |
| `.eslintrc.json` | Extends `next/core-web-vitals` |
| `postcss.config.mjs` | PostCSS with Tailwind plugin |
