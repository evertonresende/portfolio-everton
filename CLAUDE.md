# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development

```bash
npm run dev        # Vite dev server with HMR
npm run build      # Production build (Vite + Workers bundle)
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to Cloudflare Workers (vite build && wrangler deploy)
```

**Node version**: 22 (see `.nvmrc`)
**Package manager**: npm

## Architecture

Single-page portfolio site built with **React 19 Server Components** via Vite RSC plugin, deployed on **Cloudflare Workers**.

### Stack

- **React 19** with RSC (`@vitejs/plugin-rsc` + `vinext` bridge)
- **Vite 7** as build tool
- **Tailwind CSS v4** (JIT via `@tailwindcss/vite`)
- **GSAP** with ScrollTrigger for scroll-based animations
- **Cloudflare Workers** runtime with `wrangler` for deployment

### Key Files

| File | Role |
|------|------|
| `app/page.tsx` | Entire page content — hero, beliefs, projects, about, footer |
| `app/layout.tsx` | Root layout, metadata, font loading, analytics beacon |
| `app/globals.css` | Swiss design system: custom theme, animations, CSS variables |
| `app/components/nav.tsx` | Navigation with scroll detection + mobile menu |
| `app/components/scroll-reveal.tsx` | GSAP ScrollTrigger wrappers (ScrollReveal, LetterReveal) |
| `worker/index.ts` | Cloudflare Worker entry point (vinext handler) |
| `lib/utils.ts` | `cn()` utility (clsx + tailwind-merge) |
| `wrangler.jsonc` | Workers config: routes, custom domains, observability |

### How It Works

1. **Routing**: Hash-based anchors (`#work`, `#about`, `#contact`) on a single page — no multi-page routing
2. **SSR**: React Server Components rendered via vinext, which bridges Vite RSC with Cloudflare Workers
3. **Styling**: Tailwind utilities + Swiss design custom theme (no border-radius, Inter font, precise spacing). Custom classes in `globals.css` (`.swiss-label`, `.link-underline`, `.project-row`)
4. **Animations**: GSAP ScrollTrigger with `once: true` — elements animate in on first scroll into view
5. **Data**: Project data, timeline, expertise lists are JS constants inside `page.tsx`
6. **Path alias**: `@/*` maps to `./app/*` (configured in `tsconfig.json`)

### Deployment

- **Platform**: Cloudflare Workers
- **Domains**: `evertonresende.com`, `www.evertonresende.com`
- **Observability**: Workers Logs (100% sampling) + Cloudflare Web Analytics beacon
- **Assets**: Static files served via Workers `ASSETS` binding

### Standalone Documents

`curriculo.html` and `carta.html` are self-contained HTML documents (resume/cover letter) with inline Swiss-styled CSS — not part of the React app.

## Design System

Swiss/Dieter Rams aesthetic: Inter font only, no border-radius, minimal color palette (`#fafafa` bg, `#141414` fg), uppercase labels with wide letter-spacing, generous whitespace.
