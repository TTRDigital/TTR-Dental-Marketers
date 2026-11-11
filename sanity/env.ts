/**
 * TTR Dental Marketers Sanity project. The project ID is public (it is in every image URL).
 * Empty until the project is created (Rory, TTR-1567): the site then shows its built-in copy.
 * Set NEXT_PUBLIC_SANITY_PROJECT_ID in Vercel, or write the ID here once it exists.
 */
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2025-02-19";
