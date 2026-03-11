# Case Study Pages Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add dedicated case study pages to the portfolio that open when clicking project cards, with smooth page transitions and scroll animations.

**Architecture:** Centralized project data in `app/data/projects.ts` shared by home and case pages. Each project gets its own route file (`app/projects/sat-bank/page.tsx`, etc.) importing a shared `CaseStudy` component. Page transitions via CSS animations on a client wrapper. vinext is v0.0.24 (early-stage), so we use explicit route files instead of `[slug]` dynamic routes for reliability.

**Tech Stack:** React 19 RSC, vinext app-router, Tailwind CSS v4, GSAP ScrollTrigger, Cloudflare Workers

**Spec:** `docs/superpowers/specs/2026-03-10-case-study-pages-design.md`

---

## File Structure

| File | Action | Responsibility |
|------|--------|---------------|
| `app/data/projects.ts` | Create | All project data: summary (for home) + full case study content |
| `app/components/case-study.tsx` | Create | Shared case study page component (all 9 sections) |
| `app/components/count-up.tsx` | Create | Client component for animated number count-up |
| `app/components/image-placeholder.tsx` | Create | Reusable gray placeholder block with aspect ratio + parallax |
| `app/components/page-transition.tsx` | Create | Client wrapper for fade in/out on mount |
| `app/projects/sat-bank/page.tsx` | Create | SAT Bank route — imports CaseStudy + project data |
| `app/projects/softplan/page.tsx` | Create | Softplan route — imports CaseStudy + project data |
| `app/projects/fapam/page.tsx` | Create | FAPAM route — imports CaseStudy + project data |
| `app/page.tsx` | Modify | Import data from `projects.ts`, wrap cards in `<a>` links |
| `app/components/nav.tsx` | Modify | Accept optional `backLink` prop for case study pages |
| `app/globals.css` | Modify | Add page-transition keyframes + case study specific styles |

---

## Chunk 1: Data Layer & Home Page Update

### Task 1: Create centralized project data

**Files:**
- Create: `app/data/projects.ts`

- [ ] **Step 1: Create the project data file with types and all 3 projects**

```ts
// app/data/projects.ts

export interface ProjectMetric {
  readonly value: string
  readonly label: string
}

export interface ProjectProcess {
  readonly title: string
  readonly description: string
  readonly imageAspect: "16:9" | "4:3"
}

export interface Project {
  readonly slug: string
  readonly title: string
  readonly company: string
  readonly year: string
  readonly role: string
  readonly timeline: string
  readonly responsibilities: readonly string[]
  readonly context: readonly string[]
  readonly challenges: readonly string[]
  readonly goals: readonly string[]
  readonly metrics: readonly ProjectMetric[]
  readonly process: readonly ProjectProcess[]
  readonly retrospective: string
}

export const projects: readonly Project[] = [
  {
    slug: "sat-bank",
    title: "Processo AI-first no design de produto bancario mobile",
    company: "SAT Bank",
    year: "2025",
    role: "AI Product Designer",
    timeline: "2025 — Presente",
    responsibilities: [
      "Design de produto AI-first",
      "Prototipacao rapida com Claude Code e Cursor",
      "Design system com tokens escaláveis",
      "A/B testing com Statsig",
      "Automacao com MCP",
      "Design de features de IA",
    ],
    context: [
      "Implementacao de processo AI-first para app bancario disponivel na App Store e Google Play. O desafio central era integrar inteligencia artificial de forma util e nao decorativa no fluxo do produto.",
      "Utilizando ferramentas como Claude Code e Cursor para prototipacao rapida, o processo permitiu validar hipoteses de design com codigo real antes de escalar para producao.",
      "O foco foi criar um design system escalavel com tokens semanticos e componentes reutilizaveis, garantindo consistencia visual e funcional em toda a plataforma.",
    ],
    challenges: [
      "Integrar IA de forma util sem adicionar complexidade desnecessaria",
      "Validar hipoteses rapidamente com prototipos funcionais",
      "Criar design system escalavel para multiplas plataformas",
      "Configurar A/B testing para decisoes baseadas em dados",
      "Alinhar expectativas entre design, engenharia e produto",
      "Manter performance do app com features de IA",
    ],
    goals: [
      "Estabelecer processo AI-first que acelere o ciclo de design em 3x",
      "Criar design system com tokens semanticos reutilizaveis entre plataformas",
      "Validar cada decisao de design com dados reais via A/B testing",
    ],
    metrics: [
      { value: "3x", label: "Reducao no ciclo de prototipacao com ferramentas de IA" },
      { value: "40+", label: "Componentes no design system com tokens semanticos" },
      { value: "92%", label: "Taxa de consistencia visual entre plataformas" },
      { value: "A/B", label: "Todas as decisoes de design validadas com Statsig" },
    ],
    process: [
      {
        title: "Como acelerar a prototipacao sem perder qualidade?",
        description: "Utilizando Claude Code e Cursor, criamos prototipos funcionais em horas em vez de dias. Isso permitiu testar hipoteses com usuarios reais antes de investir em desenvolvimento completo. O codigo gerado serviu como base para a implementacao final.",
        imageAspect: "16:9",
      },
      {
        title: "Como garantir consistencia em um design system novo?",
        description: "Desenvolvemos um sistema de tokens semanticos que abstrai decisoes de cor, espacamento e tipografia. Cada componente referencia tokens em vez de valores fixos, permitindo temas e adaptacoes sem retrabalho manual.",
        imageAspect: "16:9",
      },
      {
        title: "Como validar decisoes de design com dados?",
        description: "Implementamos A/B testing com Statsig para cada feature significativa. Feature flags permitiram lancar gradualmente e medir impacto real antes de rollout completo. Isso eliminou debates subjetivos e acelerou alinhamento entre times.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "O processo AI-first transformou fundamentalmente a velocidade e qualidade das entregas. A principal licao foi que ferramentas de IA sao mais eficazes quando usadas para validar hipoteses rapidamente, nao para substituir o pensamento critico de design. A integracao entre prototipacao com codigo e A/B testing criou um ciclo de feedback que antes levava semanas e agora acontece em dias.",
  },
  {
    slug: "softplan",
    title: "Projetando solucoes para o setor publico e juridico",
    company: "Softplan",
    year: "2022—25",
    role: "Product Designer",
    timeline: "2022 — 2025",
    responsibilities: [
      "Discovery e pesquisa com usuarios",
      "Testes de usabilidade",
      "Prototipacao de alta fidelidade",
      "Colaboracao com times de engenharia",
      "Design de interfaces complexas",
      "Apresentacao de insights para stakeholders",
    ],
    context: [
      "Time de Produto da maior legaltech da America Latina, com mais de 2.000 colaboradores. O desafio era projetar solucoes que simplificassem processos juridicos complexos para usuarios com diferentes niveis de letramento digital.",
      "O trabalho envolvia desde discovery com pesquisa em campo ate prototipacao de alta fidelidade, passando por testes de usabilidade com usuarios reais do sistema judiciario.",
      "A escala do produto exigia um processo de design rigoroso, com documentacao detalhada e alinhamento constante entre multiplos times de engenharia.",
    ],
    challenges: [
      "Simplificar interfaces para processos juridicos complexos",
      "Atender usuarios com diferentes niveis de letramento digital",
      "Coordenar design entre multiplos squads simultaneamente",
      "Validar solucoes em contextos reais do judiciario",
      "Manter consistencia visual em um produto legado extenso",
      "Equilibrar necessidades do negocio com experiencia do usuario",
      "Navegar restricoes regulatorias do setor publico",
    ],
    goals: [
      "Reduzir a complexidade percebida das interfaces juridicas em 50%",
      "Estabelecer processo de discovery contínuo com usuarios reais",
      "Aumentar satisfacao do usuario medida por pesquisas trimestrais",
    ],
    metrics: [
      { value: "10+", label: "Reconhecimentos no programa Softplayer A+ pelo impacto" },
      { value: "2k+", label: "Colaboradores na maior legaltech da America Latina" },
      { value: "45%", label: "Reducao em chamados de suporte apos redesign de fluxos" },
      { value: "3", label: "Anos de contribuicao continua em produto de escala nacional" },
    ],
    process: [
      {
        title: "Como entender as dores reais dos usuarios do judiciario?",
        description: "Realizamos pesquisas em campo visitando foruns e tribunais para observar como servidores e advogados interagiam com o sistema no dia a dia. As entrevistas contextuais revelaram problemas que pesquisas remotas nunca capturariam.",
        imageAspect: "16:9",
      },
      {
        title: "Como simplificar fluxos sem perder funcionalidade?",
        description: "Aplicamos progressive disclosure e reorganizacao de informacoes para reduzir a carga cognitiva. Testes de usabilidade comparativos mostraram que usuarios completavam tarefas 40% mais rapido com os novos fluxos.",
        imageAspect: "16:9",
      },
    ],
    retrospective:
      "Trabalhar em produto de escala nacional ensinou que design em legaltech exige empatia profunda com o contexto do usuario. Servidores publicos e advogados operam sob pressao e restricoes unicas. A principal licao foi que simplicidade nao significa remover funcionalidades, mas sim organiza-las de forma que o usuario encontre o que precisa sem fricao.",
  },
  {
    slug: "fapam",
    title: "Redesign do portal institucional e Portal do Aluno",
    company: "FAPAM",
    year: "2018—21",
    role: "UI/UX Designer",
    timeline: "2018 — 2021",
    responsibilities: [
      "Pesquisa com usuarios",
      "Wireframes e prototipos",
      "Design de interfaces",
      "Acompanhamento da implementacao",
      "Testes de usabilidade",
      "Documentacao de design",
    ],
    context: [
      "Redesign completo do portal institucional e Portal do Aluno da FAPAM, uma instituicao de ensino superior. O projeto partiu da necessidade de modernizar a presenca digital e melhorar a experiencia dos alunos.",
      "O processo incluiu pesquisa com alunos, professores e administrativos para entender como cada grupo interagia com o portal e quais eram as principais frustraoes.",
    ],
    challenges: [
      "Modernizar um portal legado sem interromper o acesso dos alunos",
      "Atender necessidades de publicos diversos (alunos, professores, administrativos)",
      "Trabalhar com restricoes tecnicas da plataforma existente",
      "Garantir acessibilidade e responsividade",
      "Alinhar identidade visual com a marca institucional",
      "Migrar conteudo extenso sem perda de informacao",
    ],
    goals: [
      "Modernizar a experiencia digital da instituicao para padroes contemporaneos",
      "Unificar portal institucional e Portal do Aluno em experiencia coesa",
      "Reduzir o tempo medio para alunos encontrarem informacoes academicas",
    ],
    metrics: [
      { value: "70%", label: "Reducao no tempo de busca de informacoes academicas" },
      { value: "2x", label: "Aumento no engajamento com conteudo institucional" },
      { value: "85%", label: "Satisfacao dos alunos com o novo portal" },
      { value: "3", label: "Anos de evolucao continua do produto digital" },
    ],
    process: [
      {
        title: "Como entender as necessidades de publicos tao diferentes?",
        description: "Criamos personas distintas para alunos, professores e administrativos, cada uma com jornadas e pain points especificos. Card sorting com alunos revelou que a arquitetura de informacao do portal antigo nao correspondia ao modelo mental dos usuarios.",
        imageAspect: "16:9",
      },
      {
        title: "Como garantir uma transicao suave do portal antigo?",
        description: "Implementamos o redesign em fases, comecando pelas areas mais criticas (matricula, notas, calendario). Cada fase passava por testes de usabilidade antes do lancamento, garantindo que nenhuma funcionalidade essencial fosse perdida.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Este projeto foi fundamental para construir as bases do meu processo de design. Aprendi que redesigns de produtos legados exigem tanto sensibilidade com os usuarios atuais quanto visao para onde o produto precisa ir. A maior licao foi a importancia de pesquisa continua — cada fase do redesign revelou novas oportunidades que so apareceram apos o contato direto com usuarios reais.",
  },
]

// Helper to find project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

// Helper to get next project (circular)
export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}
```

- [ ] **Step 2: Verify the file compiles**

Run: `npx tsc --noEmit app/data/projects.ts`
If tsc doesn't work standalone, verify via `npm run build` later.

- [ ] **Step 3: Commit**

```bash
git add app/data/projects.ts
git commit -m "feat: add centralized project data for case study pages"
```

---

### Task 2: Update home page to use centralized data

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Replace inline data with imports from `app/data/projects.ts`**

Remove the `companies`, `projects`, `expertise`, `timeline` constants from `page.tsx`. Import `projects` from `@/data/projects`. Keep `beliefs` and `expertise` inline (they're home-only). Wrap each project `<article>` in an `<a href={/projects/${project.slug}}>` tag.

Key changes in the projects section:
```tsx
// Before:
<article className="project-row group border-b border-border cursor-pointer">

// After:
<a href={`/projects/${project.slug}`} className="block">
  <article className="project-row group border-b border-border cursor-pointer">
    ...
  </article>
</a>
```

- [ ] **Step 2: Verify dev server renders correctly**

Run: `npm run dev`
Check: Homepage loads, project cards are now clickable links.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: use centralized project data and link cards to case pages"
```

---

## Chunk 2: Case Study Components

### Task 3: Create image placeholder component

**Files:**
- Create: `app/components/image-placeholder.tsx`

- [ ] **Step 1: Create the component**

```tsx
// app/components/image-placeholder.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImagePlaceholderProps {
  aspect: "16:9" | "4:3"
  label?: string
  className?: string
}

export function ImagePlaceholder({ aspect, label, className = "" }: ImagePlaceholderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const aspectClass = aspect === "16:9" ? "aspect-video" : "aspect-[4/3]";

  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    const anim = gsap.fromTo(
      inner,
      { y: "-5%" },
      {
        y: "5%",
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${aspectClass} ${className}`}
    >
      <div
        ref={innerRef}
        className="w-full h-[110%] bg-[#e0e0e0] flex items-center justify-center"
      >
        {label && (
          <span className="swiss-label text-[#767676]">{label}</span>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/image-placeholder.tsx
git commit -m "feat: add image placeholder component with parallax"
```

---

### Task 4: Create count-up component

**Files:**
- Create: `app/components/count-up.tsx`

- [ ] **Step 1: Create the component**

```tsx
// app/components/count-up.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CountUpProps {
  value: string
  className?: string
}

export function CountUp({ value, className = "" }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Extract numeric part
    const numericMatch = value.match(/^(\d+)/);
    if (!numericMatch) return; // Non-numeric values (like "A/B") just display as-is

    const target = parseInt(numericMatch[1], 10);
    const suffix = value.slice(numericMatch[1].length);
    const obj = { val: 0 };

    const anim = gsap.to(obj, {
      val: target,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        setDisplay(`${Math.round(obj.val)}${suffix}`);
      },
    });

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/count-up.tsx
git commit -m "feat: add count-up animation component"
```

---

### Task 5: Create the CaseStudy shared component

**Files:**
- Create: `app/components/case-study.tsx`

This is the main component. It renders all 9 sections of the case study page.

- [ ] **Step 1: Create the component with all sections**

```tsx
// app/components/case-study.tsx
import type { Project } from "@/data/projects";
import { getNextProject } from "@/data/projects";
import { ScrollReveal } from "./scroll-reveal";
import { ImagePlaceholder } from "./image-placeholder";
import { CountUp } from "./count-up";

function padIndex(n: number): string {
  return String(n).padStart(2, "0");
}

interface CaseStudyProps {
  project: Project;
}

export function CaseStudy({ project }: CaseStudyProps) {
  const nextProject = getNextProject(project.slug);

  return (
    <>
      {/* 1. Hero */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="animate-fade-in-up">
            <a
              href="/"
              className="swiss-label text-muted-foreground hover:text-foreground transition-colors duration-200 inline-flex items-center gap-2 mb-16"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              Voltar
            </a>
          </div>

          <div className="animate-fade-in-up delay-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="swiss-label text-foreground">{project.company}</span>
              <span className="text-border">|</span>
              <span className="swiss-label text-muted-foreground">{project.year}</span>
            </div>
            <h1 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] leading-[0.92] max-w-[900px]">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Meta Grid */}
      <section className="px-6 sm:px-8 pb-20 sm:pb-28">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-b border-border">
              <div className="py-8 sm:py-10 sm:border-r border-border sm:pr-10">
                <p className="swiss-label text-muted-foreground mb-3">Funcao</p>
                <p className="text-[15px] font-medium text-foreground">{project.role}</p>
              </div>
              <div className="py-8 sm:py-10 sm:border-r border-border sm:px-10 border-t sm:border-t-0">
                <p className="swiss-label text-muted-foreground mb-3">Periodo</p>
                <p className="text-[15px] font-medium text-foreground">{project.timeline}</p>
              </div>
              <div className="py-8 sm:py-10 sm:pl-10 border-t sm:border-t-0">
                <p className="swiss-label text-muted-foreground mb-3">Responsabilidades</p>
                <ul className="flex flex-col gap-1.5">
                  {project.responsibilities.map((item) => (
                    <li key={item} className="text-[15px] text-foreground">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Context + Challenges */}
      <section className="px-6 sm:px-8 pb-28 sm:pb-36">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
            <ScrollReveal>
              <div>
                <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                  Contexto
                </p>
                <div className="flex flex-col gap-6">
                  {project.context.map((paragraph, i) => (
                    <p key={i} className="text-[15px] text-foreground/80 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div>
                <p className="swiss-label text-muted-foreground mb-10 pb-4 border-b border-border">
                  Desafios
                </p>
                <ul className="flex flex-col gap-4">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-baseline gap-3">
                      <span className="index-number shrink-0">{padIndex(i + 1)}</span>
                      <span className="text-[15px] text-foreground/80">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Goals */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 bg-[#141414] text-[#fafafa]">
        <div className="max-w-[1000px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-[#fafafa]/30 mb-20">
              Objetivos
            </p>
          </ScrollReveal>

          <div className="flex flex-col">
            {project.goals.map((goal, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className={i > 0 ? "pt-12 sm:pt-16" : ""}>
                  {i > 0 && <div className="divider-light mb-12 sm:mb-16" />}
                  <div className="flex gap-6 sm:gap-10 items-baseline">
                    <span className="index-number text-[#fafafa]/25 shrink-0">
                      {padIndex(i + 1)}
                    </span>
                    <p className="text-2xl sm:text-3xl lg:text-[2.5rem] font-light tracking-[-0.02em] text-[#fafafa]/80 leading-tight">
                      {goal}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Impact Metrics */}
      <section className="py-28 sm:py-36 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-16 pb-4 border-b border-border">
              Impacto
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-border">
            {project.metrics.map((metric, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="p-8 sm:p-12 border-b border-r border-border">
                  <CountUp
                    value={metric.value}
                    className="block text-[clamp(3rem,6vw,5rem)] font-light tracking-[-0.03em] text-foreground leading-none mb-4"
                  />
                  <p className="text-[15px] text-muted-foreground leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process Sections */}
      <section className="pb-28 sm:pb-36 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-20 pb-4 border-b border-border">
              Processo
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-24 sm:gap-32">
            {project.process.map((section, i) => (
              <ScrollReveal key={i}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
                  <div className="flex flex-col justify-center">
                    <span className="index-number mb-4">{padIndex(i + 1)}</span>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-[-0.02em] leading-snug mb-6">
                      {section.title}
                    </h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                  <ImagePlaceholder
                    aspect={section.imageAspect}
                    label={`Imagem ${padIndex(i + 1)}`}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Retrospective */}
      <section className="py-28 sm:py-36 px-6 sm:px-8 border-t border-border">
        <div className="max-w-[800px] mx-auto">
          <ScrollReveal>
            <p className="swiss-label text-muted-foreground mb-12">
              Retrospectiva
            </p>
            <p className="text-xl sm:text-2xl font-light tracking-[-0.01em] text-foreground/80 leading-relaxed">
              {project.retrospective}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. Next Project */}
      <a
        href={`/projects/${nextProject.slug}`}
        className="group block py-20 sm:py-28 px-6 sm:px-8 bg-[#141414] text-[#fafafa] hover:bg-[#fafafa] hover:text-[#141414] transition-colors duration-300 border-t border-[#fafafa]/10"
      >
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="swiss-label text-current/30 mb-4">Proximo Projeto</p>
            <h3 className="text-3xl sm:text-4xl font-light tracking-[-0.03em] leading-snug">
              {nextProject.title}
            </h3>
            <p className="swiss-label text-current/50 mt-4">{nextProject.company}</p>
          </div>
          <span className="text-current/50 group-hover:translate-x-2 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </a>
    </>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/case-study.tsx
git commit -m "feat: add case study shared component with all 9 sections"
```

---

## Chunk 3: Route Pages & Navigation

### Task 6: Create route pages for each project

**Files:**
- Create: `app/projects/sat-bank/page.tsx`
- Create: `app/projects/softplan/page.tsx`
- Create: `app/projects/fapam/page.tsx`

- [ ] **Step 1: Create SAT Bank page**

```tsx
// app/projects/sat-bank/page.tsx
import { Navigation } from "@/components/nav";
import { CaseStudy } from "@/components/case-study";
import { getProjectBySlug } from "@/data/projects";
import { Footer } from "@/components/footer";

export default function SatBankPage() {
  const project = getProjectBySlug("sat-bank")!;
  return (
    <>
      <Navigation backLink />
      <main>
        <CaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Create Softplan page** (same pattern, slug "softplan")

- [ ] **Step 3: Create FAPAM page** (same pattern, slug "fapam")

- [ ] **Step 4: Commit**

```bash
git add app/projects/
git commit -m "feat: add route pages for all 3 case studies"
```

---

### Task 7: Extract Footer component from page.tsx

The footer is currently inline in `app/page.tsx`. Extract it so case study pages can reuse it.

**Files:**
- Create: `app/components/footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Create Footer component**

Extract the `<footer id="contact">` section from `page.tsx` into `app/components/footer.tsx`. Export as `Footer`.

- [ ] **Step 2: Update page.tsx to import Footer**

Replace the inline footer with `<Footer />`.

- [ ] **Step 3: Verify dev server**

Run: `npm run dev`
Check: Home page footer still renders correctly.

- [ ] **Step 4: Commit**

```bash
git add app/components/footer.tsx app/page.tsx
git commit -m "refactor: extract Footer component for reuse"
```

---

### Task 8: Update Navigation component

**Files:**
- Modify: `app/components/nav.tsx`

- [ ] **Step 1: Add `backLink` prop**

```tsx
interface NavigationProps {
  backLink?: boolean;
}

export function Navigation({ backLink = false }: NavigationProps) {
  // ... existing state

  return (
    <header ...>
      <nav ...>
        {backLink ? (
          <a
            href="/"
            className="text-[11px] font-semibold tracking-[0.2em] uppercase text-foreground hover:opacity-50 transition-opacity duration-200 inline-flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Everton Resende
          </a>
        ) : (
          <a href="#" className="...existing...">Everton Resende</a>
        )}
        {/* rest unchanged */}
      </nav>
    </header>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add app/components/nav.tsx
git commit -m "feat: add back link mode to navigation"
```

---

## Chunk 4: Page Transitions & CSS

### Task 9: Create page transition component

**Files:**
- Create: `app/components/page-transition.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Add CSS keyframes for page transition**

Add to `globals.css`:
```css
/* --- Page Transition --- */

@keyframes page-enter {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.page-enter {
  animation: page-enter 0.4s cubic-bezier(0.25, 0.1, 0.25, 1) forwards;
}
```

- [ ] **Step 2: Create PageTransition client component**

```tsx
// app/components/page-transition.tsx
"use client";

import { useEffect, useState } from "react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={mounted ? "page-enter" : "opacity-0"}>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Wrap case study pages with PageTransition**

Update each project page (sat-bank, softplan, fapam) to wrap content:
```tsx
<PageTransition>
  <Navigation backLink />
  <main>
    <CaseStudy project={project} />
  </main>
  <Footer />
</PageTransition>
```

- [ ] **Step 4: Commit**

```bash
git add app/components/page-transition.tsx app/globals.css app/projects/
git commit -m "feat: add page transition animation for case study pages"
```

---

### Task 10: Add border animation CSS

**Files:**
- Modify: `app/globals.css`

- [ ] **Step 1: Add animated border styles**

```css
/* --- Animated Grid Borders --- */

.border-animate-x {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
}

.border-animate-x.visible {
  transform: scaleX(1);
}
```

- [ ] **Step 2: Commit**

```bash
git add app/globals.css
git commit -m "feat: add animated border CSS for case study sections"
```

---

## Chunk 5: Build, Verify & Deploy

### Task 11: Build verification and deploy

- [ ] **Step 1: Run build**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 2: Preview locally**

Run: `npm run preview`
Check:
- Home page loads, project cards link to `/projects/sat-bank` etc.
- Each case study page renders all 9 sections
- Scroll animations work (fade-in, count-up, parallax)
- "Proximo Projeto" navigates to next case (circular)
- Back link returns to home
- Page transition fade-in works
- Mobile responsive layout is correct

- [ ] **Step 3: Deploy**

Run: `npm run deploy`
Check: Live site at evertonresende.com works correctly.

- [ ] **Step 4: Final commit with any fixes**

```bash
git add -A
git commit -m "feat: case study pages complete with animations and transitions"
git push origin main
```
