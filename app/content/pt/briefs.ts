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
};
