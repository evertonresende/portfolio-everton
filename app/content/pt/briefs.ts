import type { BriefSlug, CaseBrief } from "../types";

export const briefs: Record<BriefSlug, CaseBrief> = {
  softplan: {
    kicker: "Fundamentos de design · Setor público · nov 2022 – out 2025",
    title: "Softplan.",
    lead: "Product Designer em produtos para o Ministério Público e as Procuradorias. Reconhecido 10x no Softplayer A+.",
    factsTitle: "Ficha técnica",
    facts: [
      { term: "Papel", value: "Product Designer" },
      { term: "Período", value: "nov 2022 – out 2025" },
      { term: "Modelo", value: "CLT · remoto" },
      { term: "Produtos", value: "Ministério Público e Procuradorias" },
      { term: "Reconhecimento", value: "10x no Softplayer A+" },
    ],
    paragraphs: [
      "Desenhei produto para o setor público, onde a regra legal não se simplifica e quem usa o sistema já sabe o caminho antigo. Ali aprendi a reduzir complexidade sem assustar quem já sabe usar.",
      "Aqui fica só o resumo público, sem telas. O processo e as decisões eu conto numa conversa.",
    ],
    seo: {
      title: "Softplan: design de produto para o setor público · Everton Resende",
      description:
        "Product Designer na Softplan de nov 2022 a out 2025, em produtos para Ministério Público e Procuradorias. Reconhecido 10x no Softplayer A+.",
    },
  },
  fapam: {
    kicker: "Fundamentos de design · Educação · nov 2018 – out 2021",
    title: "FAPAM.",
    lead: "UI/UX Designer no portal acadêmico da FAPAM, usado por mais de 4.000 alunos. Foi onde comecei no design de produto.",
    factsTitle: "Ficha técnica",
    facts: [
      { term: "Papel", value: "UI/UX Designer" },
      { term: "Período", value: "nov 2018 – out 2021" },
      { term: "Modelo", value: "CLT · híbrido" },
      { term: "Escala", value: "Portal com 4.000+ alunos" },
    ],
    paragraphs: [
      "{{CONFIRMAR: o portal do aluno era uma solução TOTVS só para desktop?}} Conversei com alunos para entender o que mais incomodava, redesenhei a arquitetura de informação em torno do que eles mais buscavam e testei protótipos com alunos reais antes de implementar.",
      "A parte mais difícil foi a adoção. Mantive as rotas principais para quem já sabia o caminho e pus onboarding contextual só nas mudanças maiores. Foi onde aprendi que design funciona quando vem do usuário, não de suposição.",
    ],
    seo: {
      title: "FAPAM: portal acadêmico para 4.000+ alunos · Everton Resende",
      description:
        "UI/UX Designer na FAPAM de nov 2018 a out 2021: o portal acadêmico de mais de 4.000 alunos, onde comecei no design de produto.",
    },
  },
};
