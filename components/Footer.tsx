import Image from "next/image";
import { address, hours, legalName, parentSiteUrl, phoneDisplay, phoneHref, social } from "@/lib/site";
import { ClockIcon, PhoneIcon, PinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-brand text-white">
      <div className="container-x py-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div className="flex gap-4">
            <ClockIcon className="size-11 shrink-0 opacity-90" />
            <div>
              <p className="font-heading font-bold">Office Hours</p>
              <p className="mt-1 text-white/85">{hours.time}</p>
              <p className="text-white/85">{hours.days}</p>
            </div>
          </div>
          <div className="flex gap-4">
            <PinIcon className="size-11 shrink-0 opacity-90" />
            <div>
              <p className="font-heading font-bold">Address</p>
              <a href={address.mapsUrl} target="_blank" rel="noopener" className="mt-1 block text-white/85 hover:text-white hover:underline">
                {address.full}
              </a>
            </div>
          </div>
          <div className="flex gap-4">
            <PhoneIcon className="size-11 shrink-0 opacity-90" />
            <div>
              <p className="font-heading font-bold">Phone</p>
              <a href={phoneHref} className="mt-1 block text-white/85 hover:text-white hover:underline" data-track="click_to_call">
                {phoneDisplay}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/25 pt-8">
          <Image src="/brand/logo-white.png" alt="TTR Dental" width={1200} height={150} className="h-8 w-auto" />
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/80 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {legalName} – All Rights Reserved.
            </p>
            <ul className="flex flex-wrap gap-x-5 gap-y-1">
              <li>
                <a href={parentSiteUrl} className="hover:text-white hover:underline" target="_blank" rel="noopener">
                  TTR Digital Marketing
                </a>
              </li>
              <li>
                <a href={social.linkedin} className="hover:text-white hover:underline" target="_blank" rel="noopener">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={social.youtube} className="hover:text-white hover:underline" target="_blank" rel="noopener">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
