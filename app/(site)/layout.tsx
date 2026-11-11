import "../globals.css";

/* The website (styles and chrome). The Sanity Studio at /cms lives outside this group, so these styles never touch it. */
export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
