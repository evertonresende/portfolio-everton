import type { SiteContent } from "../../content/types";
import { homeAnchor } from "../../content";
import { ButtonLink } from "../ui/button-link";
import { NoOrphan } from "../ui/no-orphan";
import { Orbits } from "../ui/orbits";
import { SpecList } from "../ui/spec-list";
import { Dot } from "../ui/status-mark";

/** Hero: status, H1 (cargo + tagline), linha de apoio, CTAs, foto e ficha técnica. */
export function Hero({ site }: { site: SiteContent }) {
  const { hero } = site.home;
  return (
    <section aria-labelledby="hero-title" className="relative isolate">
      <Orbits scene="hero" />
      <div className="flex flex-col gap-6 px-gutter pt-section pb-cell md:gap-8">
        <p className="label-mono m-0 flex items-start gap-2.5">
          <span className="flex h-4 items-center">
            <Dot />
          </span>
          <span className="min-w-0 flex-1">{hero.status}</span>
        </p>
        {/* "AI Engineer" grande, com "Forward Deployed" menor em cima e a tagline menor embaixo: o cargo inteiro no tamanho grande quebrava em 3 a 4 linhas.
            O " " entre qualificador e cargo e o "·" seguem no texto (flex ignora espaço solto), então o H1 lê
            "Forward Deployed AI Engineer · agentes de IA em produção.", igual ao LinkedIn.
            O cargo é inglês nos dois idiomas (PERSON.jobTitle), por isso o lang="en" fixo nele. O serif-i fica no H1 todo para "AI agents" não virar "Al agents".
            md:gap-10 dá folga ao rabo do "g" de "Engineer" sobre a tagline no desktop. */}
        <h1 id="hero-title" className="serif-i m-0 flex flex-col gap-6 md:gap-10">
          <span lang="en" className="flex flex-col gap-3 md:gap-5">
            <span className="text-display-2">{hero.qualifier}</span>{" "}
            <span className="text-display-1">{hero.title}</span>
          </span>
          <span className="sr-only"> · </span>
          <span className="text-display-2 text-muted">{hero.tagline}</span>
        </h1>
      </div>

      <div data-reveal className="auto-grid-lg border-t border-grid">
        <div className="flex flex-col gap-6 px-gutter py-cell">
          <p className="text-lead m-0 max-w-lg">{hero.lead}</p>
          <p className="text-sub m-0 max-w-lg text-muted">
            <NoOrphan text={hero.sub} />
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4">
            <ButtonLink href={hero.primary.href} external={hero.primary.external} variant="primary" className="max-sm:justify-between">
              {hero.primary.label}
            </ButtonLink>
            <ButtonLink href={homeAnchor(site.basePath, hero.secondary.href)} variant="secondary" icon="down" className="max-sm:justify-between">
              {hero.secondary.label}
            </ButtonLink>
            <ButtonLink href={hero.cv.href} external={hero.cv.external} variant="text" icon="download" className="self-start">
              {hero.cv.label}
            </ButtonLink>
          </div>
        </div>

        <div className="flex flex-wrap content-start">
          <div className="basis-full px-gutter pt-cell sm:min-w-40 sm:shrink-0 sm:grow-0 sm:basis-1/3 sm:pb-cell">
            <picture className="block aspect-square bg-grid">
              <source
                type="image/avif"
                srcSet="/images/everton-v2-240.avif 240w, /images/everton-v2-480.avif 480w, /images/everton-v2-587.avif 587w, /images/everton-v2-828.avif 828w"
                sizes="(min-width: 640px) 200px, 100vw"
              />
              <source
                type="image/webp"
                srcSet="/images/everton-v2-240.webp 240w, /images/everton-v2-480.webp 480w, /images/everton-v2-587.webp 587w, /images/everton-v2-828.webp 828w"
                sizes="(min-width: 640px) 200px, 100vw"
              />
              <img
                src="/images/everton-v2-480.webp"
                alt={hero.photoAlt}
                width={240}
                height={240}
                decoding="async"
                className="block aspect-square h-auto w-full object-cover object-top grayscale"
              />
            </picture>
          </div>
          <div className="min-w-65 flex-1 py-cell">
            <p id="ficha-title" className="label-mono m-0 px-gutter pb-3">
              {hero.factsTitle}
            </p>
            <SpecList rows={hero.facts} layout="compact" labelledBy="ficha-title" />
          </div>
        </div>
      </div>
    </section>
  );
}
