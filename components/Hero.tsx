import Image from "next/image";
import { hero } from "@/lib/content";
import { BookButton } from "./BookingModal";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-brand-deep pt-header text-white sm:min-h-[720px] lg:min-h-[88vh]">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/hero/hero-poster.jpg"
        aria-hidden="true"
      >
        <source src="/hero/hero-bg.webm" type="video/webm" />
        <source src="/hero/hero-bg.mp4" type="video/mp4" />
      </video>
      {/* Purple wash over the video, as on the live site */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(107_39_112/0.72),rgb(135_52_141/0.62)_60%,rgb(79_29_84/0.8))]" aria-hidden="true" />

      <div className="container-x relative py-20 text-center sm:py-28">
        <h1 className="mx-auto max-w-4xl text-[2.1rem] font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.75rem]">
          {hero.eyebrow}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg font-semibold leading-snug text-white sm:text-2xl lg:text-[1.75rem]">
          {hero.headline}
        </p>
        <div className="mt-9">
          <BookButton variant="white" uppercase className="min-h-[3.25rem] px-8">
            {hero.cta}
          </BookButton>
        </div>
      </div>

      <a
        href="#stop-paying-for-ads"
        className="bob absolute bottom-6 left-1/2 -translate-x-1/2 opacity-90 hover:opacity-100"
        aria-label="Scroll to learn more"
      >
        <Image src="/brand/scroll-drop.png" alt="" width={91} height={127} className="h-16 w-auto" />
      </a>
    </section>
  );
}
