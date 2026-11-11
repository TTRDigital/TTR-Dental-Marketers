import "server-only";
import { cache } from "react";
import { sanityFetch } from "@/lib/sanity/fetch";
import { merge } from "@/lib/merge";
import * as defaults from "@/lib/content-defaults";

/*
 * Page copy. Every section reads through getContent(): Sanity values win when they are filled in;
 * anything missing falls back to lib/content-defaults.ts (today's copy), so an empty or unreachable CMS
 * shows exactly the page as it is now. Layout stays in the components.
 * Not in Sanity yet (phase 2): contact details, hours, the booking link, the video and the social links
 * in lib/site.ts, the product pictures in the offer cards and the hero video and poster.
 */
export type Content = {
  hero: typeof defaults.hero;
  trust: typeof defaults.trust;
  stats: typeof defaults.stats;
  offer: typeof defaults.offer;
  results: typeof defaults.results;
  story: typeof defaults.story;
  process: typeof defaults.process;
  cta: typeof defaults.cta;
  faqs: typeof defaults.faqs;
};

const IMG = `{ "src": asset->url, "alt": coalesce(alt, ""), "w": asset->metadata.dimensions.width, "h": asset->metadata.dimensions.height }`;

const QUERY = `*[_id == "landingPage"][0]{
  hero, stats, story, process, faqs, results,
  offer{ heading, sub, cards[]{ title, body } },
  trust{ label, badges[]{ "src": image.asset->url, "alt": coalesce(alt, ""), "w": image.asset->metadata.dimensions.width, "h": image.asset->metadata.dimensions.height } },
  cta{ heading, sub, primary, "image": image${IMG} }
}`;

type Loose = Record<string, unknown>;

/**
 * The offer cards keep their picture kind (laptop, phone, leads) from the built-in copy: it picks a component, not text.
 * Sanity edits the words only, card by card.
 */
function offerCards(cms: unknown): unknown {
  const o = (cms ?? {}) as Loose;
  if (!Array.isArray(o.cards)) return cms;
  const words = (c: Loose) => Object.fromEntries(Object.entries(c ?? {}).filter(([, v]) => typeof v === "string" && v.trim()));
  return { ...o, cards: o.cards.map((c: Loose, i: number) => ({ ...defaults.offer.cards[i], ...words(c) })) };
}

export const getContent = cache(async (): Promise<Content> => {
  const doc = (await sanityFetch<Loose>(QUERY, {}, ["landingPage"])) ?? {};
  return {
    hero: merge(defaults.hero, doc.hero),
    trust: merge(defaults.trust, doc.trust),
    stats: merge(defaults.stats, doc.stats),
    offer: merge(defaults.offer, offerCards(doc.offer)),
    results: merge(defaults.results, doc.results),
    story: merge(defaults.story, doc.story),
    process: merge(defaults.process, doc.process),
    cta: merge(defaults.cta, doc.cta),
    faqs: merge(defaults.faqs, doc.faqs),
  };
});
