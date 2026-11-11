/**
 * Loads the home page's built-in copy and its badge and team photos into Sanity, so the CMS starts full instead of empty.
 *
 *   npm run seed                 # create the document if it does not exist yet (add-missing)
 *   npm run seed -- --force      # overwrite it with the built-in copy
 *   npm run seed -- --dry-run    # build the document without uploading or writing
 *
 * Writes to the project in sanity/env.ts (NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET). Needs SANITY_WRITE_TOKEN (Editor token).
 * Without --force, anything an editor already changed is kept.
 */
import { createReadStream, existsSync } from "node:fs";
import { join } from "node:path";
import { createClient } from "@sanity/client";
import { cta, faqs, hero, offer, process as steps, results, stats, story, trust } from "../lib/content-defaults.ts";

const root = new URL("..", import.meta.url).pathname;
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const token = process.env.SANITY_WRITE_TOKEN;
const force = process.argv.includes("--force");
const dryRun = process.argv.includes("--dry-run");

if (!dryRun && (!projectId || !token)) {
  console.error(!projectId ? "Set NEXT_PUBLIC_SANITY_PROJECT_ID." : "Set SANITY_WRITE_TOKEN (Editor token from sanity.io/manage > API > Tokens).");
  process.exit(1);
}
const client = createClient({ projectId: projectId || "dry-run", dataset, token, apiVersion: "2025-02-19", useCdn: false });

let keyN = 0;
const key = () => `k${(keyN++).toString(36)}`;
const uploaded = new Map<string, string>();

async function asset(src: string) {
  if (uploaded.has(src)) return uploaded.get(src)!;
  const file = join(root, "public", src);
  if (!existsSync(file)) throw new Error(`Missing file: ${file}`);
  if (dryRun) { uploaded.set(src, `image-dry-${uploaded.size}`); return uploaded.get(src)!; }
  const a = await client.assets.upload("image", createReadStream(file), { filename: src.split("/").pop() });
  uploaded.set(src, a._id);
  return a._id;
}
const image = async (src: string, alt?: string) => ({ _type: "image", asset: { _type: "reference", _ref: await asset(src) }, ...(alt !== undefined ? { alt } : {}) });
const keyed = <T extends object>(xs: readonly T[]) => xs.map((x) => ({ _key: key(), ...x }));

const doc = {
  _id: "landingPage",
  _type: "landingPage",
  hero: { ...hero },
  trust: { label: trust.label, badges: await Promise.all(trust.badges.map(async (b) => ({ _key: key(), image: await image(b.src), alt: b.alt }))) },
  stats: keyed(stats),
  results: { heading: results.heading, cases: results.cases.map((c) => ({ _key: key(), name: c.name, summary: c.summary, stats: keyed(c.stats) })) },
  offer: { heading: offer.heading, sub: offer.sub, cards: keyed(offer.cards.map(({ title, body }) => ({ title, body }))) },
  story: { eyebrow: story.eyebrow, heading: story.heading, body: [...story.body], videoCaption: story.videoCaption },
  process: { heading: steps.heading, steps: keyed(steps.steps) },
  cta: { heading: cta.heading, sub: cta.sub, primary: cta.primary, image: await image(cta.image.src, cta.image.alt) },
  faqs: keyed(faqs),
};

if (dryRun) {
  console.log(`Dry run: landingPage built (${JSON.stringify(doc).length} bytes, ${uploaded.size} images). Nothing written.`);
} else if (force) {
  await client.createOrReplace(doc);
  console.log("landingPage written (overwritten).");
} else {
  await client.createIfNotExists(doc);
  console.log("landingPage created if it did not exist.");
}
