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
  readonly protected?: boolean
}

export const projects: readonly Project[] = [
  {
    slug: "sat-bank",
    title: "Design de produto para app bancário com IA — time de 5 pessoas",
    company: "SAT Bank",
    year: "2025–2026",
    role: "AI Product Designer",
    timeline: "Out 2025 — Mar 2026",
    responsibilities: [
      "Design de produto para app bancário mobile (App Store e Google Play)",
      "Prototipação rápida com ferramentas de IA",
      "Design system com tokens para iOS, Android e web",
      "A/B testing e experimentação com Statsig",
      "Integração de features com sistemas de terceiros",
    ],
    context: [
      "O SAT Bank é um banco digital com app publicado na App Store e Google Play. Entrei como o único designer de um time de 5 pessoas. A aposta era usar IA tanto no processo de design quanto no produto em si.",
      "Na prática, prototipava em alta fidelidade com ferramentas de IA em vez de criar mockups estáticos no Figma. Num time pequeno, isso fez diferença real — o ciclo entre ideia e validação caiu de semanas para poucos dias. Não era perfeito: às vezes o protótipo precisava de ajustes que levavam mais tempo do que o esperado, mas ainda assim era mais rápido que o fluxo tradicional.",
      "A feature que mais me desafiou foi a de compra e venda de criptomoedas. Projetei o fluxo inteiro e integrei com sistemas de terceiros. Era complexo porque envolvia regulamentação financeira, limites de operação e uma UX que precisava transmitir segurança em cada etapa.",
    ],
    challenges: [
      "Ser o único designer em um time de 5, cobrindo produto, design system e experimentação",
      "Integrar sistema de terceiros para feature de criptomoedas mantendo a experiência coesa",
      "Projetar assistente de IA que os usuários realmente quisessem usar (spoiler: muitos não queriam)",
      "Criar design system do zero para 3 plataformas com recursos limitados",
      "Validar decisões com A/B testing em uma base de usuários ainda em crescimento",
    ],
    goals: [
      "Acelerar o ciclo de design usando IA no processo, sem comprometer qualidade",
      "Lançar feature de criptomoedas integrada ao app bancário",
      "Construir design system que funcionasse em iOS, Android e web",
    ],
    metrics: [
      { value: "~60%", label: "Redução estimada no ciclo de design com prototipação via IA" },
      { value: "5", label: "Tamanho do time — design, engenharia e produto juntos" },
      { value: "80+", label: "Componentes no design system para 3 plataformas" },
      { value: "Statsig", label: "Pipeline de A/B testing implementado para validar cada feature" },
    ],
    process: [
      {
        title: "Como funcionar como designer solo num time enxuto?",
        description: "Com 5 pessoas no time total, não existia a separação clássica de design, produto e engenharia. Todo mundo fazia um pouco de tudo. Prototipava com IA para ganhar velocidade e entregava artefatos que a engenharia conseguia usar como ponto de partida. Isso funcionou bem para features simples, mas para a feature de criptomoedas precisei voltar pro Figma para detalhar edge cases que o protótipo rápido não cobria.",
        imageAspect: "16:9",
      },
      {
        title: "O que aconteceu quando tentamos colocar IA pra atender usuários?",
        description: "Projetamos um assistente que respondia dúvidas sobre extrato, limites e operações. Na teoria, era uma solução elegante. Na prática, a maioria dos usuários não gostou. O feedback mais comum era 'não quero falar com robô'. Redesenhamos a abordagem: em vez de um chatbot completo, passamos a usar IA de forma invisível — sugestões contextuais, alertas inteligentes, categorização automática. A IA parou de ser o protagonista e virou uma camada de apoio. A aceitação melhorou bastante.",
        imageAspect: "16:9",
      },
      {
        title: "Como validar decisões com uma base de usuários pequena?",
        description: "Implementei A/B testing com Statsig, mas a base de usuários ainda estava crescendo. Isso significava que nem todo experimento tinha significância estatística. A solução foi priorizar testes em features de alto impacto e complementar com pesquisa qualitativa para as decisões menores. Não era o cenário ideal, mas funcionou para um produto em estágio inicial.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "A SAT Bank me mostrou como é trabalhar com IA de verdade, não em pitch deck. Algumas coisas funcionaram: prototipação rápida acelerou o ciclo real de entrega. Outras não: o assistente de IA que projetei foi rejeitado pelos usuários e tivemos que repensar toda a abordagem. A lição mais importante foi que em contexto financeiro, IA invisível funciona melhor que IA na cara do usuário. Ninguém quer 'conversar com o banco'. As pessoas querem que o banco funcione sem elas perceberem.",
  },
  {
    slug: "softplan",
    title: "3 anos projetando sistemas para Ministério Público e Procuradorias",
    company: "Softplan",
    year: "2022–2025",
    role: "Product Designer",
    timeline: "Nov 2022 — Out 2025",
    protected: true,
    responsibilities: [
      "Discovery e mapeamento de jornadas em sistemas para MP e Procuradorias",
      "Pesquisa com promotores, servidores e profissionais do setor público",
      "Prototipação de alta fidelidade e testes de usabilidade",
      "Acompanhamento de métricas de produto com Mixpanel",
      "Colaboração dentro de um CCUX com 30 designers",
    ],
    context: [
      "A Softplan é uma empresa de tecnologia com mais de 2.000 colaboradores, referência em soluções para o setor público e jurídico. Trabalhei especificamente nos produtos voltados para Ministérios Públicos e Procuradorias em todo o Brasil.",
      "Fazia parte de um Centro de Competência de UX (CCUX) com 30 designers. Na prática, atuava em squads de produto fazendo discovery, pesquisa com usuários e design de funcionalidades para sistemas usados por promotores e servidores públicos. O contexto era de alta complexidade — processos jurídicos com dezenas de etapas e regulamentação rigorosa.",
      "O dia a dia era equilibrar necessidades de usuários que tinham pouca paciência para software novo com regras legais que não podiam ser simplificadas. Nem todo redesign era bem-vindo — em muitos casos, o desafio era melhorar sem que o usuário percebesse que algo mudou.",
    ],
    challenges: [
      "Simplificar processos jurídicos sem violar conformidade regulatória",
      "Projetar para promotores e servidores com perfis e necessidades muito diferentes",
      "Conduzir pesquisa em ambiente institucional com restrições de acesso e agenda",
      "Lidar com ciclos longos de desenvolvimento onde o feedback demora a chegar",
      "Manter consistência de design dentro de um CCUX com 30 designers",
    ],
    goals: [
      "Melhorar a experiência dos sistemas de MP e Procuradorias com base em pesquisa real",
      "Reduzir atrito nos fluxos mais usados por promotores e servidores",
      "Manter ciclos de validação com usuários mesmo dentro das restrições do setor público",
    ],
    metrics: [
      { value: "10x", label: "Reconhecido no programa Softplayer A+ por qualidade nas entregas" },
      { value: "3 anos", label: "Atuação contínua em produto para o setor público" },
      { value: "30", label: "Designers no CCUX — trabalhando com escala enterprise" },
      { value: "Mixpanel", label: "Acompanhamento de adoção e engajamento de cada entrega" },
    ],
    process: [
      {
        title: "Como fazer pesquisa com promotores que não têm tempo pra você?",
        description: "Pesquisa no setor público é diferente. Promotores têm agenda cheia, acesso restrito e pouca paciência para sessões longas. Adaptei a metodologia: sessões remotas de no máximo 30 minutos, protótipos de alta fidelidade que pareciam o produto final, e roteiros diretos ao ponto. Consegui manter ciclos de validação regulares, mas nem sempre quinzenais como eu gostaria. Às vezes ficava semanas esperando uma agenda abrir.",
        imageAspect: "16:9",
      },
      {
        title: "Como projetar quando o usuário não quer que nada mude?",
        description: "Servidores públicos usam os mesmos sistemas por anos e criam atalhos mentais. Qualquer mudança de interface, por menor que seja, gera resistência. Aprendi a priorizar melhorias invisíveis — otimizar fluxos sem mudar a estrutura que o usuário já conhecia. Quando uma mudança era inevitável, antecipava o impacto com comunicação dentro do produto e onboarding contextual.",
        imageAspect: "16:9",
      },
      {
        title: "Como medir impacto quando o ciclo de entrega é longo?",
        description: "Usei Mixpanel para acompanhar adoção e engajamento de cada funcionalidade lançada. Em produtos enterprise com ciclos longos, isso era essencial para argumentar com stakeholders. Em vez de esperar meses por feedback qualitativo, conseguia mostrar em dias se uma mudança estava sendo adotada ou ignorada. Nem sempre os números eram bons — mas pelo menos tínhamos dados para decidir o que ajustar.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Três anos na Softplan me ensinaram a projetar sob restrição. Regulamentação rigorosa, usuários que preferiam o sistema antigo, ciclos longos de desenvolvimento. O reconhecimento no programa Softplayer A+ veio das entregas que mais respeitaram essas restrições, não das que tentaram revolucionar. Aprendi que bom design em enterprise é sobre reduzir complexidade sem assustar quem já sabe usar o sistema.",
  },
  {
    slug: "dental-smart",
    title: "SaaS odontológico com IA — do feedback de dentistas desesperados ao produto",
    company: "Dental Smart",
    year: "2023–2025",
    role: "Product Designer",
    timeline: "2023–2025",
    responsibilities: [
      "Design de produto end-to-end com IA integrada",
      "Pesquisa de campo em clínicas odontológicas",
      "Design de anamnese e prontuário por voz (em produção)",
      "Design de agentes de IA para retenção e captação de pacientes no CRM",
      "Testes de usabilidade com dentistas e recepcionistas em clínicas reais",
    ],
    context: [
      "O Dental Smart é um SaaS odontológico com IA, feito como freelance paralelo à Softplan. Nasceu do contato direto com dentistas que estavam desesperados com as soluções existentes no mercado — sistemas antigos, sem automação e com usabilidade precária. Não tinha outra escolha boa, e eles sabiam disso.",
      "O produto foi 100% construído com base em feedback real de usuários. Projetei a experiência de features de IA como anamnese por voz (que foi pra produção), agentes de IA no CRM para retenção e captação de pacientes, e automação de agendamento. Também projetei uma feature de análise de radiografias, mas essa não chegou a ir pro ar.",
      "Até minha saída, cerca de 20 clínicas estavam usando o produto. Não era escala grande, mas o feedback era consistente: os dentistas que usavam não queriam voltar pro sistema antigo.",
    ],
    challenges: [
      "Projetar IA para profissionais de saúde que nunca usaram algo assim",
      "Fazer prontuário por voz funcionar com terminologia odontológica brasileira",
      "Criar agentes de CRM que ajudam sem parecer spam para os pacientes",
      "Garantir conformidade com LGPD em dados sensíveis de saúde",
      "Manter qualidade de design como freelance paralelo ao trabalho principal",
    ],
    goals: [
      "Criar um produto que dentistas realmente preferissem ao que já usavam",
      "Lançar anamnese por voz funcional em ambiente clínico real",
      "Automatizar captação e retenção de pacientes com agentes de IA no CRM",
    ],
    metrics: [
      { value: "~20", label: "Clínicas usando o produto até minha saída" },
      { value: "Em prod.", label: "Anamnese por voz — em produção e sendo usada diariamente" },
      { value: "CRM + IA", label: "Agentes de retenção e captação de pacientes em operação" },
      { value: "0 churn", label: "Nenhuma clínica que adotou o produto quis voltar atrás" },
    ],
    process: [
      {
        title: "Como entender a dor real de quem trabalha numa clínica?",
        description: "Conversei com dentistas, recepcionistas e auxiliares em clínicas de diferentes tamanhos. O que mais me marcou foi o nível de frustração com os sistemas existentes. Ninguém gostava do que usava, mas ninguém via alternativa. Dentistas gastavam tempo demais com burocracia e recepcionistas viviam no telefone remarcando consultas. O produto inteiro foi desenhado a partir dessas conversas, não de suposições.",
        imageAspect: "16:9",
      },
      {
        title: "O que foi pro ar e o que ficou no protótipo?",
        description: "A anamnese por voz foi a feature que mais gerou impacto. O dentista fala durante o atendimento, a IA transcreve e estrutura em campos do prontuário. Projetei uma interface de confirmação rápida — um toque pra validar. Isso foi pro ar e está em uso diário. Já a feature de análise de radiografias, que projetei como apoio ao diagnóstico, não chegou a produção. Faltou maturidade do modelo e priorizamos o CRM com agentes de IA, que tinha demanda mais imediata.",
        imageAspect: "16:9",
      },
      {
        title: "Como IA ajudou clínicas a não perder pacientes?",
        description: "Projetei agentes de IA dentro do CRM que automatizavam retenção e captação de pacientes. Lembretes inteligentes, follow-up pós-consulta, reativação de pacientes inativos. Tudo rodando sem intervenção manual da recepcionista. O desafio foi calibrar o tom — ninguém quer receber mensagem robótica do dentista. Testamos diferentes abordagens até encontrar um equilíbrio que não parecesse spam.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Dental Smart foi o projeto onde mais aprendi sobre construir produto com IA de verdade. Nem tudo que projetei foi pro ar — a análise de radiografias ficou no protótipo. Mas o que funcionou, funcionou porque veio direto do usuário. Os dentistas estavam desesperados por algo melhor, e isso tornou o feedback brutalmente honesto. A anamnese por voz, os agentes de CRM, a automação de agendamento — tudo nasceu de conversas reais, não de brainstorm em sala de reunião.",
  },
  {
    slug: "fapam",
    title: "Redesign do Portal do Aluno — de sistema TOTVS a experiência responsiva",
    company: "FAPAM",
    year: "2018–2021",
    role: "UI/UX Designer",
    timeline: "Nov 2018 — Out 2021",
    responsibilities: [
      "Pesquisa com alunos, professores e administrativos",
      "Redesign da arquitetura de informação",
      "Wireframes e protótipos de alta fidelidade",
      "Design de interface responsiva (o portal era só desktop)",
      "Testes com alunos reais durante o processo",
      "Acompanhamento de implementação",
    ],
    context: [
      "A FAPAM é uma instituição de ensino superior com mais de 4.000 alunos. O Portal do Aluno era uma solução TOTVS com anos de uso, só funcionava em desktop e a experiência era ruim. Alunos reclamavam constantemente — mas não existia alternativa, todo mundo usava porque precisava.",
      "Fui responsável pelo redesign completo. O projeto durou 3 anos e foi feito em conjunto com os próprios alunos. Conversava com eles, testava protótipos, ajustava. Não tinha time de pesquisa nem design system. Era eu e a necessidade.",
      "O maior problema era a resistência ao novo. Alunos e servidores estavam acostumados com o sistema antigo, mesmo reclamando dele. Para contornar isso, mantive as mesmas rotas de navegação principais e adicionei onboarding contextual para as mudanças mais drásticas.",
    ],
    challenges: [
      "Redesenhar sem interromper o acesso de 4.000+ alunos em período letivo",
      "Substituir uma solução TOTVS consolidada sem perder funcionalidades",
      "Tornar responsivo um sistema que só existia em desktop",
      "Contornar a resistência de usuários acostumados ao sistema antigo",
      "Convencer a gestão a investir em pesquisa antes de começar a construir",
      "Trabalhar sozinho, sem time de design ou pesquisa formal",
    ],
    goals: [
      "Criar uma experiência responsiva que funcionasse em mobile (onde a maioria dos alunos acessava)",
      "Redesenhar a arquitetura de informação com base no que alunos realmente buscavam",
      "Lançar sem quebrar nada — nenhum aluno podia ficar sem acesso a notas ou matrícula",
    ],
    metrics: [
      { value: "4.000+", label: "Alunos ativos impactados pelo redesign" },
      { value: "Mobile", label: "Portal passou de desktop-only para responsivo" },
      { value: "3 anos", label: "Ciclos iterativos de pesquisa, design e lançamento" },
      { value: "TOTVS→Custom", label: "Migração de solução legada para experiência projetada" },
    ],
    process: [
      {
        title: "Como redesenhar algo que todo mundo usa mas ninguém gosta?",
        description: "Comecei conversando com alunos para entender o que mais incomodava. As reclamações mais comuns eram: 'não acho minha situação financeira', 'não funciona no celular' e 'parece sistema dos anos 2000'. A estrutura da TOTVS não correspondia a como os alunos pensavam. Redesenhei a arquitetura de informação priorizando o que era mais buscado — notas, matrícula, calendário, financeiro — e testei com alunos reais antes de implementar.",
        imageAspect: "16:9",
      },
      {
        title: "Como lidar com a resistência de quem já estava acostumado?",
        description: "A parte mais difícil não foi o redesign, foi a adoção. Servidores e alguns alunos preferiam o sistema antigo simplesmente porque já sabiam usar. A solução foi manter as mesmas rotas de navegação principais — quem já sabia o caminho continuava chegando no mesmo lugar. Para as mudanças maiores, criei onboarding contextual que aparecia só na primeira vez. Não forçava ninguém a reaprender tudo de uma vez.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "A FAPAM foi meu primeiro projeto real de design. Não tinha time, não tinha processo, não tinha referência. Construí tudo do zero, desde o argumento para convencer a gestão até os protótipos que testava com alunos no corredor da faculdade. O resultado não foi perfeito — algumas decisões eu faria diferente hoje. Mas foi onde aprendi que design funciona quando vem do usuário, não de suposição. E que resistência à mudança não é problema do usuário, é problema do design.",
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
