import { test } from "node:test";
import assert from "node:assert/strict";
import { caseJsonLd, homeJsonLd } from "./json-ld.ts";
import { getContent } from "../app/content/index.ts";
import { CONTACT } from "../app/content/shared.ts";
import type { CaseSlug, Locale } from "../app/content/types.ts";

const PERSON_ID = "https://evertonresende.com/#person";

/** Nós do @graph pelo @type, depois de passar pelo JSON como na página. */
function nodes(data: object): Record<string, any> {
  const graph: Record<string, unknown>[] = JSON.parse(JSON.stringify(data))["@graph"];
  return Object.fromEntries(graph.map((node) => [node["@type"], node]));
}

for (const locale of ["pt", "en"] as Locale[]) {
  const site = getContent(locale);

  test(`home ${locale}: WebSite, ProfilePage e Person com o mesmo @id`, () => {
    const byType = nodes(homeJsonLd(site));
    assert.deepEqual(Object.keys(byType).sort(), ["Person", "ProfilePage", "WebSite"]);
    assert.equal(byType.Person["@id"], PERSON_ID);
    assert.deepEqual(byType.ProfilePage.mainEntity, { "@id": PERSON_ID });
    assert.equal(byType.ProfilePage.url, locale === "pt" ? "https://evertonresende.com" : "https://evertonresende.com/en");
    assert.equal(byType.Person.alternateName, "Éverton Resende");
    assert.deepEqual(byType.Person.sameAs, [CONTACT.linkedin, CONTACT.github]);
  });

  test(`home ${locale}: serviços do JSON-LD têm o mesmo texto de "O que eu entrego"`, () => {
    const services = nodes(homeJsonLd(site)).Person.makesOffer.map((offer: { itemOffered: unknown }) => offer.itemOffered);
    assert.equal(services.length, site.home.delivery.items.length);
    site.home.delivery.items.forEach((item, i) => {
      assert.equal(services[i].name, item.title.replace(/\.$/, ""));
      assert.equal(services[i].description, item.text);
    });
  });

  test(`cases ${locale}: Article com a pessoa da home como autora`, () => {
    for (const [slug, detail] of Object.entries(site.cases)) {
      const article = caseJsonLd(site, slug as CaseSlug, detail);
      assert.equal(article.author["@id"], PERSON_ID, slug);
      assert.equal(article.url, `https://evertonresende.com${site.basePath}/projects/${slug}`);
      assert.ok(!article.headline.includes("Everton Resende"), article.headline);
      assert.ok(article.headline.length > 0 && article.headline.length <= 110, article.headline);
    }
  });
}
