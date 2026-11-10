import { address, brandName, legalName, parentSiteUrl, siteUrl, social, testimonialVideo } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${siteUrl}/#organization`,
        name: brandName,
        legalName,
        url: siteUrl,
        logo: `${siteUrl}/brand/logo-dark.png`,
        image: `${siteUrl}/og.jpg`,
        telephone: "+1-786-953-1712",
        description:
          "Dental marketing agency getting dental practices to page 1 of Google immediately with local SEO and conversion-optimized websites.",
        address: {
          "@type": "PostalAddress",
          streetAddress: address.street,
          addressLocality: address.city,
          addressRegion: address.region,
          postalCode: address.postal,
          addressCountry: "US",
        },
        areaServed: "US",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00",
        },
        parentOrganization: { "@type": "Organization", name: "TTR Digital Marketing", url: parentSiteUrl },
        sameAs: [social.linkedin, social.youtube, parentSiteUrl],
        knowsAbout: ["Dental SEO", "Local SEO", "Dental website design", "Google Business Profile optimization"],
      },
      {
        "@type": "VideoObject",
        name: testimonialVideo.title,
        description: "Dr. Medi Adili of Ideal Dental Solutions explains why he trusts TTR Dental Marketers.",
        thumbnailUrl: `${siteUrl}${testimonialVideo.thumbnail}`,
        embedUrl: `https://www.youtube-nocookie.com/embed/${testimonialVideo.youtubeId}`,
        uploadDate: "2024-05-01",
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
