/** Page copy. Edit text here; layout lives in the components. */

export const hero = {
  eyebrow: "Dental marketing agency",
  headline: "Get your practice to page\u00a01 of Google. Immediately.",
  sub: "Guaranteed, or it’s free. Local SEO and a conversion-optimized website that bring in 30+ new patients a month, without paying for ads.",
  note: "Month-to-month. No hidden fees. Website included.",
  cta: "Book a free strategy call",
};

export const trust = {
  label: "250+ dental practices have trusted TTR for more than 10 years",
  badges: [
    { src: "/badges/google-partner.png", alt: "Google Partner", w: 272, h: 123 },
    { src: "/badges/meta-partner.png", alt: "Meta Marketing Partner", w: 308, h: 126 },
    { src: "/badges/iso-9001.png", alt: "ISO 9001 certified", w: 293, h: 115 },
    { src: "/badges/bbb-accredited.png", alt: "BBB Accredited Business", w: 333, h: 126 },
    { src: "/badges/gsa-contract-holder.png", alt: "GSA Contract Holder", w: 518, h: 126 },
  ],
};

export const stats = [
  { value: "10+", label: "Years in dental marketing" },
  { value: "250+", label: "Dental practices served" },
  { value: "30+", label: "Specialists on the team" },
];

export const offer = {
  heading: "Everything your practice needs to rank, built in.",
  sub: "One fixed monthly rate covers the website, the SEO and the tracking. No ad spend required.",
  cards: [
    {
      title: "A free, conversion-optimized website",
      body: "Original photos instead of stock, clean URL structure, fast pages and clear calls to action. Built to rank and to book.",
      visual: "laptop" as const,
    },
    {
      title: "Page 1 for the searches that matter",
      body: "“Dentist near me”, “dentist in your city”, “cosmetic dentist”, “root canal”. Rankings that bring qualified patients without paying per click.",
      visual: "phone" as const,
    },
    {
      title: "Every lead tracked, every patient counted",
      body: "Call and form tracking, a CRM that follows up automatically, and a monthly report that shows your return.",
      visual: "leads" as const,
    },
  ],
};

export type CaseStudy = { name: string; summary: string; stats: { value: string; label: string }[] };

export const results = {
  heading: "Real practices. Real numbers.",
  cases: [
    {
      name: "Ideal Dental Solutions",
      summary: "From page 3 to the top 3 on Google in four months.",
      stats: [
        { value: "320%", label: "More new patients" },
        { value: "850%", label: "Return on investment" },
        { value: "$495K", label: "Added production" },
      ],
    },
    {
      name: "Charlotte Dentistry",
      summary: "From page 3 to the top 3 in four months through link building, citations and a tailored content plan.",
      stats: [
        { value: "300%", label: "More new patients" },
        { value: "643%", label: "Return on investment" },
        { value: "$325K", label: "Added production" },
      ],
    },
  ] satisfies CaseStudy[],
};

export const story = {
  eyebrow: "Why TTR",
  heading: "Built for dentists who were tired of paying for clicks.",
  body: [
    "TTR Dental Marketers started because dental practices were paying SEO companies high fees for minimal results. For more than 10 years we have focused on one thing: SEO that drives new patient revenue, not just traffic.",
    "Today a team of 30+ specialists works with 250+ practices across the United States.",
  ],
  videoCaption: "Dr. Medi Adili, Ideal Dental Solutions, on why he trusts TTR.",
};

export const process = {
  heading: "How it works",
  steps: [
    {
      title: "Discovery call",
      body: "A 15-minute call about your practice, your current marketing and the goals you want to hit.",
    },
    {
      title: "Free audit report",
      body: "A plain-English report on where you rank, what is holding you back and the plan to reach page 1.",
    },
    {
      title: "New patients",
      body: "We build, rank and track. You see the calls, the bookings and the return in a monthly report.",
    },
  ],
};

export const cta = {
  heading: "Book your free 15-minute strategy call.",
  sub: "See where your practice ranks today and what it takes to reach page 1.",
  primary: "Book a free strategy call",
  image: { src: "/team/pca-london.jpg", alt: "The TTR Dental team on stage at a dental conference", w: 1200, h: 900 },
};

export const faqs = [
  {
    q: "How much will it cost?",
    a: "Pricing is a low fixed monthly rate tailored to your goals, your market and how competitive your local keywords are. Contracts are month-to-month with no hidden fees, and your SEO-structured, conversion-optimized website is included. You get an exact number on your free strategy call.",
  },
  {
    q: "What will I see in the free audit?",
    a: "A plain-English report on where your practice ranks today for the searches that matter (for example “dentist near me” and “dentist in your city”), how you compare with the practices above you, what is holding your website and Google Business Profile back, and the step-by-step plan we would follow to reach page 1.",
  },
  {
    q: "Are you in Miami, and can we meet in person?",
    a: "Yes. Our team is based in Miami, Florida, and we are glad to meet local practices in person. We work with dental practices across the United States, so most strategy calls and monthly reviews happen over video.",
  },
  {
    q: "How does tracking and reporting work?",
    a: "We set up call tracking and form tracking on your website, connect them to a CRM, and send you a monthly report showing your keyword rankings, the calls and form submissions that came in, and the return on your investment. You can see exactly where every new patient came from.",
  },
  {
    q: "What services do you offer?",
    a: "Local SEO for dental practices, website design and conversion optimization, Google Business Profile optimization, content, citation and link building, and CRM automation for follow-ups. If you want paid ads on top of SEO, we manage Google Ads and Meta Ads as well.",
  },
  {
    q: "Why does my practice need professional marketing?",
    a: "Most new patients start with a Google search and rarely look past the first page. Professional SEO puts your practice in front of those patients consistently, without paying for every click, and a conversion-optimized website turns that traffic into booked appointments.",
  },
];
