import { hero } from "@/lib/content";
import { phoneDisplay, phoneHref } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { CheckIcon } from "./icons";

export function Hero() {
  return (
    <section className="container-x pt-2 sm:pt-4">
      <div className="relative isolate flex min-h-[600px] items-end overflow-hidden rounded-[28px] bg-deep text-white sm:min-h-[640px] lg:min-h-[700px] lg:items-center">
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

        <div className="relative w-full max-w-[680px] p-7 sm:p-12 lg:p-16">
          <p className="eyebrow text-white/75">{hero.eyebrow}</p>
          <h1 className="mt-4 text-[2.5rem] leading-[1.05] text-white sm:text-5xl lg:text-[3.5rem]">{hero.headline}</h1>
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
