import { ScrollReveal } from "./scroll-reveal";

export function Footer() {
  return (
    <footer id="contact" className="py-32 sm:py-48 px-6 sm:px-8 bg-[#141414] text-[#fafafa]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal>
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-light tracking-[-0.03em] leading-[0.92] mb-8">
            Vamos construir
            <br />
            algo excelente.
          </h2>
          <p className="text-lg text-[#fafafa]/40 max-w-xl mb-20">
            Sempre aberto a discutir novos projetos, produtos IA, ou oportunidades de design.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pt-16 border-t border-[#fafafa]/10">
            <a
              href="https://wa.me/5537999133556"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">WhatsApp</span>
              <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">+55 37 99913-3556</span>
            </a>
            <a
              href="mailto:everton.augustor@gmail.com"
              className="group flex flex-col gap-3"
            >
              <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">Email</span>
              <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">everton.augustor@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/evertonresende"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">LinkedIn</span>
              <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">/in/evertonresende</span>
            </a>
            <a
              href="https://github.com/evertonresende"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3"
            >
              <span className="swiss-label text-[#fafafa]/25 group-hover:text-[#fafafa]/60 transition-colors duration-200">GitHub</span>
              <span className="text-[15px] font-medium text-[#fafafa]/70 group-hover:text-[#fafafa] transition-colors duration-200">evertonresende</span>
            </a>
          </div>
        </ScrollReveal>

        <div className="mt-32 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[#fafafa]/10">
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#fafafa]/20">
            &copy; {new Date().getFullYear()} Everton Resende
          </p>
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#fafafa]/20">
            Design by Everton Resende
          </p>
        </div>
      </div>
    </footer>
  );
}
