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
    slug: "dental-smart",
    title: "Software odontologico com IA que simplifica o dia a dia da clinica",
    company: "Dental Smart",
    year: "2024",
    role: "AI Product Designer",
    timeline: "2024",
    responsibilities: [
      "Design de produto com IA integrada",
      "Pesquisa com dentistas e recepcionistas",
      "Prototipacao de fluxos assistidos por IA",
      "Design de interface para diagnostico visual",
      "Automacao de agendamento e prontuario",
      "Testes de usabilidade em clinicas reais",
    ],
    context: [
      "Dental Smart e um software odontologico que usa inteligencia artificial para simplificar a rotina de clinicas. O desafio era integrar IA de forma pratica em tarefas do dia a dia — desde agendamento ate apoio ao diagnostico — sem adicionar complexidade para profissionais que ja tem uma rotina intensa.",
      "O projeto exigiu imersao profunda no fluxo de trabalho de dentistas, recepcionistas e auxiliares para entender onde a IA poderia gerar valor real, e nao apenas impressionar.",
      "A abordagem foi projetar features de IA que se integrassem naturalmente ao fluxo existente, reduzindo cliques e tempo gasto em tarefas administrativas para que o profissional pudesse focar no paciente.",
    ],
    challenges: [
      "Integrar IA sem interromper o fluxo clinico ja estabelecido",
      "Projetar interface de diagnostico visual acessivel para diferentes perfis",
      "Automatizar agendamento sem perder o toque humano com pacientes",
      "Garantir conformidade com regulamentacoes de dados de saude",
      "Simplificar prontuario eletronico para preenchimento rapido",
      "Treinar modelos de sugestao com dados odontologicos reais",
    ],
    goals: [
      "Reduzir em 60% o tempo gasto em tarefas administrativas na clinica",
      "Criar assistente de IA que apoie o diagnostico visual com sugestoes precisas",
      "Automatizar agendamento e lembretes mantendo personalizacao para cada paciente",
    ],
    metrics: [
      { value: "60%", label: "Reducao no tempo de tarefas administrativas com automacao" },
      { value: "3x", label: "Mais rapido no preenchimento de prontuario com IA" },
      { value: "89%", label: "Satisfacao dos dentistas com o assistente de diagnostico" },
      { value: "40%", label: "Reducao em faltas com lembretes inteligentes automatizados" },
    ],
    process: [
      {
        title: "Como entender a rotina real de uma clinica odontologica?",
        description: "Passamos dias em clinicas observando o fluxo de trabalho de dentistas, recepcionistas e auxiliares. Mapeamos cada ponto de friccao — desde o agendamento por telefone ate o preenchimento manual de prontuarios. As entrevistas revelaram que o maior gargalo nao era o atendimento, mas sim as tarefas administrativas ao redor dele.",
        imageAspect: "16:9",
      },
      {
        title: "Como integrar IA no diagnostico sem substituir o profissional?",
        description: "Projetamos um assistente visual que analisa imagens e sugere pontos de atencao, mas sempre como apoio — a decisao final e do dentista. O design deixa claro que sao sugestoes, nao diagnosticos, usando linguagem cuidadosa e indicadores de confianca para cada observacao.",
        imageAspect: "16:9",
      },
      {
        title: "Como automatizar sem desumanizar o atendimento?",
        description: "Criamos um sistema de agendamento inteligente que aprende padroes de cada paciente e envia lembretes personalizados. O tom de voz dos lembretes foi projetado com a equipe de conteudo para manter a calidez humana, mesmo sendo automatizado.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Projetar para saude exige um nivel de responsabilidade diferente. A IA precisa ser util sem ser invasiva, e sugerir sem impor. A maior licao foi que em contextos clinicos, a confianca do profissional na ferramenta e tao importante quanto a precisao tecnica. Se o dentista nao confia, nao usa — independente de quao boa seja a tecnologia por tras.",
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
