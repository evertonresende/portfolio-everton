import { Navigation } from "./components/nav";
import { ScrollReveal, LetterReveal } from "./components/scroll-reveal";

const companies = ["SAT Bank", "Softplan", "FAPAM"];

const beliefs = [
  "IA é ferramenta, não mágica — o valor está no problema certo",
  "Protótipos com código real validam mais que wireframes",
  "Produtos bons nascem de quem entende design e engenharia",
];

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard",
    category: "Design de Produto",
    year: "2024",
    gradient: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)",
  },
  {
    id: 2,
    title: "Mobile Banking",
    category: "Integração de IA",
    year: "2024",
    gradient: "linear-gradient(135deg, #fafafa 0%, #f4f4f5 100%)",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Desenvolvimento Web",
    year: "2023",
    gradient: "linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)",
  },
  {
    id: 4,
    title: "Design System",
    category: "Biblioteca de Componentes",
    year: "2024",
    gradient: "linear-gradient(135deg, #f4f4f5 0%, #e4e4e7 100%)",
  },
  {
    id: 5,
    title: "Marketing Site",
    category: "Desenvolvimento Frontend",
    year: "2023",
    gradient: "linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%)",
  },
  {
    id: 6,
    title: "Analytics Tool",
    category: "Design de Produto",
    year: "2024",
    gradient: "linear-gradient(135deg, #f5f5f4 0%, #e7e5e4 100%)",
  },
];

const pillars = [
  {
    title: "Estratégia de IA",
    description: "Identifico onde IA cria valor real no produto",
    skills: ["LLMs", "OpenAI", "Anthropic", "Gemini", "MCP", "Agentes autônomos"],
  },
  {
    title: "Product Design",
    description: "Do discovery ao produto shipado",
    skills: ["Product Thinking", "A/B Testing", "Feature Flags", "Prototipagem funcional", "Figma"],
  },
  {
    title: "Fluência Técnica",
    description: "Falo a língua da engenharia — e implemento se preciso",
    skills: ["React Native", "TypeScript", "Next.js", "Edge Computing"],
  },
];

const timeline = [
  { period: "2024–presente", role: "AI Product Designer", company: "SAT Bank" },
  { period: "2022–presente", role: "Product Owner & Builder", company: "Independente" },
  { period: "2021–2024", role: "Product Designer (Mobile)", company: "Softplan" },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-16 sm:pt-44 sm:pb-20 px-6 sm:px-8 overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 animate-fade-in-up">
              Oi, eu sou o Everton
              <span className="inline-block ml-2 animate-[wave_1.5s_ease-in-out_infinite]">
                👋
              </span>
            </p>
            <h1 className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-medium tracking-[-0.04em] leading-[1] text-foreground animate-fade-in-up delay-1">
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

        {/* Beliefs */}
        <section className="py-16 sm:py-24 px-6 sm:px-8 border-y border-border/40">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center gap-6 sm:gap-8">
              {beliefs.map((belief, index) => (
                <ScrollReveal key={index} delay={index * 0.12}>
                  <p className="font-serif italic text-xl sm:text-2xl lg:text-3xl text-center text-foreground/70 max-w-2xl leading-snug">
                    &ldquo;{belief}&rdquo;
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
              <div className="flex items-baseline justify-between mb-12 sm:mb-16">
                <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                  Projetos
                </h2>
                <span className="text-sm text-muted-foreground">
                  {projects.length} projetos
                </span>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {projects.map((project, index) => (
                <ScrollReveal key={project.id} delay={index * 0.08}>
                  <article className="project-card group rounded-xl overflow-hidden border border-border/40 bg-card cursor-pointer">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <div
                        className="absolute inset-0 project-image-wrapper"
                        style={{ background: project.gradient }}
                      />
                      <span className="card-number absolute bottom-3 right-4 text-7xl sm:text-8xl font-medium text-black leading-none select-none z-10">
                        {String(project.id).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className="font-display font-medium text-[15px] text-card-foreground">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-muted-foreground mt-1.5">
                        {project.category}
                        <span className="mx-2 text-border">·</span>
                        {project.year}
                      </p>
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
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-12 sm:mb-16">
                Sobre
              </h2>
            </ScrollReveal>

            {/* Pillars */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
              {pillars.map((pillar, index) => (
                <ScrollReveal key={pillar.title} delay={index * 0.1}>
                  <div>
                    <h3 className="font-display font-medium text-base text-foreground mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-[13px] text-muted-foreground/60 mb-4">
                      {pillar.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-secondary rounded-full text-[12px] font-medium text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
                      <span className="text-[13px] text-muted-foreground/60 sm:w-36 shrink-0">
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
            <p className="text-muted-foreground/50 text-sm mb-10">
              Sempre aberto a novos projetos e parcerias.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-6 mb-16">
              <a
                href="mailto:everton.augustor@gmail.com"
                className="text-sm font-medium text-accent link-underline"
              >
                Email
              </a>
              <a
                href="https://linkedin.com/in/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent link-underline"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/evertonresende"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-accent link-underline"
              >
                GitHub
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
