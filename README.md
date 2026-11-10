# TTR Dental Marketers website

Interim one-page site for [ttrdentalmarketers.com](https://www.ttrdentalmarketers.com), rebuilt from the
previous GoHighLevel funnel so the domain has a live, fast site while the full site is designed.

Next.js 16 (App Router), Tailwind v4, no CMS. Same stack as `TTR-Website`, so pages and components can move over later.

## Local development

```bash
npm install
npm run dev        # http://localhost:3000
```

Before every push: `npm run build`, `npm run typecheck` and `npm run lint` must pass.

## Deploy

Push to GitHub and import the repo in Vercel; no environment variables are required.
Set `NEXT_PUBLIC_SITE_URL` only if the site is served from a domain other than `https://www.ttrdentalmarketers.com`
(it drives the canonical URL, sitemap, Open Graph and schema).

## Where to change things

| What | File |
| --- | --- |
| Phone, address, hours, Calendly link, testimonial video, social links | `lib/site.ts` |
| All page copy: hero, checklist, story, case studies, steps, FAQ | `lib/content.ts` |
| Section layout and styling | `components/Sections.tsx`, `components/Hero.tsx`, `components/Faq.tsx`, `components/Footer.tsx` |
| Colors, fonts, buttons | `app/globals.css` |
| Page title, description, Open Graph | `app/layout.tsx` |
| Content Security Policy (add domains here before adding tags) | `next.config.ts` |

## How the page works

- Every "Book Free Strategy Call" / "Check Availability" button opens the Calendly event
  `calendly.com/ttrdigital/dental-strategy-call` in a modal (`components/BookingModal.tsx`). Without JavaScript the
  button links straight to Calendly.
- The hero plays the original funnel's background video (compressed to about 2 MB, `public/hero`) with the purple wash.
- "Why TTR" shows the Dr. Medi Adili (Ideal Dental Solutions) testimonial. The YouTube player loads only when the
  thumbnail is clicked, through `youtube-nocookie.com`.
- Fonts are Montserrat (headings) and Lexend (body), self-hosted by `next/font`.
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.png` and `public/og.jpg` are generated from the brand assets.

## Assets

Everything in `public/` was traced from the previous funnel (logos, partner badges, step icons, laptop and phone
mockups, case-study screenshots, team and conference photos, hero video) and optimized for the web.
The YouTube thumbnail is self-hosted in `public/video`.

## Analytics and lead tracking

Not wired yet. Buttons carry `data-track` attributes (`book_call_click`, `click_to_call`) so a GTM/GA4 setup can
hook into them. When tags are added, allow their domains in the CSP in `next.config.ts`.
