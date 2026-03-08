import { Navigation } from "./components/nav";
import { ScrollReveal } from "./components/scroll-reveal";

const companies = ["SAT Bank", "Softplan", "FAPAM"];

const beliefs = [
  "IA é ferramenta, não mágica — o valor está no problema certo",
  "Protótipos com código real validam mais que wireframes",
  "Produtos bons nascem de quem entende design e engenharia",
  "Simplicidade é a sofisticação definitiva",
];

const projects = [
  {
    id: 1,
    title: "Integrando IA em fluxos bancários para reduzir fricção operacional",
    company: "SAT Bank",
    context: "App bancário React Native publicado na App Store e Google Play. Integrei LLMs via OpenAI e Anthropic para automatizar processos internos com servidores MCP.",
    role: "AI Product Designer",
    result: "Feature flags com Statsig permitiram releases progressivos e validação com usuários reais antes de escalar.",
    year: "2024",
    gradient: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)",
  },
  {
    id: 2,
    title: "SaaS clínico end-to-end para gestão de consultórios",
    company: "Projeto independente",
    context: "Sistema multi-tenant com agenda, financeiro, CRM, estoque e integração WhatsApp — entregue solo com 250k+ linhas de código e 91 PRs.",
    role: "Product Owner & Builder",
    result: "Arquitetura com Row Level Security no PostgreSQL garantiu isolamento total entre clínicas desde o dia 1.",
    year: "2022–presente",
    gradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
  },
  {
    id: 3,
    title: "Validando hipóteses de produto com protótipos funcionais no setor jurídico",
    company: "Softplan",
    context: "Na maior legal tech da América Latina (8k+ colaboradores), construí protótipos com código real para validar fluxos com stakeholders e usuários finais.",
    role: "Product Designer (Mobile)",
    result: "Ciclo de feedback acelerado — código real em vez de wireframes permitiu decisões mais rápidas com evidência concreta.",
    year: "2021–2024",
    gradient: "linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)",
  },
];

const expertise = [
  "Integração de LLMs em produtos",
  "Discovery e validação com usuários",
  "Prototipagem funcional com código",
  "Design de interfaces mobile",
  "Testes A/B e feature flags",
  "Stakeholder management",
  "Handoff colaborativo com devs",
  "Design systems",
];

const highlights = [
  { icon: "rocket", text: "Apps publicados na App Store e Google Play" },
  { icon: "code", text: "250k+ linhas de código entregues solo" },
  { icon: "building", text: "Softplan — maior legal tech da América Latina" },
  { icon: "brain", text: "Integração multi-modelo: OpenAI, Anthropic, Gemini" },
  { icon: "users", text: "Experiência em times de produto de 8k+ pessoas" },
  { icon: "zap", text: "Fundador de SaaS multi-tenant em produção" },
];

const timeline = [
  { period: "2024–presente", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2022–presente", role: "Product Owner & Builder", company: "Independente" },
  { period: "2021–2024", role: "Product Designer (Mobile)", company: "Softplan" },
  { period: "2018–2021", role: "Full-Stack Developer", company: "FAPAM" },
];

const iconMap: Record<string, string> = {
  rocket: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0 M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",
  code: "m18 16 4-4-4-4 M6 8l-4 4 4 4 M14.5 4l-5 16",
  building: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2 M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2 M10 6h4 M10 10h4 M10 14h4 M10 18h4",
  brain: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z M12 5v13 M6.399 8l5.6 3.6 M17.6 8l-5.6 3.6",
  users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75",
  zap: "M13 2 3 14h9l-1 10 10-12h-9l1-10z",
};

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const path = iconMap[name];
  if (!path) return null;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {path.split(" M").map((d, i) => (
        <path key={i} d={i === 0 ? d : `M${d}`} />
      ))}
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-6 sm:px-8 overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            <div className="flex items-start gap-5 sm:gap-6 mb-8 animate-fade-in-up">
              {/* Avatar placeholder */}
              <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-foreground text-background flex items-center justify-center text-lg sm:text-xl font-semibold tracking-tight">
                ER
              </div>
              <div>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Oi, eu sou o Everton
                  <span className="inline-block ml-2 animate-[wave_1.5s_ease-in-out_infinite]">
                    👋
                  </span>
                </p>
                <p className="text-sm text-muted-foreground/50 mt-0.5">
                  Pará de Minas, MG
                </p>
              </div>
            </div>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-normal tracking-[-0.02em] leading-[1] text-foreground animate-fade-in-up delay-1">
              AI Product Designer
            </h1>
            <div className="mt-6 sm:mt-8 max-w-xl animate-fade-in-up delay-2">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Desenho produtos que usam IA de forma inteligente.
                Meu diferencial é o background técnico — prototipar com código
                real, falar a língua da engenharia e validar antes de escalar.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 animate-fade-in-up delay-3">
              <a
                href="#work"
                className="text-sm font-medium text-foreground link-underline"
              >
                Ver projetos
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Entrar em contato
              </a>
            </div>

            {/* Company logos */}
            <div className="mt-14 sm:mt-16 pt-8 border-t border-border/40 animate-fade-in-up delay-4">
              <p className="text-[11px] font-medium tracking-[0.15em] uppercase text-muted-foreground/50 mb-4">
                Empresas onde atuei
              </p>
              <div className="flex items-center gap-8 sm:gap-12">
                {companies.map((company) => (
                  <span
                    key={company}
                    className="text-sm sm:text-base font-medium text-muted-foreground/40 tracking-tight"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beliefs — statements assertivos */}
        <section className="py-20 sm:py-28 px-6 sm:px-8 border-y border-border/40 bg-card">
          <div className="max-w-[900px] mx-auto">
            <div className="flex flex-col gap-8 sm:gap-10">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <p className="font-display text-xl sm:text-2xl lg:text-[1.75rem] font-normal text-foreground/80 leading-snug text-center">
                    {belief}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-20 sm:py-28 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="mb-12 sm:mb-16">
                <h2 className="font-display text-2xl sm:text-3xl font-normal tracking-tight">
                  Projetos
                </h2>
              </div>
            </ScrollReveal>
            <div className="space-y-8 sm:space-y-12">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.08}>
                  <article className="project-card group rounded-xl overflow-hidden border border-border/40 bg-card cursor-pointer">
                    <div className="grid md:grid-cols-[1fr,1.2fr] gap-0">
                      <div className="aspect-[4/3] md:aspect-auto relative overflow-hidden">
                        <div
                          className="absolute inset-0 project-image-wrapper"
                          style={{ background: project.gradient }}
                        />
                        <span className="card-number absolute bottom-4 right-5 text-8xl sm:text-9xl font-medium text-black leading-none select-none z-10">
                          {String(project.id).padStart(2, "0")}
                        </span>
                      </div>
                      <div className="p-6 sm:p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-4">
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/50">
                              {project.company}
                            </span>
                            <span className="text-muted-foreground/30">·</span>
                            <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground/50">
                              {project.year}
                            </span>
                          </div>
                          <h3 className="font-display font-normal text-lg sm:text-xl text-card-foreground leading-snug mb-4">
                            {project.title}
                          </h3>
                          <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
                            {project.context}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-border/30 space-y-2">
                          <p className="text-[12px] font-medium tracking-[0.05em] uppercase text-muted-foreground/50">
                            Meu papel: {project.role}
                          </p>
                          <p className="text-[13px] text-muted-foreground leading-relaxed">
                            {project.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 bg-card border-y border-border/40">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <h2 className="font-display text-2xl sm:text-3xl font-normal tracking-tight mb-12 sm:mb-16">
                Sobre
              </h2>
            </ScrollReveal>

            {/* Expertise + Highlights — 2 colunas (ref: Apparicio) */}
            <div className="grid md:grid-cols-2 gap-12 sm:gap-16 mb-16 sm:mb-20">
              <ScrollReveal>
                <div>
                  <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-6">
                    Expertise
                  </h3>
                  <ul className="space-y-3">
                    {expertise.map((item) => (
                      <li
                        key={item}
                        className="text-[14px] text-foreground/80 flex items-center gap-3"
                      >
                        <span className="w-1 h-1 rounded-full bg-muted-foreground/30 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div>
                  <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-6">
                    Destaques
                  </h3>
                  <ul className="space-y-4">
                    {highlights.map((item) => (
                      <li
                        key={item.text}
                        className="flex items-start gap-3"
                      >
                        <Icon
                          name={item.icon}
                          className="text-muted-foreground/40 mt-0.5 shrink-0"
                        />
                        <span className="text-[14px] text-foreground/80 leading-snug">
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            {/* Timeline */}
            <ScrollReveal>
              <div>
                <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-6">
                  Trajetória
                </h3>
                <div className="space-y-4">
                  {timeline.map((item) => (
                    <div
                      key={item.company}
                      className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-0"
                    >
                      <span className="text-[13px] text-muted-foreground/50 sm:w-36 shrink-0">
                        {item.period}
                      </span>
                      <span className="text-[14px] text-foreground font-medium">
                        {item.role}
                        <span className="text-muted-foreground font-normal">
                          {" "}— {item.company}
                        </span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal>
            <p className="font-serif italic text-2xl sm:text-3xl text-foreground/70 max-w-lg leading-snug mb-3">
              Vamos conversar sobre design, IA, ou qualquer ideia maluca que
              você queira tirar do papel?
            </p>
            <p className="text-muted-foreground/50 text-sm mb-12">
              Sempre aberto a novos projetos e parcerias.
            </p>
          </ScrollReveal>

          {/* Contact cards com ícones (ref: Apparicio) */}
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              <a
                href="mailto:everton.augustor@gmail.com"
                className="group flex items-center gap-4 p-5 rounded-xl border border-border/40 hover:border-foreground/15 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-[12px] text-muted-foreground/50">everton.augustor@gmail.com</p>
                </div>
              </a>
              <a
                href="https://linkedin.com/in/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-border/40 hover:border-foreground/15 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                <div>
                  <p className="text-sm font-medium text-foreground">LinkedIn</p>
                  <p className="text-[12px] text-muted-foreground/50">in/evertonresende</p>
                </div>
              </a>
              <a
                href="https://github.com/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 rounded-xl border border-border/40 hover:border-foreground/15 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground/40 group-hover:text-foreground/60 transition-colors">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                  <path d="M9 18c-4.51 2-5-2-7-2"/>
                </svg>
                <div>
                  <p className="text-sm font-medium text-foreground">GitHub</p>
                  <p className="text-[12px] text-muted-foreground/50">evertonresende</p>
                </div>
              </a>
            </div>
          </ScrollReveal>

          <div className="pt-8 border-t border-border/40">
            <p className="text-[13px] text-muted-foreground">
              © {new Date().getFullYear()} Everton Resende
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
