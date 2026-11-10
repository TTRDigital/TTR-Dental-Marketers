import Image from "next/image";
import Link from "next/link";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { PhoneIcon } from "./icons";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur">
      <div className="container-x flex h-header items-center justify-between gap-4">
        <Link href="/" className="shrink-0" aria-label="TTR Dental Marketers home">
          <Image src="/brand/logo-dark.png" alt="TTR Dental" width={1200} height={150} priority className="hidden h-7 w-auto sm:block" />
          <Image src="/brand/mark-dark.png" alt="TTR Dental" width={300} height={203} priority className="h-7 w-auto sm:hidden" />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-6" aria-label="Contact">
          <a
            href={phoneHref}
            className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[0.95rem] font-medium text-ink hover:text-brand"
            data-track="click_to_call"
          >
            <PhoneIcon className="size-[18px]" />
            <span className="hidden sm:inline">{phoneDisplay}</span>
            <span className="sr-only sm:hidden">Call {phoneDisplay}</span>
          </a>
          <BookButton className="min-h-11 px-4 text-[0.85rem] sm:min-h-12 sm:px-5 sm:text-[0.95rem]">
            <span className="sm:hidden">Book a call</span>
            <span className="hidden sm:inline">Book a free strategy call</span>
          </BookButton>
        </nav>
      </div>
    </header>
  );
}
