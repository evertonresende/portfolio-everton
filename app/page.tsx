import { Navigation } from "./components/nav";

const projects = [
  {
    id: 1,
    title: "SaaS Dashboard",
    category: "Product Design",
    year: "2024",
    gradient: "linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)",
  },
  {
    id: 2,
    title: "Mobile Banking",
    category: "UI/UX Design",
    year: "2024",
    gradient: "linear-gradient(135deg, #e0e7ff 0%, #eef2ff 100%)",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    category: "Web Development",
    year: "2023",
    gradient: "linear-gradient(135deg, #d1fae5 0%, #ecfdf5 100%)",
  },
  {
    id: 4,
    title: "Design System",
    category: "Component Library",
    year: "2024",
    gradient: "linear-gradient(135deg, #ede9fe 0%, #f5f3ff 100%)",
  },
  {
    id: 5,
    title: "Marketing Site",
    category: "Frontend Development",
    year: "2023",
    gradient: "linear-gradient(135deg, #fef3c7 0%, #fffbeb 100%)",
  },
  {
    id: 6,
    title: "Analytics Tool",
    category: "Product Design",
    year: "2024",
    gradient: "linear-gradient(135deg, #fce7f3 0%, #fff1f2 100%)",
  },
];

const skills = [
  "AI / LLMs",
  "OpenAI SDK",
  "Anthropic SDK",
  "MCP",
  "React Native",
  "Expo",
  "TypeScript",
  "Next.js",
  "Cloudflare Workers",
  "Figma",
  "Product Design",
  "A/B Testing",
];

export default function HomePage() {
  return (
    <>
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 px-6 sm:px-8 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(37, 99, 235, 0.04) 0%, transparent 60%)",
            }}
          />
          <div className="max-w-[1200px] mx-auto relative">
            <h1 className="font-display text-[clamp(3.5rem,10vw,9rem)] font-extrabold tracking-[-0.04em] leading-[0.85] text-foreground animate-fade-in-up">
              EVERTON
              <br />
              RESENDE
            </h1>
            <div className="mt-8 sm:mt-10 space-y-3 animate-fade-in-up delay-2">
              <p className="text-lg sm:text-xl font-medium text-muted-foreground tracking-tight">
                AI Product Designer
              </p>
              <p className="font-serif italic text-xl sm:text-2xl text-muted-foreground/70">
                desenhando produtos inteligentes com IA
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6 animate-fade-in-up delay-3">
              <a
                href="#work"
                className="text-sm font-medium text-accent link-underline"
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
              <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
                Selected Work
              </h2>
              <span className="text-sm text-muted-foreground">
                {projects.length} projetos
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {projects.map((project, index) => (
                <article
                  key={project.id}
                  className={`project-card group rounded-xl overflow-hidden border border-border/40 bg-card cursor-pointer animate-fade-in-up delay-${index + 1}`}
                >
                  <div
                    className="aspect-[4/3] relative overflow-hidden"
                    style={{ background: project.gradient }}
                  >
                    <span className="card-number absolute bottom-3 right-4 text-7xl sm:text-8xl font-extrabold text-black leading-none select-none">
                      {String(project.id).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="font-display font-semibold text-[15px] text-card-foreground">
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
            <div className="grid lg:grid-cols-[1fr,1fr] gap-16 sm:gap-20">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-6">
                  About
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    AI Product Designer com background técnico em engenharia de
                    software. Combino product thinking com implementação real
                    para criar produtos inteligentes.
                  </p>
                  <p>
                    Experiência em apps publicados na App Store e Google Play,
                    SaaS multi-tenant com 250k+ linhas de código, e integração
                    de LLMs em produtos reais via OpenAI, Anthropic e MCP.
                  </p>
                  <p>
                    Anteriormente na Softplan (maior legal tech da América
                    Latina) e atualmente no SAT Bank, onde lidero a integração
                    de IA em fluxos bancários.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-medium tracking-[0.1em] uppercase text-muted-foreground mb-6">
                  Skills & Tecnologias
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 bg-secondary rounded-full text-[13px] font-medium text-secondary-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 sm:py-28 px-6 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-serif italic text-2xl sm:text-3xl text-foreground/80 max-w-lg leading-snug mb-10">
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

          <div className="pt-8 border-t border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <p className="text-[13px] text-muted-foreground">
              © {new Date().getFullYear()} Everton Resende
            </p>
            <p className="text-[13px] text-muted-foreground/60">
              Feito com Vinext + Cloudflare Workers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
