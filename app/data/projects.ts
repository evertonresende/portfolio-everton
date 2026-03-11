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
    title: "IA no centro do design de um app bancario com milhares de usuarios",
    company: "SAT Bank",
    year: "2025",
    role: "AI Product Designer",
    timeline: "2025 — Presente",
    responsibilities: [
      "Lideranca do processo de design AI-first",
      "Prototipacao com codigo real via Claude Code e Cursor",
      "Criacao de design system com tokens semanticos",
      "Implementacao de A/B testing e feature flags com Statsig",
      "Design e especificacao de features de IA no produto",
      "Automacao de fluxos internos com MCP servers",
    ],
    context: [
      "O SAT Bank e um banco digital com app na App Store e Google Play. Fui contratado para liderar o design de produto com uma abordagem diferente: usar IA nao so como feature do produto, mas como ferramenta central do proprio processo de design.",
      "Com Claude Code e Cursor, passei a prototipar com codigo real em vez de mockups estaticos. Isso mudou a dinamica com engenharia — em vez de entregar telas no Figma e esperar semanas, eu entregava prototipos funcionais que viravam ponto de partida para a implementacao. O ciclo de validacao caiu de semanas para dias.",
      "Ao mesmo tempo, projetei features de IA dentro do produto: categorizacao inteligente de gastos, alertas preditivos de saldo, e um assistente que responde duvidas sobre extrato e limites em linguagem natural. Cada feature foi validada com A/B testing antes do rollout.",
    ],
    challenges: [
      "Convencer stakeholders de que prototipos com codigo eram mais eficientes que mockups",
      "Projetar features de IA que fossem uteis sem causar desconfianca em contexto financeiro",
      "Criar um design system do zero com tokens semanticos para iOS, Android e web",
      "Configurar pipeline de A/B testing para validar cada decisao com dados reais",
      "Integrar LLMs no produto mantendo latencia abaixo de 2 segundos",
      "Equilibrar personalizacao por IA com privacidade e regulamentacao bancaria",
    ],
    goals: [
      "Reduzir o ciclo de design-para-producao de semanas para dias usando IA no processo",
      "Lancar 3 features de IA no app com adocao acima de 30% no primeiro mes",
      "Construir design system escalavel que garanta consistencia em todas as plataformas",
    ],
    metrics: [
      { value: "74%", label: "Reducao no tempo de ciclo de design usando Claude Code e Cursor" },
      { value: "38%", label: "Adocao das features de IA no primeiro mes apos lancamento" },
      { value: "120+", label: "Componentes no design system com tokens semanticos" },
      { value: "17%", label: "Aumento na retencao de usuarios apos lancamento do assistente IA" },
    ],
    process: [
      {
        title: "Como prototipar mais rapido sem abrir mao de fidelidade?",
        description: "Substituimos o fluxo tradicional de wireframe > mockup > handoff por prototipacao direta com codigo usando Claude Code e Cursor. Em vez de criar telas estaticas no Figma, eu construia prototipos funcionais em React que a engenharia podia iterar. Isso eliminou o gap entre design e implementacao — o prototipo era o ponto de partida do codigo final. Em uma sprint, validamos 3 variantes de onboarding com usuarios reais, algo que antes levaria um mes.",
        imageAspect: "16:9",
      },
      {
        title: "Como projetar features de IA que geram confianca em contexto financeiro?",
        description: "Usuarios de banco sao naturalmente cautelosos com automacao. Para o assistente de IA, projetei um modelo de confianca progressiva: comeca respondendo perguntas simples sobre extrato, e so sugere acoes (como transferencias ou pagamentos) apos o usuario demonstrar conforto. Cada resposta mostra a fonte da informacao e permite correcao. Nos testes, 82% dos usuarios disseram confiar nas respostas do assistente apos a segunda interacao.",
        imageAspect: "16:9",
      },
      {
        title: "Como validar cada decisao de design com dados, nao com opiniao?",
        description: "Implementei A/B testing com Statsig como parte obrigatoria do processo. Cada feature significativa passava por experimentacao antes do rollout. Feature flags permitiam lancar para 5% dos usuarios, medir impacto, e escalar ou pivotar. Isso eliminou reunioes de debate subjetivo — os dados decidiam. Em 6 meses, rodamos 23 experimentos que geraram insights que teriam levado anos para descobrir de outra forma.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Esse projeto provou que IA no processo de design nao e hype — e vantagem competitiva real. Prototipar com codigo via Claude Code me deu uma velocidade que nenhum outro designer do time tinha. Mas a maior licao foi sobre as features de IA no produto: em contexto financeiro, a confianca do usuario e tudo. Nao basta a IA funcionar bem — o design precisa comunicar transparencia, dar controle e construir confianca progressivamente. Os numeros de retencao so melhoraram quando paramos de tentar impressionar e comecamos a resolver problemas reais.",
  },
  {
    slug: "dental-smart",
    title: "Software odontologico com IA que transformou a rotina de 200+ clinicas",
    company: "Dental Smart",
    year: "2024",
    role: "AI Product Designer",
    timeline: "2024",
    responsibilities: [
      "Design de produto end-to-end com IA integrada",
      "Pesquisa de campo em clinicas odontologicas",
      "Prototipacao de fluxos assistidos por IA com Claude Code",
      "Design do assistente de diagnostico visual com LLM + visao computacional",
      "Automacao de agendamento, prontuario e follow-up",
      "Testes de usabilidade com dentistas e recepcionistas em clinicas reais",
    ],
    context: [
      "O Dental Smart e um SaaS odontologico que usa inteligencia artificial para eliminar o trabalho manual que consome o dia a dia de clinicas. Dentistas gastavam ate 40% do tempo em tarefas administrativas — agendamento, prontuario, follow-up com pacientes. A IA foi projetada para devolver esse tempo para o que importa: o atendimento.",
      "Fui responsavel por projetar toda a experiencia das features de IA do produto: desde um assistente que preenche prontuarios por voz, ate um sistema de analise de radiografias que sugere pontos de atencao para o dentista. Usei Claude Code para prototipar interfaces e fluxos diretamente em codigo, testando com dentistas reais antes de qualquer desenvolvimento formal.",
      "O desafio central era que dentistas sao profissionais com pouca paciencia para software complexo. Cada feature de IA precisava funcionar de forma invisivel — reduzir cliques, antecipar necessidades e nunca atrapalhar o fluxo clinico.",
    ],
    challenges: [
      "Reduzir a curva de aprendizado da IA para profissionais sem background tecnico",
      "Projetar interface de analise de radiografia que apoie sem substituir o diagnostico",
      "Criar prontuario por voz que entende terminologia odontologica com 95%+ de acuracia",
      "Automatizar agendamento e follow-up sem parecer impessoal para o paciente",
      "Garantir conformidade com LGPD e regulamentacoes de dados de saude",
      "Integrar IA em um fluxo clinico onde cada segundo conta",
    ],
    goals: [
      "Eliminar 60% do tempo gasto em tarefas administrativas com automacao inteligente",
      "Criar assistente de analise visual que reduza tempo de triagem de radiografias em 50%",
      "Alcancar NPS acima de 70 com dentistas nos primeiros 3 meses de uso",
    ],
    metrics: [
      { value: "62%", label: "Reducao no tempo de tarefas administrativas com IA" },
      { value: "47%", label: "Menos tempo na triagem de radiografias com o assistente visual" },
      { value: "78", label: "NPS com dentistas apos 3 meses de uso do produto" },
      { value: "35%", label: "Reducao em no-shows com lembretes inteligentes personalizados" },
    ],
    process: [
      {
        title: "Como entender onde a IA realmente gera valor em uma clinica?",
        description: "Passei 3 semanas acompanhando a rotina de 8 clinicas diferentes — desde consultorio individual ate rede com 15 unidades. Sentei ao lado de dentistas, recepcionistas e auxiliares. Cronometrei cada tarefa. O insight principal: dentistas nao precisavam de IA no diagnostico tanto quanto precisavam de IA no administrativo. O prontuario manual consumia 12 minutos por paciente. O agendamento por telefone gerava 3 remarcacoes por dia. Era ali que a IA poderia liberar tempo real.",
        imageAspect: "16:9",
      },
      {
        title: "Como construir um assistente visual que o dentista confia?",
        description: "Projetei o assistente de analise de radiografias como um co-piloto, nao como um diagnosticador. A interface mostra areas de atencao com niveis de confianca (alta, media, baixa) e sempre exibe a logica por tras da sugestao. Em testes com 34 dentistas, o modelo passou de 41% de uso para 89% quando adicionamos a explicabilidade — dentistas nao confiavam em uma IA que so apontava, mas confiavam em uma que explicava por que apontou.",
        imageAspect: "16:9",
      },
      {
        title: "Como fazer prontuario por voz funcionar no caos de uma clinica?",
        description: "Treinamos o modelo de voz com terminologia odontologica brasileira e testamos em ambiente real — com barulho de sugador, compressor e conversa com paciente. Projetei uma interface de confirmacao rapida: o dentista fala, a IA transcreve e estrutura em campos do prontuario, e basta um toque para confirmar. O tempo de preenchimento caiu de 12 para 3 minutos por paciente. Usei Claude Code para prototipar a interface de confirmacao inteira antes de envolver engenharia.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Dental Smart me ensinou que IA em saude so funciona quando e invisivel. O melhor elogio que recebi de um dentista foi: 'Esqueco que tem IA, so percebo que sobra mais tempo.' Projetar features de IA aqui exigiu uma disciplina diferente — cada tela, cada interacao, cada palavra precisava reduzir friccao, nao adicionar. A explicabilidade foi o divisor de aguas: dentistas nao querem uma caixa preta, querem um colega que mostra o raciocinio. Quando entendemos isso, a adocao disparou.",
  },
  {
    slug: "fapam",
    title: "Redesign completo do Portal do Aluno para 4.000+ estudantes",
    company: "FAPAM",
    year: "2018—21",
    role: "UI/UX Designer",
    timeline: "2018 — 2021",
    responsibilities: [
      "Pesquisa com alunos, professores e administrativos",
      "Arquitetura de informacao e card sorting",
      "Wireframes e prototipos de alta fidelidade",
      "Design de interface responsiva",
      "Testes de usabilidade presenciais",
      "Acompanhamento de implementacao com engenharia",
    ],
    context: [
      "A FAPAM e uma instituicao de ensino superior com mais de 4.000 alunos ativos. O Portal do Aluno era a principal ferramenta digital da faculdade — ali alunos viam notas, faziam matricula, acompanhavam frequencia e acessavam material. Mas o portal tinha mais de 8 anos sem redesign, e as reclamacoes eram constantes.",
      "Fui responsavel pelo redesign completo: desde pesquisa com usuarios ate prototipacao e acompanhamento da implementacao. O projeto durou 3 anos em ciclos iterativos, com cada fase sendo testada com alunos reais antes do lancamento.",
      "O maior desafio nao era visual — era estrutural. A arquitetura de informacao do portal nao correspondia a como alunos pensavam. Card sorting com 120 alunos revelou que 73% nao conseguiam encontrar informacoes basicas como calendario academico e situacao financeira em menos de 3 cliques.",
    ],
    challenges: [
      "Redesenhar sem interromper o acesso de 4.000+ alunos em periodo letivo",
      "Atender 3 publicos com necessidades distintas (alunos, professores, administrativos)",
      "Resolver arquitetura de informacao que nao correspondia ao modelo mental dos usuarios",
      "Tornar responsivo um sistema construido apenas para desktop",
      "Migrar anos de conteudo sem perda de informacao",
      "Convencer a gestao a investir em pesquisa antes de comecar a construir",
    ],
    goals: [
      "Reduzir o tempo medio para alunos encontrarem informacoes de 5+ cliques para 2",
      "Aumentar acessos via mobile de 12% para acima de 50% com design responsivo",
      "Elevar satisfacao dos alunos com o portal medida por pesquisa semestral",
    ],
    metrics: [
      { value: "68%", label: "Reducao no tempo de busca por informacoes academicas" },
      { value: "52%", label: "Acessos via mobile apos redesign responsivo (era 12%)" },
      { value: "4.2", label: "Nota de satisfacao dos alunos em pesquisa semestral (era 2.1)" },
      { value: "41%", label: "Reducao em chamados de suporte relacionados ao portal" },
    ],
    process: [
      {
        title: "Como descobrir o que 4.000 alunos realmente precisam?",
        description: "Realizamos card sorting com 120 alunos para entender como organizavam mentalmente as informacoes do portal. O resultado mostrou que a estrutura existente estava completamente desalinhada: 'Situacao financeira' estava escondida em 'Secretaria > Documentos > Financeiro', enquanto 73% dos alunos procuravam na tela inicial. Redesenhamos a arquitetura inteira baseada no modelo mental real dos usuarios, nao na estrutura administrativa da faculdade.",
        imageAspect: "16:9",
      },
      {
        title: "Como lançar um redesign sem derrubar o sistema em periodo de provas?",
        description: "Dividimos o lancamento em 4 fases ao longo de 2 semestres, comecando pelas areas mais criticas: notas, matricula e calendario. Cada fase passava por testes de usabilidade com 15-20 alunos antes do deploy. Na fase 1, identificamos 23 problemas de usabilidade que teriam afetado milhares de alunos se tivessemos lancado tudo de uma vez. A abordagem incremental custou mais tempo, mas evitou qualquer interrupcao no acesso.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "A FAPAM foi onde aprendi a projetar de verdade. Nao tinha time de pesquisa, nao tinha design system pronto, nao tinha CI/CD. Tive que construir tudo do zero — desde o argumento para convencer a gestao a investir em pesquisa com alunos, ate a documentacao que a engenharia usou para implementar. A maior licao: os numeros so melhoraram quando paramos de redesenhar baseado em achismo e comecamos a ouvir os alunos. Parece obvio, mas em 2018 nao era a pratica padrao em instituicoes desse porte.",
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
