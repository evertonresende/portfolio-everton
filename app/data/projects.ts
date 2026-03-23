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
    title: "IA no centro do design de um app bancário com milhares de usuários",
    company: "SAT Bank",
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
    context: [
      "O SAT Bank é um banco digital com app na App Store e Google Play. Fui contratado para liderar o design de produto com uma abordagem diferente: usar IA não só como feature do produto, mas como ferramenta central do próprio processo de design.",
      "Com ferramentas de IA, passei a prototipar em alta fidelidade em vez de mockups estáticos. Isso mudou a dinâmica com engenharia. Em vez de entregar telas no Figma e esperar semanas, eu entregava protótipos que viravam ponto de partida para a implementação. O ciclo de validação caiu de semanas para dias.",
      "Ao mesmo tempo, projetei features de IA dentro do produto: categorização inteligente de gastos, alertas preditivos de saldo, e um assistente que responde dúvidas sobre extrato e limites em linguagem natural. Cada feature foi validada com A/B testing antes do rollout.",
    ],
    challenges: [
      "Convencer stakeholders de que prototipação rápida com IA era mais eficiente que mockups tradicionais",
      "Projetar features de IA que fossem úteis sem causar desconfiança em contexto financeiro",
      "Criar um design system do zero com tokens semânticos para iOS, Android e web",
      "Configurar pipeline de A/B testing para validar cada decisão com dados reais",
      "Integrar IA no produto mantendo latência abaixo de 2 segundos",
      "Equilibrar personalização por IA com privacidade e regulamentação bancária",
    ],
    goals: [
      "Reduzir o ciclo de design para produção de semanas para dias usando IA no processo",
      "Lançar 3 features de IA no app com adoção acima de 30% no primeiro mês",
      "Construir design system escalável que garanta consistência em todas as plataformas",
    ],
    metrics: [
      { value: "74%", label: "Redução no tempo de ciclo de design com prototipação rápida via IA" },
      { value: "38%", label: "Adoção das features de IA no primeiro mês após lançamento" },
      { value: "120+", label: "Componentes no design system com tokens semânticos" },
      { value: "17%", label: "Aumento na retenção de usuários após lançamento do assistente IA" },
    ],
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
    retrospective:
      "Esse projeto provou que IA no processo de design não é hype. É vantagem competitiva real. Prototipação rápida com IA me deu uma velocidade que nenhum outro designer do time tinha. Mas a maior lição foi sobre as features de IA no produto: em contexto financeiro, a confiança do usuário é tudo. Não basta a IA funcionar bem. O design precisa comunicar transparência, dar controle e construir confiança progressivamente. Os números de retenção só melhoraram quando paramos de tentar impressionar e começamos a resolver problemas reais.",
  },
  {
    slug: "dental-smart",
    title: "Software odontológico com IA que transformou a rotina de mais de 200 clínicas",
    company: "Dental Smart",
    year: "2021–2022",
    role: "Product Designer",
    timeline: "2021–2022",
    responsibilities: [
      "Design de produto end-to-end com IA integrada",
      "Pesquisa de campo em clínicas odontológicas",
      "Prototipação de fluxos assistidos por IA",
      "Design do assistente de diagnóstico visual com IA e visão computacional",
      "Automação de agendamento, prontuário e follow-up",
      "Testes de usabilidade com dentistas e recepcionistas em clínicas reais",
    ],
    context: [
      "O Dental Smart é um SaaS odontológico que usa inteligência artificial para eliminar o trabalho manual que consome o dia a dia de clínicas. Dentistas gastavam até 40% do tempo em tarefas administrativas como agendamento, prontuário e follow-up com pacientes. A IA foi projetada para devolver esse tempo para o que importa: o atendimento.",
      "Fui responsável por projetar toda a experiência das features de IA do produto: desde um assistente que preenche prontuários por voz, até um sistema de análise de radiografias que sugere pontos de atenção para o dentista. Prototipei interfaces e fluxos com ferramentas de IA, testando com dentistas reais antes de qualquer desenvolvimento formal.",
      "O desafio central era que dentistas são profissionais com pouca paciência para software complexo. Cada feature de IA precisava funcionar de forma invisível. Reduzir cliques, antecipar necessidades e nunca atrapalhar o fluxo clínico.",
    ],
    challenges: [
      "Reduzir a curva de aprendizado da IA para profissionais sem background técnico",
      "Projetar interface de análise de radiografia que apoie sem substituir o diagnóstico",
      "Criar prontuário por voz que entende terminologia odontológica com mais de 95% de acurácia",
      "Automatizar agendamento e follow-up sem parecer impessoal para o paciente",
      "Garantir conformidade com LGPD e regulamentações de dados de saúde",
      "Integrar IA em um fluxo clínico onde cada segundo conta",
    ],
    goals: [
      "Eliminar 60% do tempo gasto em tarefas administrativas com automação inteligente",
      "Criar assistente de análise visual que reduza tempo de triagem de radiografias em 50%",
      "Alcançar NPS acima de 70 com dentistas nos primeiros 3 meses de uso",
    ],
    metrics: [
      { value: "62%", label: "Redução no tempo de tarefas administrativas com IA" },
      { value: "47%", label: "Menos tempo na triagem de radiografias com o assistente visual" },
      { value: "78", label: "NPS com dentistas após 3 meses de uso do produto" },
      { value: "35%", label: "Redução em no-shows com lembretes inteligentes personalizados" },
    ],
    process: [
      {
        title: "Como entender onde a IA realmente gera valor em uma clínica?",
        description: "Passei 3 semanas acompanhando a rotina de 8 clínicas diferentes, desde consultório individual até rede com 15 unidades. Sentei ao lado de dentistas, recepcionistas e auxiliares. Cronometrei cada tarefa. O insight principal: dentistas não precisavam de IA no diagnóstico tanto quanto precisavam de IA no administrativo. O prontuário manual consumia 12 minutos por paciente. O agendamento por telefone gerava 3 remarcações por dia. Era ali que a IA poderia liberar tempo real.",
        imageAspect: "16:9",
      },
      {
        title: "Como construir um assistente visual que o dentista confia?",
        description: "Projetei o assistente de análise de radiografias como um co-piloto, não como um diagnosticador. A interface mostra áreas de atenção com níveis de confiança (alta, média, baixa) e sempre exibe a lógica por trás da sugestão. Em testes com 34 dentistas, o modelo passou de 41% de uso para 89% quando adicionamos a explicabilidade. Dentistas não confiavam em uma IA que só apontava, mas confiavam em uma que explicava por que apontou.",
        imageAspect: "16:9",
      },
      {
        title: "Como fazer prontuário por voz funcionar no caos de uma clínica?",
        description: "Treinamos o modelo de voz com terminologia odontológica brasileira e testamos em ambiente real, com barulho de sugador, compressor e conversa com paciente. Projetei uma interface de confirmação rápida. O dentista fala, a IA transcreve e estrutura em campos do prontuário, e basta um toque para confirmar. O tempo de preenchimento caiu de 12 para 3 minutos por paciente. Prototipei a interface de confirmação inteira com IA antes de envolver engenharia.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Dental Smart me ensinou que IA em saúde só funciona quando é invisível. O melhor elogio que recebi de um dentista foi: 'Esqueço que tem IA, só percebo que sobra mais tempo.' Projetar features de IA aqui exigiu uma disciplina diferente. Cada tela, cada interação, cada palavra precisava reduzir fricção, não adicionar. A explicabilidade foi o divisor de águas. Dentistas não querem uma caixa preta, querem um colega que mostra o raciocínio. Quando entendemos isso, a adoção disparou.",
  },
  {
    slug: "fapam",
    title: "Redesign completo do Portal do Aluno para mais de 4.000 estudantes",
    company: "FAPAM",
    year: "2018—21",
    role: "UI/UX Designer",
    timeline: "2018 a 2021",
    responsibilities: [
      "Pesquisa com alunos, professores e administrativos",
      "Arquitetura de informação e card sorting",
      "Wireframes e protótipos de alta fidelidade",
      "Design de interface responsiva",
      "Testes de usabilidade presenciais",
      "Acompanhamento de implementação com engenharia",
    ],
    context: [
      "A FAPAM é uma instituição de ensino superior com mais de 4.000 alunos ativos. O Portal do Aluno era a principal ferramenta digital da faculdade. Ali alunos viam notas, faziam matrícula, acompanhavam frequência e acessavam material. Mas o portal tinha mais de 8 anos sem redesign, e as reclamações eram constantes.",
      "Fui responsável pelo redesign completo: desde pesquisa com usuários até prototipação e acompanhamento da implementação. O projeto durou 3 anos em ciclos iterativos, com cada fase sendo testada com alunos reais antes do lançamento.",
      "O maior desafio não era visual, era estrutural. A arquitetura de informação do portal não correspondia a como alunos pensavam. Card sorting com 120 alunos revelou que 73% não conseguiam encontrar informações básicas como calendário acadêmico e situação financeira em menos de 3 cliques.",
    ],
    challenges: [
      "Redesenhar sem interromper o acesso de mais de 4.000 alunos em período letivo",
      "Atender 3 públicos com necessidades distintas (alunos, professores, administrativos)",
      "Resolver arquitetura de informação que não correspondia ao modelo mental dos usuários",
      "Tornar responsivo um sistema construído apenas para desktop",
      "Migrar anos de conteúdo sem perda de informação",
      "Convencer a gestão a investir em pesquisa antes de começar a construir",
    ],
    goals: [
      "Reduzir o tempo médio para alunos encontrarem informações de mais de 5 cliques para 2",
      "Aumentar acessos via mobile de 12% para acima de 50% com design responsivo",
      "Elevar satisfação dos alunos com o portal medida por pesquisa semestral",
    ],
    metrics: [
      { value: "68%", label: "Redução no tempo de busca por informações acadêmicas" },
      { value: "52%", label: "Acessos via mobile após redesign responsivo (era 12%)" },
      { value: "4.2", label: "Nota de satisfação dos alunos em pesquisa semestral (era 2.1)" },
      { value: "41%", label: "Redução em chamados de suporte relacionados ao portal" },
    ],
    process: [
      {
        title: "Como descobrir o que 4.000 alunos realmente precisam?",
        description: "Realizamos card sorting com 120 alunos para entender como organizavam mentalmente as informações do portal. O resultado mostrou que a estrutura existente estava completamente desalinhada. 'Situação financeira' estava escondida em 'Secretaria', 'Documentos' e 'Financeiro', enquanto 73% dos alunos procuravam na tela inicial. Redesenhamos a arquitetura inteira baseada no modelo mental real dos usuários, não na estrutura administrativa da faculdade.",
        imageAspect: "16:9",
      },
      {
        title: "Como lançar um redesign sem derrubar o sistema em período de provas?",
        description: "Dividimos o lançamento em 4 fases ao longo de 2 semestres, começando pelas áreas mais críticas: notas, matrícula e calendário. Cada fase passava por testes de usabilidade com 15 a 20 alunos antes do deploy. Na fase 1, identificamos 23 problemas de usabilidade que teriam afetado milhares de alunos se tivéssemos lançado tudo de uma vez. A abordagem incremental custou mais tempo, mas evitou qualquer interrupção no acesso.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "A FAPAM foi onde aprendi a projetar de verdade. Não tinha time de pesquisa, não tinha design system pronto, não tinha CI/CD. Tive que construir tudo do zero, desde o argumento para convencer a gestão a investir em pesquisa com alunos, até a documentação que a engenharia usou para implementar. A maior lição: os números só melhoraram quando paramos de redesenhar baseado em achismo e começamos a ouvir os alunos. Parece óbvio, mas em 2018 não era a prática padrão em instituições desse porte.",
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
