import { Navigation } from "./components/nav";

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
  { period: "2024–presente", role: "AI Product Designer", company: "SAT Bank", highlight: "IA em fluxos bancários" },
  { period: "2022–presente", role: "Product Owner & Builder", company: "Independente", highlight: "SaaS clínico end-to-end" },
  { period: "2021–2024", role: "Product Designer (Mobile)", company: "Softplan", highlight: "Legal tech, 8k+ colaboradores" },
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-6 sm:px-8 overflow-hidden">
          <div className="max-w-[1200px] mx-auto relative">
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-medium tracking-[-0.05em] leading-[0.85] text-foreground animate-fade-in-up">
              EVERTON
              <br />
              RESENDE
            </h1>
            <div className="mt-8 sm:mt-10 space-y-3 animate-fade-in-up delay-2">
              <p className="text-lg sm:text-xl font-normal text-muted-foreground tracking-tight">
                AI Product Designer
              </p>
              <p className="font-serif italic text-xl sm:text-2xl text-muted-foreground/60">
                desenhando produtos inteligentes com IA
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
          </div>
        </section>

        {/* Work */}
        <section id="work" className="py-20 sm:py-28 px-6 sm:px-8">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-baseline justify-between mb-12 sm:mb-16 animate-fade-in">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight">
                Projetos
              </h2>
              <span className="text-sm text-muted-foreground">
                {projects.length} projetos
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-card group rounded-xl overflow-hidden border border-border/40 bg-card cursor-pointer animate-fade-in-up delay-${index + 1}`}
                >
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
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 sm:py-28 px-6 sm:px-8 bg-card border-y border-border/40">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-tight mb-12 sm:mb-16">
              Sobre
            </h2>

            {/* Bio */}
            <div className="max-w-2xl space-y-4 text-muted-foreground leading-relaxed mb-16 sm:mb-20">
              <p className="text-foreground font-medium">
                Desenho produtos que usam IA de forma inteligente — não como
                buzzword, mas como motor de valor real.
              </p>
              <p>
                Meu diferencial é o background técnico: consigo prototipar com
                código real, falar a mesma língua da engenharia e validar
                hipóteses com usuários antes de escalar. Produtos que liderei
                foram publicados na App Store e Google Play.
              </p>
            </div>

            {/* Pillars */}
            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
              {pillars.map((pillar) => (
                <div key={pillar.title}>
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
              ))}
            </div>

            {/* Timeline */}
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
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-serif italic text-2xl sm:text-3xl text-foreground/70 max-w-lg leading-snug mb-10">
            Que bom que nossos caminhos se cruzaram. Espero ter despertado
            curiosidade.
          </p>

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
