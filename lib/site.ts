/**
 * Everything a non-developer might need to change lives here:
 * contact details, the booking link, the testimonial video and the
 * case-study numbers. Copy for each section is in lib/content.ts.
 */

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.ttrdentalmarketers.com").replace(/\/$/, "");

export const brandName = "TTR Dental Marketers";
export const legalName = "TTR Digital Marketing LLC";
export const parentSiteUrl = "https://www.ttrdigitalmarketing.com";

/** Dental tracking line shown in the header and on every call-to-action. */
export const phoneDisplay = "(786) 953-1712";
export const phoneHref = "tel:+17869531712";

export const address = {
  street: "1000 Brickell Ave Ste 715",
  city: "Miami",
  region: "FL",
  postal: "33131",
  full: "1000 Brickell Ave Ste 715, Miami, FL 33131",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=1000+Brickell+Ave+Ste+715+Miami+FL+33131",
};

export const hours = { days: "Monday - Friday", time: "9AM to 5PM EST" };

/** GoHighLevel booking calendar used by every "Book a free strategy call" button. */
export const bookingUrl = "https://api.leadconnectorhq.com/widget/booking/abk1xtAopfTvDrKqU9Az";
export const bookingEmbedUrl = bookingUrl;
export const bookingEmbedScript = "https://link.msgsndr.com/js/form_embed.js";

/** Dr. Medi Adili (Ideal Dental Solutions) testimonial on the TTR YouTube channel. */
export const testimonialVideo = {
  youtubeId: "ZH0ZslLyzdg",
  title: "Why Dr. Medi Adili Trusts TTR Dental Marketers | Ideal Dental Solutions",
  thumbnail: "/video/dr-adili-thumb.jpg",
};

export const social = {
  linkedin: "https://www.linkedin.com/company/ttr-digital-marketing",
  youtube: "https://www.youtube.com/@ttrdigitalmarketing4827",
};
