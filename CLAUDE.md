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
| `lib/markdown.ts` | Markdown version of every page + `/llms.txt` + `/llms-full.txt` (all pages, EN then PT), generated from `app/content` (for AI agents) |
| `lib/redirects.ts` | 301s: removed case pages → home section; `/llm.txt`, `/llm.md`, `/llms.md`, `/llm-full.txt` → standard llms names |
| `wrangler.jsonc` | Workers config: routes, custom domains, observability |

### How It Works

1. **Routing**: Hash-based anchors (`#work`, `#about`, `#contact`) on a single page — no multi-page routing
2. **SSR**: React Server Components rendered via vinext, which bridges Vite RSC with Cloudflare Workers
3. **Styling**: Tailwind utilities + Swiss design custom theme (no border-radius, Inter font, precise spacing). Custom classes in `globals.css` (`.swiss-label`, `.link-underline`, `.project-row`)
4. **Animations**: GSAP ScrollTrigger with `once: true` — elements animate in on first scroll into view
5. **Data**: Project data, timeline, expertise lists are JS constants inside `page.tsx`
6. **Path alias**: `@/*` maps to `./app/*` (configured in `tsconfig.json`)
7. **Markdown for agents**: page URLs answer Markdown (same URL, no redirect) when `Accept` asks for `text/markdown`, or when the User-Agent names an AI agent from an exact list (training bots `GPTBot`, `ClaudeBot`, `meta-externalagent`; assistants fetching for a person `ChatGPT-User`, `Claude-User`, `Perplexity-User`, `MistralAI-User`). Not by Cloudflare's `verifiedBotCategory`: its AI categories also hold search engines (Applebot, Bravebot, PetalBot) and real browsers driven by people. Search engines (Googlebot, OAI-SearchBot, PerplexityBot) and link previews (LinkedIn, WhatsApp) must keep the HTML. Also `/md`, `/index.md`, `/projects/<slug>.md` (and `/en/...`), `/llms.txt` and `/llms-full.txt`. New content fields must also be rendered in `lib/markdown.ts`. Imports inside `app/content` keep the `.ts` extension so `node --test` can load the real content.

### Deployment

- **Platform**: Cloudflare Workers
- **Domains**: `evertonresende.com`, `www.evertonresende.com`
- **Observability**: Workers Logs (100% sampling) + Cloudflare Web Analytics beacon
- **Assets**: Static files served via Workers `ASSETS` binding

### Standalone Documents

`curriculo.html` / `curriculo-en.html` (resume, PT/EN, styled by `curriculo.css`) and `carta.html` (cover letter) are standalone HTML documents, not part of the React app. The resume PDFs in `public/` come from `node scripts/cv/pdf.cjs <html> <pdf> <site>` (Playwright Chromium via `PLAYWRIGHT_DIR`; A4, tagged, footer with page numbers). It aborts unless the output is exactly 2 pages and JetBrains Mono is installed for the user (the footer template cannot load `@font-face`; install steps in the script). `node scripts/cv/measure.cjs <html>` prints each block's height and the page-2 slack before generating. Each job/project opens with a one-line `.result` strip whose facts must already exist in that CV's bullets or in `app/content`; the PDF font subsets have no "→", write "to"/"para".

## Design System

Swiss/Dieter Rams aesthetic: Inter font only, no border-radius, minimal color palette (`#fafafa` bg, `#141414` fg), uppercase labels with wide letter-spacing, generous whitespace.
