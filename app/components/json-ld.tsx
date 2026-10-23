import type { SiteContent } from "../content/types";
import { CONTACT, PERSON, SITE_URL } from "../content/shared";

/** schema.org Person da home. `<` vira < para o JSON não fechar o <script>. */
export function PersonJsonLd({ site }: { site: SiteContent }) {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSON.name,
    jobTitle: PERSON.jobTitle,
    description: site.home.seo.description,
    url: SITE_URL,
    image: SITE_URL + PERSON.image,
    email: `mailto:${CONTACT.email}`,
    sameAs: [CONTACT.linkedin, CONTACT.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: PERSON.locality,
      addressRegion: PERSON.region,
      addressCountry: PERSON.country,
    },
    knowsAbout: PERSON.knowsAbout,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}
