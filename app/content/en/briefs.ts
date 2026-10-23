import type { BriefSlug, CaseBrief } from "../types";

export const briefs: Record<BriefSlug, CaseBrief> = {
  softplan: {
    kicker: "Design foundations · Public sector · Nov 2022 – Oct 2025",
    title: "Softplan.",
    lead: "Product Designer on products for the Public Prosecutor’s Office and public attorney offices. Recognized 10x in Softplayer A+.",
    factsTitle: "At a glance",
    facts: [
      { term: "Role", value: "Product Designer" },
      { term: "Period", value: "Nov 2022 – Oct 2025" },
      { term: "Model", value: "CLT · remote" },
      { term: "Products", value: "Public Prosecutor’s Office and public attorney offices" },
      { term: "Recognition", value: "10x in Softplayer A+" },
    ],
    paragraphs: [
      "I designed products for the public sector, where legal rules do not get simpler and the people who use the system already know the old way. There I learned to reduce complexity without scaring the people who already know how to use it.",
      "This is only the public summary, with no screens. I walk through the process and the decisions in a conversation.",
    ],
    seo: {
      title: "Softplan: product design for the public sector · Everton Resende",
      description:
        "Product Designer at Softplan from Nov 2022 to Oct 2025, on products for the Public Prosecutor’s Office and public attorney offices. Recognized 10x in Softplayer A+.",
    },
  },
};
