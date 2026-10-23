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
  fapam: {
    kicker: "Design foundations · Education · Nov 2018 – Oct 2021",
    title: "FAPAM.",
    lead: "UI/UX Designer on the FAPAM academic portal, used by more than 4,000 students. It is where I started in product design.",
    factsTitle: "At a glance",
    facts: [
      { term: "Role", value: "UI/UX Designer" },
      { term: "Period", value: "Nov 2018 – Oct 2021" },
      { term: "Model", value: "CLT · hybrid" },
      { term: "Scale", value: "Portal with 4,000+ students" },
    ],
    paragraphs: [
      "{{CONFIRMAR: was the student portal a desktop-only TOTVS solution?}} I talked to students to understand what bothered them most, redesigned the information architecture around what they looked for most, and tested prototypes with real students before building.",
      "The hardest part was adoption. I kept the main paths for people who already knew the way and added contextual onboarding only for the bigger changes. That is where I learned that design works when it comes from users, not from assumptions.",
    ],
    seo: {
      title: "FAPAM: academic portal for 4,000+ students · Everton Resende",
      description:
        "UI/UX Designer at FAPAM from Nov 2018 to Oct 2021: the academic portal for more than 4,000 students, where I started in product design.",
    },
  },
};
