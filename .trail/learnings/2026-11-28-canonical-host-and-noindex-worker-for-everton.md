---
title: "Canonical host and noindex: worker for pages, _headers for static files"
author: Everton
date: 2026-11-28
branch: t3/seo-melhorias-ranking
cost: { minutes: 1, tokens: 1716 }
id: l-714edb91
scope: repo
status: active
src: agent
touches:
  - lib/redirects.ts
  - worker/index.ts
  - app/components/json-ld.tsx
---

## Decided
- www.evertonresende.com and http:// get one 301 to https://evertonresende.com (same path and query) in the worker, before the legacy redirects. Only the two production hostnames match; preview URLs and localhost pass through, or the preview check before promoting breaks.
- workers.dev copies (default URL and every preview URL) answer X-Robots-Tag: noindex. Pages get it in the worker; static files (CV PDFs, OG images, fonts) get it from a host rule in public/_headers, because Workers Static Assets serves a matching file before the worker runs.
- JSON-LD is one entity: a Person with @id https://evertonresende.com/#person on the PT and EN homes (with WebSite and ProfilePage) and as author of every case Article. Services come from home.delivery.items, so the page and the schema share one text. No worksFor (he works independently, PJ) and no X or Instagram in sameAs (he has none listed).

## Tried and ruled out
- "run_worker_first": true to route static files through the worker: fetch(request) takes no env, so handler.fetch gets no ASSETS and every static file would 404. Needs env passed through and an env.ASSETS.fetch fallback first.

## Watch out
- Static files on www. and http:// still answer 200 (no 301): the worker never sees them. A zone-level "Always Use HTTPS" plus a www redirect rule would cover them.
- _headers host placeholders do not match a period, so the rule is https://:worker.:subdomain.workers.dev/* (preview hosts are "<prefix>-portfolio-everton.<account>.workers.dev", the same shape).

In the code: lib/redirects.ts canonicalRedirect, worker/index.ts, public/_headers, lib/json-ld.ts (homeJsonLd, caseJsonLd), app/components/json-ld.tsx.
