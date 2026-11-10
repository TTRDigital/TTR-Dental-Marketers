/** Page copy. Edit text here; layout lives in the components. */

export const hero = {
  eyebrow: "DENTISTS: Not on Page 1 of Google?",
  headline: "We Help Dental Practices Reach Page 1 in 6 Months — Guaranteed or It’s Free.",
  cta: "Check Availability",
};

export const stopAds = {
  heading: ["STOP", " Paying for Ads"] as const,
  points: [
    "Get 30+ New Patients Monthly, No Ads!",
    "Rank Page 1 for Local Dental Keywords",
    "Month-to-Month Contracts, No Commitment",
    "Get to the top of Google in 6 months",
    "Get a Free Conversion-Optimized Website",
    "Low fixed monthly rate - no hidden fees",
  ],
};

export const teamPhotos = [
  { src: "/team/team-green-wall.jpg", alt: "The TTR Dental team in front of the TTR Dental sign", w: 800, h: 517 },
  { src: "/team/stage-panel.jpg", alt: "TTR Dental panel on stage at a dental marketing conference", w: 1080, h: 1080 },
  { src: "/team/team-booth-pink.jpg", alt: "TTR Dental team at the All-in-One Dental Marketing Agency booth", w: 1179, h: 1120 },
  { src: "/team/pca-london.jpg", alt: "TTR Dental speakers at a dental conference in London", w: 1200, h: 900 },
  { src: "/team/team-booth.jpg", alt: "TTR Dental team at a conference booth", w: 768, h: 1024 },
  { src: "/team/team-blue-booth.jpg", alt: "TTR Dental team at the agency booth", w: 958, h: 1331 },
  { src: "/team/team-logo-sign.jpg", alt: "TTR team holding the TTR logo at a conference", w: 800, h: 800 },
  { src: "/team/team-blue-wall.jpg", alt: "TTR Dental team at the All-in-One Dental Marketing Agency stand", w: 800, h: 800 },
  { src: "/team/team-group.jpg", alt: "TTR Dental team members at a dental conference", w: 1168, h: 1536 },
  { src: "/team/team-two-stage.jpg", alt: "TTR Digital speakers on stage", w: 800, h: 800 },
];

export const whyTtr = {
  heading: "WHY TTR",
  story:
    "After noticing that the dental industry was often underserved by SEO companies that charged high fees but delivered minimal results, TTR Dental Marketers set out on a mission to provide SEO services that genuinely drive new patient revenue—not just clicks. For over 10 years, TTR Dental Marketers has collaborated with over 250 dental practices and has expanded to a team of more than 30 dedicated employees. Let’s grow your dental business together!",
  badges: [
    { src: "/badges/meta-partner.png", alt: "Meta Marketing Partner", w: 308, h: 126 },
    { src: "/badges/iso-9001.png", alt: "ISO 9001 certified", w: 293, h: 115 },
    { src: "/badges/google-partner.png", alt: "Google Partner", w: 272, h: 123 },
    { src: "/badges/bbb-accredited.png", alt: "BBB Accredited Business", w: 333, h: 126 },
    { src: "/badges/gsa-contract-holder.png", alt: "GSA Contract Holder", w: 518, h: 126 },
  ],
};

export type CaseStudy = {
  name: string;
  summary: string;
  stats: { value: string; label: string }[];
  image: { src: string; alt: string; w: number; h: number };
};

export const caseStudies: CaseStudy[] = [
  {
    name: "Ideal Dental Solutions",
    summary:
      "We helped them go from page 3 to the top 3 in just four months, leading to a 320% increase in new patients and generating $495,000 in additional production with an 850% ROI.",
    stats: [
      { value: "320%", label: "New patient increase" },
      { value: "850%", label: "Return on investment" },
      { value: "$495,000", label: "Production" },
    ],
    image: { src: "/mockups/ideal-phone.webp", alt: "Ideal Dental Solutions website on a phone", w: 395, h: 805 },
  },
  {
    name: "Charlotte Dentistry",
    summary:
      "TTR collaborated with Charlotte Dentistry, a dental practice based in Charlotte, to enhance their online presence. Over a span of four months, they successfully advanced from the third page to the top three search results on Google. This notable improvement, which led to a significant increase in new patients, was accomplished through strategic link building, citation building, and the implementation of a tailored content strategy.",
    stats: [
      { value: "300%", label: "Boost in new patients" },
      { value: "643%", label: "Return on investment" },
      { value: "$325,000", label: "Production" },
    ],
    image: { src: "/results/charlotte-maps.webp", alt: "Charlotte Dentistry ranking in the Google Maps results", w: 868, h: 1607 },
  },
];

export const threeSteps = {
  heading: [
    { text: "Three Steps to " },
    { text: "Attract 30+ Patients Per Month", accent: true },
    { text: " to Your Dental Practice " },
    { text: "Without Paying", accent: true },
    { text: " for Any Ads" },
  ],
  steps: [
    {
      label: "Step 1",
      title: [{ text: "Get a Free SEO-Structured", accent: true }, { text: ", Conversion-Optimized Website" }],
      body: "Replace stock photos with original images, fix bad URL structures, enhance page speed, and improve call-to-action elements to increase conversions.",
      visual: "laptop" as const,
    },
    {
      label: "Step 2",
      title: [{ text: "Target " }, { text: "Major Keywords:", accent: true }],
      body: "Focus on important search terms such as 'Dentist Near Me', 'Dentist in [City Name]', 'Cosmetic Dentist', 'Root Canal at Dental...', etc. By achieving high rankings for these keywords, you can attract qualified traffic without the need for paid ads.",
      visual: "phone" as const,
    },
    {
      label: "Step 3",
      title: [{ text: "Gain 30+ New Patients Each Month at " }, { text: "No Cost to You in Google Ads:", accent: true }],
      body: "We will also set up lead tracking to measure how many leads are coming in, how many calls or form submissions are made, and even create a CRM to automate workflows such as follow-ups to convert more leads into patients. This allows you to see your return on investment with detailed monthly reports.",
      visual: "leads" as const,
    },
  ],
};

export const process = {
  heading: [
    { text: "Transform", accent: true },
    { text: " Your Practice in " },
    { text: "Three", accent: true },
    { text: " Simple Steps" },
  ],
  steps: [
    {
      icon: "/steps/step-1.png",
      title: "Discovery Call",
      body: "Start with a 15-minute call to discuss your dental practice's current marketing strategy and goals.",
    },
    {
      icon: "/steps/step-2.png",
      title: "Free Customized Audit Report",
      body: "After our initial consultation, you'll receive a tailored strategy report at no cost, focusing on aligning with your practice’s specific goals and optimizing your marketing efforts.",
    },
    {
      icon: "/steps/step-3.png",
      title: "New Patients",
      body: "Implement our recommendations and start attracting new patients from Google searches efficiently.",
    },
  ],
};

export const ctaBand = {
  heading: "Schedule Your 15-Min Strategy Call",
  points: ["Boost visibility and patient numbers.", "Elevate your online presence.", "Consistently fill your schedule, no ads needed."],
  cta: "Book Free Strategy Call",
  image: { src: "/team/pca-london.jpg", alt: "TTR Dental team on stage at a dental conference", w: 1200, h: 900 },
};

export const faqs = [
  {
    q: "How much will it cost?",
    a: "Pricing is a low fixed monthly rate tailored to your goals, your market and how competitive your local keywords are. Contracts are month-to-month with no hidden fees, and your SEO-structured, conversion-optimized website is included. You get an exact number on your free strategy call.",
  },
  {
    q: "What will I see in your free strategy marketing audit?",
    a: "A plain-English report on where your practice ranks today for the searches that matter (for example “dentist near me” and “dentist in your city”), how you compare with the practices above you, what is holding your website and Google Business Profile back, and the step-by-step plan we would follow to reach page 1.",
  },
  {
    q: "Are you local in Miami and can we meet in person?",
    a: "Yes. Our team is based in Miami, Florida, and we are glad to meet local practices in person. We work with dental practices across the United States, so most strategy calls and monthly reviews happen over video.",
  },
  {
    q: "How does tracking and reporting work?",
    a: "We set up call tracking and form tracking on your website, connect them to a CRM, and send you a monthly report showing your keyword rankings, the calls and form submissions that came in, and the return on your investment. You can see exactly where every new patient came from.",
  },
  {
    q: "What marketing services do you offer?",
    a: "Local SEO for dental practices, website design and conversion optimization, Google Business Profile optimization, content, citation and link building, and CRM automation for follow-ups. If you want paid ads on top of SEO, we manage Google Ads and Meta Ads as well.",
  },
  {
    q: "Why do I need professional digital marketing?",
    a: "Most new patients start with a Google search and rarely look past the first page. Professional SEO puts your practice in front of those patients consistently, without paying for every click, and a conversion-optimized website turns that traffic into booked appointments.",
  },
];
