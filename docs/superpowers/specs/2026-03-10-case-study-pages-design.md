# Case Study Pages — Design Spec

## Overview

Add dedicated case study pages to the portfolio, accessible when clicking project cards on the homepage. Inspired by Apparicio's structure, adapted to the existing Swiss/Dieter Rams design system.

## Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home (existing, cards become links) |
| `/projects/sat-bank` | `app/projects/[slug]/page.tsx` | SAT Bank case study |
| `/projects/softplan` | `app/projects/[slug]/page.tsx` | Softplan case study |
| `/projects/fapam` | `app/projects/[slug]/page.tsx` | FAPAM case study |

## New Files

| File | Role |
|------|------|
| `app/data/projects.ts` | Centralized project data (home + case pages share same source) |
| `app/projects/[slug]/page.tsx` | Case study page component |
| `app/components/page-transition.tsx` | Client component for fade in/out between pages |

## Modified Files

| File | Change |
|------|--------|
| `app/page.tsx` | Project rows become `<a>` links to `/projects/[slug]`, data imported from `app/data/projects.ts` |
| `app/components/nav.tsx` | Add back arrow/link when on case study pages |

## Case Study Page Sections

### 1. Hero
- Full-width title, `clamp(3rem, 6vw, 5rem)`, `font-light`
- Swiss-label with client name + year
- No image — typography only
- Back link to home ("Voltar")

### 2. Meta Grid
- 3-column grid with visible borders: Role / Timeline / Responsibilities
- Labels: uppercase, 11px, wide letter-spacing
- Values: 15px medium weight

### 3. Context + Challenges
- 50/50 split layout
- Left: narrative paragraphs (2-3)
- Right: numbered challenge list with index-number styling

### 4. High-level Goals
- Dark background section (#141414)
- 3 goal statements with index numbers (01, 02, 03)
- Separated by thin light dividers
- Large text, font-light

### 5. Impact Metrics
- 2x2 grid with visible borders
- Large number (clamp 3rem-5rem)
- Descriptive label below each
- Numbers animate (count-up) on scroll into view

### 6. Process Sections
- 2-3 blocks per project
- Each: HMW title + descriptive text + image placeholder
- Image placeholders: gray blocks (#e0e0e0) with correct aspect ratios (16:9 or 4:3)
- Subtle parallax on image containers

### 7. Retrospective
- Contained to 8/12 columns
- Neutral background
- Reflective text paragraph

### 8. Next Project
- Full-width link bar
- Shows next project title + company
- Hover: invert colors (#fafafa <-> #141414)
- Circular navigation (FAPAM -> SAT Bank)

### 9. Footer
- Same contact footer as homepage (reuse)

## Animations

| Element | Animation | Trigger |
|---------|-----------|---------|
| Page transition | Fade out 0.3s -> navigate -> fade in 0.3s | Route change |
| All sections | `y: 20->0`, `opacity: 0->1`, `power3.out`, 0.6s | ScrollTrigger |
| Grid borders | `scaleX(0->1)` | ScrollTrigger |
| Impact numbers | Count-up from 0 | ScrollTrigger (once) |
| Image placeholders | Parallax `y: -5% to 5%` inside overflow-hidden | Scroll |

## Data Structure

```ts
interface Project {
  slug: string
  title: string
  company: string
  year: string
  role: string
  timeline: string
  responsibilities: string[]
  context: string[]          // paragraphs
  challenges: string[]       // 6-8 items
  goals: string[]            // 3 statements
  metrics: {
    value: string
    label: string
  }[]                        // 4 items
  process: {
    title: string
    description: string
    imageAspect: "16:9" | "4:3"
  }[]                        // 2-3 items
  retrospective: string
}
```

## Design Constraints (Swiss/Rams)

- Font: Inter only (300, 400, 500, 600)
- Border-radius: 0 everywhere
- Colors: #fafafa bg, #141414 fg, #e0e0e0 borders, #767676 muted
- Labels: 11px, uppercase, tracking 0.25em
- No decorative elements — structure through typography and grid
- Image placeholders: solid #e0e0e0 blocks, no rounded corners

## Content Strategy

All text is placeholder based on existing portfolio data, expanded to fill case study structure. User will edit each case individually after implementation.
