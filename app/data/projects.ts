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
    title: "App bancário completo com PIX, crypto e onboarding — time de 5 pessoas",
    company: "SAT Bank",
    year: "2025–2026",
    role: "AI Product Designer",
    timeline: "Out 2025 — Mar 2026",
    responsibilities: [
      "Design de produto para app bancário mobile (App Store e Google Play)",
      "Fluxos de PIX (transferência, QR code, chaves, limites), boleto e empréstimos",
      "Onboarding de 8 etapas para pessoa física e jurídica",
      "Feature de compra e venda de criptomoedas com integração de terceiros",
      "Design system com tokens para iOS, Android e web",
    ],
    context: [
      "O SAT Bank é um banco digital com app na App Store e Google Play, integrado com Cronos Bank como BaaS. Entrei como o único designer de um time de 5 pessoas. O produto já tinha uma base técnica, mas precisava de alguém que conectasse tudo em uma experiência coesa — do onboarding ao PIX.",
      "O app cobre o que você esperaria de um banco digital: conta PF e PJ, transferências via PIX (com QR code, chaves, claims e limites dia/noite), pagamento de boleto com leitura de câmera, empréstimos, extrato com filtros, e 2FA por SMS para operações sensíveis. Tudo isso projetado e prototipado com IA para acelerar o ciclo.",
      "A feature mais complexa foi a compra e venda de criptomoedas. Projetei todo o fluxo — desde a tela de cotação até a confirmação com 2FA — integrando com sistemas de terceiros. Era desafiador porque envolvia regulamentação financeira, limites de operação e uma UX que precisava transmitir segurança em cada etapa, sem parecer complicada.",
    ],
    challenges: [
      "Ser o único designer cobrindo app, site institucional, backoffice e design system",
      "Projetar onboarding de 8 etapas com upload de documentos, verificação por SMS e validação de CPF/CNPJ",
      "Integrar fluxo de criptomoedas com sistema de terceiros mantendo a experiência coesa",
      "Projetar assistente de IA que os usuários realmente quisessem usar (a maioria não queria)",
      "Criar design system do zero para 3 plataformas com recursos limitados",
    ],
    goals: [
      "Entregar experiência bancária completa: PIX, boleto, empréstimos, onboarding, extrato",
      "Lançar feature de criptomoedas integrada ao app",
      "Construir design system que funcionasse em iOS, Android e web",
    ],
    metrics: [
      { value: "8 etapas", label: "Onboarding completo para PF e PJ — do CPF ao primeiro acesso" },
      { value: "PIX completo", label: "Transferência, QR code, chaves, claims, limites dia/noite" },
      { value: "Crypto", label: "Compra e venda de criptomoedas com integração de terceiros" },
      { value: "5 pessoas", label: "Time inteiro — design, engenharia e produto juntos" },
    ],
    process: [
      {
        title: "Como entregar um banco inteiro com 5 pessoas?",
        description: "Não existia separação clássica de design, produto e engenharia. Com 5 pessoas, todo mundo fazia de tudo. Prototipava com IA para ganhar velocidade — e isso fez diferença real nos fluxos mais simples. Mas para o onboarding de 8 etapas e o fluxo de criptomoedas, precisei ir pro Figma para detalhar cada edge case: erro de validação de CPF, timeout de SMS, upload de documento falhando, fluxo PJ com representante legal. O protótipo rápido não cobria essa complexidade.",
        imageAspect: "16:9",
      },
      {
        title: "O que aconteceu quando tentamos colocar IA pra atender usuários?",
        description: "Projetamos um assistente que respondia dúvidas sobre extrato, limites e operações. Na prática, a maioria dos usuários não gostou. O feedback era direto: 'não quero falar com robô, quero resolver meu problema'. Redesenhamos a abordagem — em vez de chatbot, a IA virou invisível: sugestões contextuais, alertas de saldo, categorização automática de gastos. Parou de ser protagonista e virou camada de apoio. A aceitação melhorou, mas o aprendizado custou tempo.",
        imageAspect: "16:9",
      },
      {
        title: "Como projetar um fluxo de crypto dentro de um banco?",
        description: "O fluxo de compra e venda de criptomoedas era o mais sensível do app. Integração com sistema de terceiros, regulamentação financeira, limites de operação, confirmação com 2FA. Projetei cada tela pensando em transmitir segurança sem adicionar fricção desnecessária. O maior desafio foi o momento da confirmação: o usuário precisava entender exatamente o que estava comprando, a que preço, com que taxa, antes de confirmar com SMS. Qualquer ambiguidade gerava desistência.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "A SAT Bank me mostrou como é trabalhar com IA de verdade, não em pitch deck. Num time de 5 pessoas, entreguei a experiência de um banco digital completo: PIX, boleto, empréstimos, crypto, onboarding. Algumas coisas funcionaram muito bem — prototipação com IA acelerou entregas reais. Outras não: o assistente de IA foi rejeitado e tivemos que repensar tudo. A lição principal foi que em finanças, IA invisível funciona melhor que IA na cara do usuário. As pessoas não querem conversar com o banco. Querem que funcione.",
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
    title: "SaaS completo para clínicas odontológicas — agenda, financeiro, CRM e IA",
    company: "Dental Smart",
    year: "2023–2025",
    role: "Product Designer",
    timeline: "2023–2025",
    responsibilities: [
      "Design de produto end-to-end: agenda, financeiro, CRM, prontuários, plano de tratamento",
      "Gravação e transcrição de consultas por voz com IA (em produção)",
      "CRM com funil de vendas, kanban e agentes de IA para retenção de pacientes",
      "Módulo financeiro completo: caixa, contas a pagar/receber, DRE, conciliação bancária, NFSe",
      "Integração com WhatsApp para comunicação com pacientes",
    ],
    context: [
      "O Dental Smart é um SaaS multi-tenant para gestão de clínicas odontológicas, feito como freelance paralelo à Softplan. Nasceu do contato com dentistas que estavam desesperados com as soluções existentes — sistemas antigos, sem automação, com usabilidade precária. O produto foi 100% construído com base no feedback deles.",
      "É um sistema completo: agenda com multi-cadeira, gestão de pacientes com anamnese por link (SMS/WhatsApp), prontuários com gravação e transcrição por voz, plano de tratamento com PDF exportável, módulo financeiro inteiro (caixa, contas a pagar/receber, DRE, conciliação bancária com OFX, NFSe), CRM com funil kanban, e integração com WhatsApp.",
      "A parte de IA está em três frentes: transcrição automática de consultas (grava, transcreve e resume com IA — em produção), agentes no CRM para reativação de pacientes inativos e follow-up automatizado, e conciliação bancária assistida. Projetei também uma feature de análise de radiografias, mas essa não chegou a produção.",
    ],
    challenges: [
      "Projetar um SaaS completo cobrindo agenda, financeiro, CRM e IA como freelance",
      "Fazer transcrição por voz funcionar em ambiente clínico real (barulho de sugador, compressor)",
      "Criar agentes de CRM que ajudam sem parecer spam para os pacientes",
      "Garantir conformidade com LGPD em dados sensíveis de saúde",
      "Projetar multi-tenancy onde cada clínica vê apenas seus dados",
    ],
    goals: [
      "Criar um produto que dentistas preferissem ao que já usavam",
      "Lançar gravação e transcrição de consultas funcional em ambiente clínico real",
      "Entregar módulo financeiro completo com caixa, DRE, conciliação e NFSe",
    ],
    metrics: [
      { value: "~20", label: "Clínicas usando o produto até minha saída" },
      { value: "Em prod.", label: "Transcrição de consultas por voz — gravando e resumindo com IA" },
      { value: "Financeiro", label: "Caixa, DRE, contas, conciliação bancária OFX, NFSe — tudo funcional" },
      { value: "0 churn", label: "Nenhuma clínica que adotou o produto quis voltar atrás" },
    ],
    process: [
      {
        title: "Como entender a dor real de quem trabalha numa clínica?",
        description: "Conversei com dentistas, recepcionistas e auxiliares em clínicas de diferentes tamanhos. O nível de frustração com os sistemas existentes era alto — ninguém gostava do que usava, mas não via alternativa. Dentistas gastavam tempo demais com burocracia, recepcionistas viviam no telefone remarcando, e o financeiro era planilha. O produto nasceu dessas conversas: agenda, financeiro, CRM e IA, tudo num lugar só.",
        imageAspect: "16:9",
      },
      {
        title: "O que foi pro ar e o que ficou no protótipo?",
        description: "A gravação e transcrição de consultas foi a feature de IA com mais impacto. O dentista grava a consulta, a IA transcreve e resume automaticamente. Projetei a interface com waveform em tempo real e confirmação em um toque. Está em produção. O CRM com agentes de IA para retenção também está rodando — follow-up automático, reativação de inativos via WhatsApp. Já a análise de radiografias ficou no protótipo: priorizamos o financeiro (caixa, DRE, conciliação com OFX, NFSe) que tinha demanda mais urgente.",
        imageAspect: "16:9",
      },
      {
        title: "Como IA ajudou clínicas a não perder pacientes?",
        description: "Projetei agentes dentro do CRM com funil kanban: prospecção, negociação, ganho, perda. Agentes de IA faziam follow-up automático via WhatsApp, reativavam pacientes inativos e sugeriam próximas ações. O desafio foi calibrar o tom — mensagem robótica de dentista assusta. Testamos abordagens até encontrar equilíbrio entre automação e naturalidade. A integração com WhatsApp foi essencial: era o canal que os pacientes já usavam.",
        imageAspect: "4:3",
      },
    ],
    retrospective:
      "Dental Smart foi onde mais aprendi sobre construir produto com IA de verdade. É um SaaS completo — não é só uma feature. Agenda, financeiro, CRM, prontuários, plano de tratamento, integração WhatsApp, transcrição por voz, agentes de IA. Nem tudo que projetei foi pro ar (radiografia ficou no protótipo), mas o que funcionou, funcionou porque veio do usuário. Com ~20 clínicas e zero churn, o produto provou que quando você resolve dor real, a adoção vem naturalmente.",
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
