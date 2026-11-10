"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { PhoneIcon } from "./icons";

/**
 * Transparent over the hero (white logo, outlined pills), turning into a
 * white bar with the dark logo once the visitor scrolls.
 */
export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  const isSolid = solid || scrolled;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        isSolid ? "bg-white/95 shadow-[0_6px_24px_-18px_rgb(0_0_0/0.5)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-header items-center justify-between gap-3">
        <Link href="/" className="shrink-0" aria-label="TTR Dental Marketers home">
          <Image
            src={isSolid ? "/brand/logo-dark.png" : "/brand/logo-white.png"}
            alt="TTR Dental"
            width={1200}
            height={150}
            priority
            className="hidden h-7 w-auto sm:block md:h-8"
          />
          <Image
            src={isSolid ? "/brand/mark-dark.png" : "/brand/mark-white.png"}
            alt="TTR Dental"
            width={300}
            height={203}
            priority
            className="h-7 w-auto sm:hidden"
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-3" aria-label="Contact">
          <a
            href={phoneHref}
            className={`btn ${isSolid ? "btn-outline-brand" : "btn-outline-white"} size-11 min-h-0 p-0 sm:size-auto sm:min-h-12 sm:px-6 sm:py-3`}
            data-track="click_to_call"
          >
            <PhoneIcon className="size-[18px] shrink-0 sm:size-4" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sr-only sm:hidden">Call {phoneDisplay}</span>
          </a>
          <BookButton variant={isSolid ? "primary" : "outline-white"} className="min-h-11 px-3.5 text-[0.8rem] sm:min-h-12 sm:px-6 sm:text-[0.95rem]">
            <span className="sm:hidden">Book Free Call</span>
            <span className="hidden sm:inline">Book Free Strategy Call</span>
          </BookButton>
        </nav>
      </div>
    </header>
  );
}
