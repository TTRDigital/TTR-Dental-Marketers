import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

// Third parties on this site: the YouTube testimonial (privacy-enhanced
// embed) and the GoHighLevel booking calendar. Add domains here if you add tags.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""} https://link.msgsndr.com`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://cdn.sanity.io",
  "media-src 'self'",
  "font-src 'self' data:",
  "connect-src 'self'",
  "frame-src 'self' https://www.youtube-nocookie.com https://api.leadconnectorhq.com https://link.msgsndr.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    // Pictures edited in Sanity.
    remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }],
  },
  async headers() {
    return [
      // The Sanity Studio (/cms) talks to many Sanity hosts and is protected by Sanity's own sign-in, so it gets the other headers but not this CSP.
      { source: "/((?!cms).*)", headers: securityHeaders },
      { source: "/cms/:path*", headers: securityHeaders.filter((h) => h.key !== "Content-Security-Policy") },
      { source: "/cms", headers: securityHeaders.filter((h) => h.key !== "Content-Security-Policy") },
    ];
  },
};

export default nextConfig;
