import { defineArrayMember, defineField, defineType } from "sanity";

/*
 * The home page, one document (id "landingPage"). Field names match lib/content-defaults.ts, which holds today's copy
 * and is used wherever a field is empty. The offer cards' pictures and the hero video are not editable yet.
 */
const text = (name: string, title: string, rows = 0) => defineField({ name, title, type: rows ? "text" : "string", ...(rows ? { rows } : {}) });
const list = (name: string, title: string, fields: ReturnType<typeof defineField>[]) =>
  defineField({ name, title, type: "array", of: [defineArrayMember({ type: "object", fields, preview: { select: { title: fields[0].name } } })] });

export const landingPage = defineType({
  name: "landingPage",
  title: "Home page",
  type: "document",
  groups: [
    { name: "hero", title: "Top", default: true },
    { name: "proof", title: "Proof" },
    { name: "offer", title: "What you get" },
    { name: "story", title: "Story and steps" },
    { name: "cta", title: "Call to action and FAQ" },
  ],
  fields: [
    defineField({ name: "hero", type: "object", group: "hero", fields: [text("eyebrow", "Small line above"), text("headline", "Headline"), text("sub", "Sub-headline", 3), text("note", "Note under the button"), text("cta", "Button")] }),
    defineField({
      name: "trust",
      title: "Trust row",
      type: "object",
      group: "proof",
      fields: [
        text("label", "Label"),
        defineField({
          name: "badges",
          type: "array",
          of: [defineArrayMember({ type: "object", fields: [defineField({ name: "image", type: "image" }), text("alt", "Alt text")], preview: { select: { title: "alt", media: "image" } } })],
        }),
      ],
    }),
    list("stats", "Numbers", [text("value", "Number"), text("label", "Label")]),
    defineField({
      name: "results",
      title: "Case studies",
      type: "object",
      group: "proof",
      fields: [
        text("heading", "Heading"),
        list("cases", "Case studies", [text("name", "Practice"), text("summary", "Summary", 3), list("stats", "Numbers", [text("value", "Number"), text("label", "Label")])]),
      ],
    }),
    defineField({ name: "offer", title: "What you get", type: "object", group: "offer", fields: [text("heading", "Heading"), text("sub", "Sub-heading", 2), list("cards", "Cards (the picture of each card stays as it is)", [text("title", "Title"), text("body", "Text", 4)])] }),
    defineField({
      name: "story",
      title: "Why TTR",
      type: "object",
      group: "story",
      fields: [text("eyebrow", "Small line above"), text("heading", "Heading"), defineField({ name: "body", title: "Paragraphs", type: "array", of: [defineArrayMember({ type: "text", rows: 4 })] }), text("videoCaption", "Caption under the video")],
    }),
    defineField({ name: "process", title: "How it works", type: "object", group: "story", fields: [text("heading", "Heading"), list("steps", "Steps", [text("title", "Title"), text("body", "Text", 3)])] }),
    defineField({ name: "cta", title: "Book a call block", type: "object", group: "cta", fields: [text("heading", "Heading"), text("sub", "Sub-heading", 2), text("primary", "Button"), defineField({ name: "image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", type: "string", title: "Alt text" })] })] }),
    list("faqs", "Frequently asked questions", [text("q", "Question"), text("a", "Answer", 6)]),
  ],
  preview: { prepare: () => ({ title: "Home page" }) },
});

export const schemaTypes = [landingPage];

/** Documents with exactly one copy (no create/duplicate/delete). */
export const singletonTypes = new Set(["landingPage"]);
