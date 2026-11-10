import Image from "next/image";
import { address, hours, legalName, parentSiteUrl, phoneDisplay, phoneHref, social } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="container-x pb-10 pt-16 sm:pt-24">
      <div className="grid gap-10 border-t border-line pt-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/brand/logo-dark.png" alt="TTR Dental" width={1200} height={150} className="h-7 w-auto" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-body">
            Local SEO and conversion-optimized websites for dental practices across the United States.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-ink">Contact</p>
          <ul className="mt-3 space-y-2 text-body">
            <li>
              <a href={phoneHref} className="hover:text-brand" data-track="click_to_call">
                {phoneDisplay}
              </a>
            </li>
            <li>
              <a href={address.mapsUrl} target="_blank" rel="noopener" className="hover:text-brand">
                {address.full}
              </a>
            </li>
            <li>
              {hours.days}, {hours.time}
            </li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="font-semibold text-ink">TTR</p>
          <ul className="mt-3 space-y-2 text-body">
            <li>
              <a href={parentSiteUrl} target="_blank" rel="noopener" className="hover:text-brand">
                TTR Digital Marketing
              </a>
            </li>
            <li>
              <a href={social.linkedin} target="_blank" rel="noopener" className="hover:text-brand">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={social.youtube} target="_blank" rel="noopener" className="hover:text-brand">
                YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-xs text-meta">
        © {year} {legalName}. All rights reserved.
      </p>
    </footer>
  );
}
