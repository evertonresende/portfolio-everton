// Dados iguais nos dois idiomas.

export const SITE_URL = "https://evertonresende.com";

// Gerado de curriculo.html (instruções no topo daquele arquivo). Mudou fato no site, regenerar o PDF.
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
  // Skills com prova na ficha de fatos (§5) ou confirmadas pelo Éverton (AWS, 2026-10-27). Nomes técnicos, iguais nos dois idiomas.
  knowsAbout: ["LLM", "AI agents", "Tool calling", "RAG", "Embeddings", "Evals", "TypeScript", "Python", "React", "React Native", "Cloudflare Workers", "AWS", "Postgres"],
} as const;
