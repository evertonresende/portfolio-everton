---
title: "Home hero: role and tagline on two lines, no stats strip"
author: Everton
date: 2026-11-20
branch: t3/consistencia-visual-site-stats
cost: { minutes: 19, tokens: 203953 }
id: l-949cf288
scope: repo
status: active
src: agent
touches:
  - lib/markdown.test.ts
  - app/components/home/hero.tsx
  - lib/markdown.ts
  - app/components/ui/stat-strip.tsx
---

## Decided
- The hero H1 is two lines: "AI Engineer" at text-display-1 and the tagline ("agentes de IA em produção." / "AI agents in production.") at text-display-2 in text-muted. The whole sentence at display-1 wrapped to 3–4 lines on desktop and left the "·" hanging at the end of line 1, and the user called it ugly (2026-11-20).
- 2026-11-28: the role became "Forward Deployed AI Engineer" (his choice, same as LinkedIn and the CV job title). The full role at display-1 wraps to 3–4 lines, so the H1 has three tiers: "Forward Deployed" at text-display-2 in foreground, "AI Engineer" at display-1, the tagline at display-2 muted. The content keeps hero.qualifier and hero.title apart only for this layout; a plain " " between them keeps the H1 text and the Markdown reading "Forward Deployed AI Engineer · …". The OG images were remade the same way (og-v2.png, og-en-v2.png).
- Below 400px the floors of the tokens (display-1 60px, display-2 36px) broke "AI Engineer" and "Forward Deployed" into two lines each at 360–375. The hero alone overrides them with max-[400px]:text-[length:14vw] and 9vw (one line each from 320 to 1440, measured). Do not lower the token floors: the case H1 and the closing share them.
- A visually hidden " · " stays between the spans, so the H1 text and the Markdown still read "AI Engineer · agentes de IA em produção.", the same line as the CV and LinkedIn.
- serif-i (Inter cv08) sits on the whole H1, not only the role line. Without it the gray EN tagline reads "Al agents".
- The three-cell stats strip under the hero (Tazz 10→23, Dental Smart ~20, Maximus RAG) was removed. The user found it weak ("RAG" is not a number) and the same facts are in the Cases rows. StatStrip now serves only the case pages.

## Tried and ruled out
- Shrinking text-display-1 so the full sentence fits 2 lines: the case-page H1 shares that token, and the closing "Vamos conversar." must stay smaller than the hero H1.
- Tagline in foreground color: muted gives the two-tier hierarchy; foreground made three heavy black blocks in a row.

## In the code:
- app/components/home/hero.tsx (H1 spans, gap-6 md:gap-10 for the "g" descender)
- app/content/{pt,en}/home.ts hero.title + hero.tagline; lib/markdown.ts joins them with " · "
- app/components/ui/stat-strip.tsx (size prop removed)
