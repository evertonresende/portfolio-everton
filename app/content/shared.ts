// Dados iguais nos dois idiomas.

export const SITE_URL = "https://evertonresende.com";

// O link de agenda ainda não existe; o build falha até ele entrar aqui.
export const AGENDA_URL = "{{CONFIRMAR: link de agenda (Cal.com)}}";

// {{CONFIRMAR: gerar public/cv-everton-resende.pdf na Fase 5}}
export const CV_URL = "/cv-everton-resende.pdf";

export const CONTACT = {
  email: "everton.augustor@gmail.com",
  linkedin: "https://linkedin.com/in/evertonresende",
  github: "https://github.com/evertonresende",
  whatsapp: "https://wa.me/5537999133556",
} as const;

export const PERSON = {
  name: "Everton Resende",
  jobTitle: "AI Engineer",
  locality: "Pará de Minas",
  region: "MG",
  country: "BR",
  image: "/images/everton-480.webp",
  // Só skills marcadas "em produção" na ficha de fatos (§5). Nomes técnicos, iguais nos dois idiomas.
  knowsAbout: ["LLM", "AI agents", "Tool calling", "Evals", "TypeScript", "React", "React Native", "Cloudflare Workers", "Postgres"],
} as const;
