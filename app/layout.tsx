import type { Metadata, Viewport } from "next";
import { Lexend } from "next/font/google";
import { brandName, siteUrl } from "@/lib/site";
import "./globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
  weight: ["300", "400", "500", "600"],
});

const description =
  "TTR Dental Marketers gets dental practices to page 1 of Google immediately, guaranteed or it's free. Local dental SEO and a free conversion-optimized website that bring in 30+ new patients a month without paying for ads.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | Dental SEO & Marketing Agency`,
    template: `%s | ${brandName}`,
  },
  description,
  applicationName: brandName,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: brandName,
    title: `${brandName} | Page 1 of Google, Immediately. Guaranteed.`,
    description,
    url: "/",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brandName} | Dental SEO & Marketing Agency`,
    description,
    images: ["/og.jpg"],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US" className={lexend.variable}>
      <body>{children}</body>
    </html>
  );
}
