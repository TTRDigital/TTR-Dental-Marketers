import { hero } from "@/lib/content";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { CheckIcon } from "./icons";

/** Full-bleed hero: the video fills the viewport below the header, text stays on the page grid. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-var(--header-h))] items-end overflow-hidden bg-deep text-white lg:items-center">
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
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(34_16_42/0.35)_0%,rgb(34_16_42/0.85)_100%)] lg:bg-[linear-gradient(90deg,rgb(34_16_42/0.88)_0%,rgb(34_16_42/0.6)_50%,rgb(34_16_42/0.25)_100%)]"
        aria-hidden="true"
      />

      <div className="container-x relative py-14 sm:py-20 lg:py-24">
        <div className="max-w-[680px]">
          <p className="eyebrow text-white/75">{hero.eyebrow}</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-5xl lg:text-[3.75rem]">{hero.headline}</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">{hero.sub}</p>
          <p className="mt-6 flex items-center gap-2 text-sm font-medium text-white/90">
            <CheckIcon className="size-4 text-white" />
            {hero.note}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <BookButton variant="white">{hero.cta}</BookButton>
            <a href={phoneHref} className="btn btn-outline-white" data-track="click_to_call">
              Call {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
