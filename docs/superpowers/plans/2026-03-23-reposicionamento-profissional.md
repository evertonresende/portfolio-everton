# Reposicionamento Profissional — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Alinhar site, currículo, carta, LinkedIn e GitHub com posicionamento consistente de AI Product Designer — corrigindo datas, removendo linguagem de dev, adicionando case Softplan protegido.

**Architecture:** Mudanças de conteúdo em 6 arquivos do site (page.tsx, projects.ts, footer.tsx, novo page softplan) + 2 HTMLs standalone (curriculo.html, carta.html) + textos para LinkedIn/GitHub. Sem mudanças estruturais no app — só conteúdo e um componente de senha para o case Softplan.

**Tech Stack:** React 19, TypeScript, Tailwind CSS v4, HTML standalone

**Spec:** `docs/superpowers/specs/2026-03-23-reposicionamento-profissional-design.md`

---

## Mapeamento de Arquivos

| Arquivo | Ação | Responsabilidade |
|---------|------|-----------------|
| `app/data/projects.ts` | Modificar | Atualizar SAT Bank, Dental Smart, adicionar Softplan, reordenar |
| `app/page.tsx` | Modificar | Hero bio, expertise, timeline |
| `app/components/footer.tsx` | Modificar | Remover "Code" do footer |
| `app/components/password-gate.tsx` | Criar | Componente de senha para case protegido |
| `app/projects/softplan/page.tsx` | Criar | Página do case Softplan |
| `curriculo.html` | Modificar | Experiências, skills, sobre |
| `carta.html` | Modificar | Reescrever com narrativa atualizada |
| `docs/linkedin-github-textos.md` | Criar | Textos prontos para copiar no LinkedIn e GitHub |

---

### Task 1: Atualizar dados do SAT Bank em projects.ts

**Files:**
- Modify: `app/data/projects.ts` (buscar por `slug: "sat-bank"`)

- [ ] **Step 1: Atualizar campos básicos do SAT Bank**

Alterar `year`, `timeline` e `responsibilities`:

```typescript
year: "2025–2026",
role: "AI Product Designer",
timeline: "Out 2025 — Mar 2026",
responsibilities: [
  "Liderança do processo de design AI-first",
  "Prototipação rápida com ferramentas de IA",
  "Criação de design system com tokens semânticos",
  "A/B testing e experimentação com Statsig",
  "Design e especificação de features de IA no produto",
],
```

- [ ] **Step 2: Reescrever context do SAT Bank**

Remover toda menção a Claude Code, Cursor, código, MCP:

```typescript
context: [
  "O SAT Bank é um banco digital com app na App Store e Google Play. Fui contratado para liderar o design de produto com uma abordagem diferente: usar IA não só como feature do produto, mas como ferramenta central do próprio processo de design.",
  "Com ferramentas de IA, passei a prototipar em alta fidelidade em vez de mockups estáticos. Isso mudou a dinâmica com engenharia. Em vez de entregar telas no Figma e esperar semanas, eu entregava protótipos que viravam ponto de partida para a implementação. O ciclo de validação caiu de semanas para dias.",
  "Ao mesmo tempo, projetei features de IA dentro do produto: categorização inteligente de gastos, alertas preditivos de saldo, e um assistente que responde dúvidas sobre extrato e limites em linguagem natural. Cada feature foi validada com A/B testing antes do rollout.",
],
```

- [ ] **Step 3: Atualizar challenges do SAT Bank**

```typescript
challenges: [
  "Convencer stakeholders de que prototipação rápida com IA era mais eficiente que mockups tradicionais",
  "Projetar features de IA que fossem úteis sem causar desconfiança em contexto financeiro",
  "Criar um design system do zero com tokens semânticos para iOS, Android e web",
  "Configurar pipeline de A/B testing para validar cada decisão com dados reais",
  "Integrar IA no produto mantendo latência abaixo de 2 segundos",
  "Equilibrar personalização por IA com privacidade e regulamentação bancária",
],
```

- [ ] **Step 4: Atualizar metrics do SAT Bank**

```typescript
metrics: [
  { value: "74%", label: "Redução no tempo de ciclo de design com prototipação rápida via IA" },
  { value: "38%", label: "Adoção das features de IA no primeiro mês após lançamento" },
  { value: "120+", label: "Componentes no design system com tokens semânticos" },
  { value: "17%", label: "Aumento na retenção de usuários após lançamento do assistente IA" },
],
```

- [ ] **Step 5: Atualizar process do SAT Bank**

```typescript
process: [
  {
    title: "Como prototipar mais rápido sem abrir mão de fidelidade?",
    description: "Substituímos o fluxo tradicional de wireframe, mockup e handoff por prototipação rápida com ferramentas de IA. Em vez de criar telas estáticas no Figma, eu construía protótipos de alta fidelidade que a engenharia podia iterar diretamente. Isso eliminou o gap entre design e implementação. O protótipo era o ponto de partida da entrega final. Em uma sprint, validamos 3 variantes de onboarding com usuários reais, algo que antes levaria um mês.",
    imageAspect: "16:9",
  },
  {
    title: "Como projetar features de IA que geram confiança em contexto financeiro?",
    description: "Usuários de banco são naturalmente cautelosos com automação. Para o assistente de IA, projetei um modelo de confiança progressiva. Ele começa respondendo perguntas simples sobre extrato, e só sugere ações (como transferências ou pagamentos) após o usuário demonstrar conforto. Cada resposta mostra a fonte da informação e permite correção. Nos testes, 82% dos usuários disseram confiar nas respostas do assistente após a segunda interação.",
    imageAspect: "16:9",
  },
  {
    title: "Como validar cada decisão de design com dados, não com opinião?",
    description: "Implementei A/B testing com Statsig como parte obrigatória do processo. Cada feature significativa passava por experimentação antes do rollout. Feature flags permitiam lançar para 5% dos usuários, medir impacto, e escalar ou pivotar. Isso eliminou reuniões de debate subjetivo. Os dados decidiam. Em 6 meses, rodamos 23 experimentos que geraram insights que teriam levado anos para descobrir de outra forma.",
    imageAspect: "4:3",
  },
],
```

- [ ] **Step 6: Atualizar retrospective do SAT Bank**

```typescript
retrospective:
  "Esse projeto provou que IA no processo de design não é hype. É vantagem competitiva real. Prototipação rápida com IA me deu uma velocidade que nenhum outro designer do time tinha. Mas a maior lição foi sobre as features de IA no produto: em contexto financeiro, a confiança do usuário é tudo. Não basta a IA funcionar bem. O design precisa comunicar transparência, dar controle e construir confiança progressivamente. Os números de retenção só melhoraram quando paramos de tentar impressionar e começamos a resolver problemas reais.",
```

- [ ] **Step 7: Commit**

```bash
git add app/data/projects.ts
git commit -m "refactor: remover linguagem de dev do case SAT Bank e corrigir datas"
```

---

### Task 2: Atualizar dados do Dental Smart em projects.ts

**Files:**
- Modify: `app/data/projects.ts` (buscar por `slug: "dental-smart"`)

- [ ] **Step 1: Corrigir campos básicos do Dental Smart**

```typescript
year: "2021–2022",
role: "Product Designer",
timeline: "2021–2022",
```

- [ ] **Step 2: Atualizar responsibilities do Dental Smart**

```typescript
responsibilities: [
  "Design de produto end-to-end com IA integrada",
  "Pesquisa de campo em clínicas odontológicas",
  "Prototipação de fluxos assistidos por IA",
  "Design do assistente de diagnóstico visual com IA e visão computacional",
  "Automação de agendamento, prontuário e follow-up",
  "Testes de usabilidade com dentistas e recepcionistas em clínicas reais",
],
```

- [ ] **Step 3: Reescrever context do Dental Smart**

```typescript
context: [
  "O Dental Smart é um SaaS odontológico que usa inteligência artificial para eliminar o trabalho manual que consome o dia a dia de clínicas. Dentistas gastavam até 40% do tempo em tarefas administrativas como agendamento, prontuário e follow-up com pacientes. A IA foi projetada para devolver esse tempo para o que importa: o atendimento.",
  "Fui responsável por projetar toda a experiência das features de IA do produto: desde um assistente que preenche prontuários por voz, até um sistema de análise de radiografias que sugere pontos de atenção para o dentista. Prototipei interfaces e fluxos com ferramentas de IA, testando com dentistas reais antes de qualquer desenvolvimento formal.",
  "O desafio central era que dentistas são profissionais com pouca paciência para software complexo. Cada feature de IA precisava funcionar de forma invisível. Reduzir cliques, antecipar necessidades e nunca atrapalhar o fluxo clínico.",
],
```

- [ ] **Step 4: Atualizar process do Dental Smart (item 3)**

O process item 3 (prontuário por voz) menciona Claude Code. Substituir:

```typescript
{
  title: "Como fazer prontuário por voz funcionar no caos de uma clínica?",
  description: "Treinamos o modelo de voz com terminologia odontológica brasileira e testamos em ambiente real, com barulho de sugador, compressor e conversa com paciente. Projetei uma interface de confirmação rápida. O dentista fala, a IA transcreve e estrutura em campos do prontuário, e basta um toque para confirmar. O tempo de preenchimento caiu de 12 para 3 minutos por paciente. Prototipei a interface de confirmação inteira com IA antes de envolver engenharia.",
  imageAspect: "4:3",
},
```

- [ ] **Step 5: Commit**

```bash
git add app/data/projects.ts
git commit -m "refactor: corrigir datas, role e linguagem do case Dental Smart"
```

---

### Task 3: Adicionar case Softplan em projects.ts

**Files:**
- Modify: `app/data/projects.ts` (inserir após SAT Bank, antes de Dental Smart)

- [ ] **Step 1: Adicionar projeto Softplan ao array**

Inserir entre SAT Bank e Dental Smart:

```typescript
{
  slug: "softplan",
  title: "Design de produto para legaltech com mais de 2.000 colaboradores",
  company: "Softplan",
  year: "2022–2025",
  role: "Product Designer",
  timeline: "Nov 2022 — Out 2025",
  responsibilities: [
    "Discovery e mapeamento de jornadas em sistemas jurídicos complexos",
    "Pesquisa com usuários em tribunais e órgãos públicos",
    "Prototipação de alta fidelidade e testes de usabilidade",
    "Acompanhamento de métricas de produto com Mixpanel",
    "Colaboração com times multidisciplinares em squads ágeis",
  ],
  context: [
    "A Softplan é uma empresa de tecnologia com mais de 2.000 colaboradores, referência em soluções para o setor público e jurídico. Os produtos atendem tribunais, cartórios e órgãos governamentais em todo o Brasil.",
    "Durante 3 anos no time de produto, trabalhei com discovery, pesquisa com usuários e design de funcionalidades para sistemas usados diariamente por servidores públicos e profissionais do direito. O contexto era de alta complexidade regulatória e processos com dezenas de etapas.",
    "O desafio constante era simplificar fluxos jurídicos intrincados em interfaces que qualquer servidor pudesse usar sem treinamento extensivo. Cada decisão de design impactava milhares de usuários simultâneos.",
  ],
  challenges: [
    "Simplificar processos jurídicos de dezenas de etapas em interfaces intuitivas",
    "Atender necessidades de múltiplos perfis: juízes, advogados, servidores, cidadãos",
    "Projetar para conformidade regulatória rigorosa do setor público",
    "Escalar soluções de design para produtos com milhares de usuários simultâneos",
    "Conduzir pesquisa com usuários em ambiente institucional com restrições de acesso",
  ],
  goals: [
    "Melhorar a experiência de uso de sistemas jurídicos complexos através de pesquisa e design centrado no usuário",
    "Reduzir tempo de treinamento de novos usuários com interfaces mais intuitivas",
    "Estabelecer práticas de discovery e experimentação no time de produto",
  ],
  metrics: [
    { value: "10x", label: "Reconhecido no programa Softplayer A+ por entregas de qualidade" },
    { value: "3 anos", label: "Atuação contínua em produto de alta complexidade regulatória" },
    { value: "2.000+", label: "Colaboradores na empresa — escala enterprise" },
    { value: "100%", label: "Discovery com pesquisa antes de qualquer entrega de design" },
  ],
  process: [
    {
      title: "Como entender as necessidades de quem trabalha em tribunais?",
      description: "Conduzi sessões de discovery com servidores públicos, advogados e juízes para entender fluxos de trabalho reais. Mapeei jornadas completas de processos jurídicos, identificando pontos de fricção que consumiam horas de trabalho manual. A pesquisa revelou que muitos problemas não eram de interface, mas de arquitetura de informação — usuários não encontravam funcionalidades que já existiam.",
      imageAspect: "16:9",
    },
    {
      title: "Como validar design em um contexto institucional restrito?",
      description: "Testes de usabilidade no setor público exigiam planejamento diferente. Agendamentos com semanas de antecedência, sessões limitadas a 30 minutos, ambiente formal. Adaptei a metodologia: testes remotos moderados, protótipos de alta fidelidade no Figma para parecerem o produto final, e roteiros objetivos. Consegui manter ciclos de validação quinzenais mesmo com essas restrições.",
      imageAspect: "16:9",
    },
    {
      title: "Como medir impacto em produtos com ciclos longos de desenvolvimento?",
      description: "Implementei acompanhamento contínuo com Mixpanel para medir adoção e engajamento de cada funcionalidade lançada. Em vez de esperar meses por feedback qualitativo, conseguia ver em dias se uma mudança de design estava sendo adotada. Isso permitiu ajustes rápidos e argumentação baseada em dados com stakeholders.",
      imageAspect: "4:3",
    },
  ],
  retrospective:
    "Três anos na Softplan me ensinaram a projetar sob restrição. Regulamentação rigorosa, usuários com pouca tolerância a mudança, ciclos longos de desenvolvimento. Aprendi que bom design em enterprise não é sobre criar algo bonito — é sobre reduzir complexidade sem perder conformidade. As melhores entregas foram as mais invisíveis: fluxos que os usuários completavam sem perceber que tinham sido redesenhados.",
},
```

- [ ] **Step 2: Verificar que a ordem ficou SAT Bank → Softplan → Dental Smart → FAPAM**

- [ ] **Step 3: Commit**

```bash
git add app/data/projects.ts
git commit -m "feat: adicionar case Softplan ao portfólio"
```

---

### Task 4: Criar componente de senha e página do case Softplan

**Files:**
- Create: `app/components/password-gate.tsx`
- Create: `app/projects/softplan/page.tsx`

- [ ] **Step 1: Criar componente PasswordGate**

**Nota:** A senha é client-side e visível no bundle JS. Isso é intencional — o objetivo é filtrar acesso casual, não proteger dados sensíveis. A senha é uma constante fácil de trocar (editar `CASE_PASSWORD`).

```tsx
"use client"

import { useState } from "react"

interface PasswordGateProps {
  children: React.ReactNode
  teaser: React.ReactNode
}

const CASE_PASSWORD = "softplan2025"

export function PasswordGate({ children, teaser }: PasswordGateProps) {
  const [password, setPassword] = useState("")
  const [unlocked, setUnlocked] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password === CASE_PASSWORD) {
      setUnlocked(true)
      setError(false)
    } else {
      setError(true)
    }
  }

  if (unlocked) {
    return <>{children}</>
  }

  return (
    <div className="mx-auto max-w-2xl px-6 pt-40 pb-32">
      {teaser}
      <form onSubmit={handleSubmit} className="mt-16 space-y-4">
        <label className="swiss-label block text-xs tracking-widest text-[#767676] uppercase">
          Este case é protegido por confidencialidade
        </label>
        <div className="flex gap-3">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder="Digite a senha"
            className="flex-1 border border-[#e0e0e0] bg-[#fafafa] px-4 py-3 text-sm text-[#141414] outline-none focus:border-[#141414] transition-colors"
          />
          <button
            type="submit"
            className="border border-[#141414] bg-[#141414] px-6 py-3 text-sm text-[#fafafa] hover:bg-transparent hover:text-[#141414] transition-colors"
          >
            Acessar
          </button>
        </div>
        {error && (
          <p className="text-sm text-red-600">Senha incorreta.</p>
        )}
        <p className="text-xs text-[#767676]">
          Solicite a senha por e-mail para acessar o case completo.
        </p>
      </form>
    </div>
  )
}
```

- [ ] **Step 2: Criar página do case Softplan**

Verificar estrutura de um case existente para seguir o padrão. Criar `app/projects/softplan/page.tsx`:

```tsx
import { Navigation } from "@/components/nav"
import { CaseStudy } from "@/components/case-study"
import { getProjectBySlug } from "@/data/projects"
import { Footer } from "@/components/footer"
import { PageTransition } from "@/components/page-transition"
import { PasswordGate } from "@/components/password-gate"

export default function SoftplanPage() {
  const project = getProjectBySlug("softplan")!

  return (
    <PageTransition>
      <Navigation backLink />
      <main>
        <PasswordGate
          teaser={
            <div>
              <p className="swiss-label text-xs tracking-widest text-[#767676] uppercase mb-6">
                {project.company} — {project.role}
              </p>
              <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-[#141414] mb-6">
                {project.title}
              </h1>
              <p className="text-base text-[#767676] leading-relaxed max-w-xl">
                {project.context[0]}
              </p>
            </div>
          }
        >
          <CaseStudy project={project} />
        </PasswordGate>
      </main>
      <Footer />
    </PageTransition>
  )
}
```

- [ ] **Step 3: Verificar que o build funciona**

Run: `npm run build`
Expected: Build sem erros

- [ ] **Step 4: Commit**

```bash
git add app/components/password-gate.tsx app/projects/softplan/page.tsx
git commit -m "feat: adicionar case Softplan protegido por senha"
```

---

### Task 5: Atualizar homepage (page.tsx)

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Atualizar array expertise**

Trocar itens 1 (remover "LLMs" — termo técnico), 3 e 5:

```typescript
const expertise = [
  "Design AI-first e Features Inteligentes",
  "Discovery e Pesquisa com Usuários",
  "Prototipação Rápida com IA",
  "Design Systems e Tokens Escaláveis",
  "A/B Testing e Experimentação",
  "Product Analytics e Monitoramento UX",
]
```

- [ ] **Step 2: Atualizar array timeline**

De 3 para 4 entradas:

```typescript
const timeline = [
  { period: "2025–2026", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2022–2025", role: "Product Designer", company: "Softplan" },
  { period: "2021–2022", role: "Product Designer", company: "Freelancer" },
  { period: "2018–2021", role: "UI/UX Designer", company: "FAPAM" },
]
```

- [ ] **Step 3: Atualizar subtítulo do hero**

Substituir a linha 47 de:
```
Desenho produtos que usam IA de forma inteligente.
```
Para:
```
Desenho produtos inteligentes — da descoberta à entrega, com IA no processo.
```

- [ ] **Step 4: Reescrever bio do hero**

Substituir o parágrafo nas linhas 49-53 (que menciona "background técnico", "prototipar com código real", "falar a língua da engenharia") por:

```
Com mais de 7 anos de experiência em design de produto, uso inteligência artificial para acelerar cada etapa — da descoberta à validação. Meu foco é transformar problemas complexos em experiências simples, com decisões baseadas em pesquisa, dados e experimentação. Baseado em Pará de Minas, Brasil.
```

- [ ] **Step 5: Adicionar indicador de cadeado para o case Softplan na listagem**

No loop de projetos no `page.tsx`, adicionar um ícone de cadeado discreto ao lado do nome da Softplan. Adicionar campo `protected?: boolean` na interface `Project` em `projects.ts` e setar `protected: true` no objeto Softplan.

No JSX da listagem, renderizar condicionalmente:

```tsx
{project.protected && (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="inline-block w-3.5 h-3.5 ml-2 text-[#767676]">
    <path fillRule="evenodd" d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7H3v6h10V7h-1.5V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z" clipRule="evenodd" />
  </svg>
)}
```

- [ ] **Step 6: Verificar que não restou nenhuma menção a Claude Code, Cursor, código, TypeScript, React Native, LLM no page.tsx**

Run: buscar por "Claude", "Cursor", "código", "TypeScript", "React Native", "LLM" no arquivo

- [ ] **Step 7: Commit**

```bash
git add app/page.tsx
git commit -m "refactor: atualizar hero, expertise e timeline com posicionamento correto"
```

---

### Task 6: Atualizar footer

**Files:**
- Modify: `app/components/footer.tsx:62`

- [ ] **Step 1: Alterar texto do footer**

De: `Design & Code by Everton`
Para: `Design by Everton Resende`

- [ ] **Step 2: Commit**

```bash
git add app/components/footer.tsx
git commit -m "refactor: remover menção a code do footer"
```

---

### Task 7: Reescrever currículo (curriculo.html)

**Files:**
- Modify: `curriculo.html`

- [ ] **Step 1: Atualizar seção "Sobre"**

Substituir o parágrafo atual por:
"Mais de 7 anos de experiência em design de produto. Processo AI-first para acelerar discovery, prototipação e validação. Foco em pesquisa com usuários, experimentação e entrega de impacto mensurável. Remoto há mais de 4 anos."

- [ ] **Step 2: Atualizar SAT Bank**

Mudar data de "Out 2025 — Presente" para "Out 2025 — Mar 2026". Reescrever bullets e ferramentas:

```html
<div class="exp">
  <div class="exp-top">
    <span class="exp-role">AI Product Designer — SAT Bank</span>
    <span class="exp-date">Out 2025 — Mar 2026</span>
  </div>
  <div class="exp-meta">Remoto · Tempo integral</div>
  <ul class="bullets">
    <li>Implementação de processo <strong>AI-first</strong> no design de produto para app bancário mobile (App Store e Google Play)</li>
    <li>Prototipação rápida com <strong>ferramentas de IA</strong>, reduzindo o ciclo de design em 74%</li>
    <li>Design de <strong>features de IA</strong>: categorização inteligente de gastos, alertas preditivos e assistente em linguagem natural</li>
    <li><strong>A/B testing e experimentação</strong> com Statsig — 23 experimentos em 6 meses, decisões validadas com dados reais</li>
    <li>Criação de <strong>design system escalável</strong> com 120+ componentes e tokens semânticos</li>
  </ul>
  <div class="tools"><em>Ferramentas</em> Figma, Statsig</div>
</div>
```

- [ ] **Step 3: Verificar contato no header**

Confirmar que e-mail, WhatsApp, LinkedIn e site estão atualizados no header do currículo.

- [ ] **Step 4: Manter Softplan como está**

Verificar que datas estão corretas: Nov 2022 — Out 2025.

- [ ] **Step 5: Adicionar experiência Freelancer**

Inserir entre Softplan e FAPAM:

```html
<div class="exp">
  <div class="exp-header">
    <div>
      <h3>Product Designer — Freelancer</h3>
      <p class="company">Projetos independentes incluindo Dental Smart</p>
    </div>
    <span class="date">Nov 2021 — Out 2022</span>
  </div>
  <ul>
    <li>Design de produto para software odontológico com IA (Dental Smart)</li>
    <li>Pesquisa de campo em clínicas e testes de usabilidade com profissionais de saúde</li>
    <li>Prototipação com IA e design de features inteligentes</li>
    <li>Discovery, jornadas de usuário e validação de hipóteses</li>
  </ul>
  <p class="tools">Ferramentas: Figma</p>
</div>
```

- [ ] **Step 6: Reestruturar seção Skills**

Remover React Native, TypeScript, Next.js, Tailwind CSS. Nova estrutura:

- **Design:** Figma, Design Systems, Tokens, Prototipação de alta fidelidade, UI/UX, Wireframes
- **IA & Produto:** Design de Features com IA, Prototipação com IA, Prompt Design
- **Pesquisa & Experimentação:** Discovery, Entrevistas, Testes de Usabilidade, Jornadas, A/B Testing, Experimentação
- **Analytics:** Mixpanel, Statsig, Product Analytics

- [ ] **Step 7: Adicionar nota sobre case Softplan**

Na experiência Softplan, adicionar: "Case detalhado disponível em evertonresende.com — solicite a senha por e-mail."

- [ ] **Step 8: Verificar que não restou nenhuma menção a linguagens de programação**

Run: buscar por "React", "TypeScript", "Next.js", "Tailwind", "Claude Code", "Cursor", "MCP", "Sentry", "código" no arquivo

- [ ] **Step 9: Commit**

```bash
git add curriculo.html
git commit -m "refactor: reescrever currículo com posicionamento AI Product Designer"
```

---

### Task 8: Reescrever carta (carta.html)

**Files:**
- Modify: `carta.html`

- [ ] **Step 1: Reescrever conteúdo completo da seção `.body`**

Substituir todo o conteúdo de `<div class="body">` por:

```html
<div class="body">
  <p>
    Sou AI Product Designer com <strong>mais de 7 anos de experiência</strong> e processo <strong>AI-first</strong>. Uso inteligência artificial para acelerar discovery, prototipação e validação de produto, entregando resultados com impacto mensurável. Acredito poder contribuir de forma significativa desde o primeiro dia.
  </p>

  <p>
    Mais recentemente, atuei na <strong>SAT Bank</strong> como AI Product Designer, onde liderei o design de produto para um app bancário com milhares de usuários. Projetei <strong>features de IA</strong> como categorização inteligente de gastos, alertas preditivos e assistente em linguagem natural. Com prototipação rápida via IA, reduzimos o ciclo de design em 74%. Cada decisão foi validada com <strong>A/B testing</strong> (Statsig), e criei um design system escalável com 120+ componentes.
  </p>

  <p>
    Antes disso, atuei por 3 anos na <strong>Softplan</strong>, maior legaltech da América Latina (2.000+ colaboradores), como Product Designer. Conduzia <strong>discovery, pesquisas com usuários, testes de usabilidade</strong> e prototipação de alta fidelidade para soluções no setor público e jurídico. Fui reconhecido <strong>10 vezes no programa "Softplayer A+"</strong> pelo impacto nas entregas de produto.
  </p>

  <p>
    Como freelancer, projetei o <strong>Dental Smart</strong>, software odontológico com IA que transformou a rotina de mais de 200 clínicas. Conduzi pesquisa de campo em 8 clínicas e projetei features como prontuário por voz e análise de radiografias com IA, reduzindo tarefas administrativas em 62%.
  </p>

  <p>
    Minha trajetória começou como UI/UX Designer na <strong>FAPAM</strong>, onde redesenhei o Portal do Aluno para mais de 4.000 estudantes. Foi ali que desenvolvi a base em pesquisa com usuários, testes de usabilidade e design centrado em evidências.
  </p>

  <p>
    Disponível para início imediato, trabalho remoto há mais de 4 anos com total flexibilidade. Seria um prazer discutir como posso contribuir para os desafios da equipe.
  </p>
</div>
```

- [ ] **Step 2: Tornar data facilmente editável**

Adicionar comentário HTML: `<!-- DATA: Atualizar antes de enviar -->` acima da data.

- [ ] **Step 3: Verificar que não restou linguagem de dev**

Run: buscar por "React", "TypeScript", "código", "Claude Code", "Cursor" no arquivo

- [ ] **Step 4: Commit**

```bash
git add carta.html
git commit -m "refactor: reescrever carta com narrativa AI Product Designer"
```

---

### Task 9: Criar textos para LinkedIn e GitHub

**Files:**
- Create: `docs/linkedin-github-textos.md`

- [ ] **Step 1: Escrever textos prontos para copiar**

```markdown
# Textos para LinkedIn e GitHub

## LinkedIn

### Headline
AI Product Designer | Design de Produtos Inteligentes com IA

### Sobre
Designer de produto com mais de 7 anos de experiência e processo AI-first.
Uso inteligência artificial para acelerar discovery, prototipação e validação —
entregando produtos com impacto mensurável.

Minha trajetória vai de pesquisa com usuários em universidades (FAPAM), passando
por projetos independentes com IA em saúde (Dental Smart), até legaltech
enterprise (Softplan, 3 anos, 2.000+ colaboradores) e fintech com IA no centro
do produto (SAT Bank).

Áreas de foco:
• Design AI-first e features inteligentes
• Discovery e pesquisa com usuários
• Prototipação rápida com IA
• Design systems e tokens escaláveis
• A/B testing e experimentação
• Product analytics e monitoramento UX

Remoto há mais de 4 anos. Disponível para novos desafios.

Portfólio: evertonresende.com

### Experiências

**SAT Bank — AI Product Designer**
Out 2025 – Mar 2026

Design de produto bancário com features de IA: categorização inteligente de gastos,
alertas preditivos e assistente em linguagem natural. Prototipação rápida com IA
reduziu ciclo de design em 74%. A/B testing com Statsig para validar cada decisão.
Design system com 120+ componentes e tokens semânticos.

**Softplan — Product Designer**
Nov 2022 – Out 2025

3 anos em legaltech enterprise com 2.000+ colaboradores. Discovery e pesquisa com
usuários em tribunais e órgãos públicos. Prototipação de alta fidelidade, testes de
usabilidade e acompanhamento de métricas com Mixpanel. Reconhecido 10x no programa
Softplayer A+ por entregas de qualidade.

Case detalhado disponível no portfólio — solicite a senha por e-mail.

**Freelancer — Product Designer**
Nov 2021 – Out 2022

Projetos independentes incluindo Dental Smart: software odontológico com IA que
transformou a rotina de mais de 200 clínicas. Pesquisa de campo, prototipação com
IA, design de features inteligentes. Redução de 62% em tarefas administrativas.

**FAPAM — UI/UX Designer**
Nov 2018 – Out 2021

Redesign completo do Portal do Aluno para 4.000+ estudantes. Card sorting com 120
alunos, testes de usabilidade, lançamento em 4 fases. Redução de 68% no tempo de
busca por informações. Satisfação de 2.1 para 4.2.

### Skills para adicionar
Product Design, UX Research, User Research, Design Systems, AI Product Design,
Figma, A/B Testing, Prototyping, Usability Testing, Product Analytics,
Information Architecture, Interaction Design

### Skills para remover
React Native, TypeScript, Next.js, Tailwind CSS, JavaScript, HTML, CSS
(qualquer skill de programação)

### Em Destaque
Adicionar link do portfólio (evertonresende.com) na seção "Em destaque" do perfil LinkedIn.

---

## GitHub

### README do perfil

AI Product Designer. Uso IA para acelerar discovery, prototipação e validação de produto.

🔗 [Portfólio](https://evertonresende.com) · [LinkedIn](https://linkedin.com/in/evertonresende)
```

- [ ] **Step 2: Commit**

```bash
git add docs/linkedin-github-textos.md
git commit -m "docs: textos prontos para atualizar LinkedIn e GitHub"
```

---

### Task 10: Build final e verificação de consistência

**Files:**
- Todos os arquivos modificados

- [ ] **Step 1: Rodar build**

Run: `npm run build`
Expected: Build sem erros

- [ ] **Step 2: Verificação de linguagem proibida**

Buscar em todos os arquivos modificados por termos proibidos:
- "Claude Code", "Cursor", "React Native", "TypeScript", "Next.js", "Tailwind"
- "código real", "background técnico", "falar a língua da engenharia"
- "LLM", "MCP", "Sentry" (termos técnicos que devem ser removidos)
- "Presente" (em contexto de data do SAT Bank)

Expected: Zero matches

- [ ] **Step 3: Verificação de consistência de datas**

Confirmar em cada arquivo:
- SAT Bank: 2025–2026 / Out 2025 – Mar 2026
- Softplan: 2022–2025 / Nov 2022 – Out 2025
- Freelancer: 2021–2022 / Nov 2021 – Out 2022
- FAPAM: 2018–2021 / Nov 2018 – Out 2021

- [ ] **Step 4: Preview local**

Run: `npm run preview`
Verificar visualmente: hero, cases, trajetória, footer

- [ ] **Step 5: Push final**

```bash
git push origin main
```
