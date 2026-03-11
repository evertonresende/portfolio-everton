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
      "Design system com tokens escalaveis",
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
      "Estabelecer processo de discovery continuo com usuarios reais",
      "Aumentar satisfacao do usuario medida por pesquisas trimestrais",
    ],
    metrics: [
      { value: "10+", label: "Reconhecimentos no programa Softplayer A+ pelo impacto" },
      { value: "2000+", label: "Colaboradores na maior legaltech da America Latina" },
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
      "Trabalhar em produto de escala nacional ensinou que design em legaltech exige empatia profunda com o contexto do usuario. Servidores publicos e advogados operam sob pressao e restricoes unicas. A principal licao foi que simplicidade nao significa remover funcionalidades, mas sim organiza-las de forma que o usuario encontre o que precisa sem friccao.",
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
      "O processo incluiu pesquisa com alunos, professores e administrativos para entender como cada grupo interagia com o portal e quais eram as principais frustracoes.",
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

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(currentSlug: string): Project {
  const currentIndex = projects.findIndex((p) => p.slug === currentSlug)
  const nextIndex = (currentIndex + 1) % projects.length
  return projects[nextIndex]
}
