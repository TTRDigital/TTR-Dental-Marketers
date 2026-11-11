"use client";

/** Sanity Studio, embedded at /cms. One page document (landingPage) that cannot be duplicated or deleted. */
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { dataset, projectId } from "./sanity/env";
import { schemaTypes, singletonTypes } from "./sanity/schemaTypes";

export default defineConfig({
  name: "ttr-dental-marketers",
  title: "TTR Dental Marketers",
  basePath: "/cms",
  projectId: projectId || "missing",
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("TTR Dental Marketers")
          .items([S.listItem().title("Home page").id("landingPage").child(S.document().schemaType("landingPage").documentId("landingPage").title("Home page"))]),
    }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType) ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action)) : input,
  },
});
