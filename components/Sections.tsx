import Image from "next/image";
import { cta, offer, process, results, stats, story, trust } from "@/lib/content";
import { phoneDisplay, phoneHref, testimonialVideo } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { LiteYouTube } from "./LiteYouTube";
import { Reveal } from "./Reveal";

/* --------------------------------------------------------------- Trust row */
export function TrustRow() {
  return (
    <section className="container-x py-14 sm:py-16" aria-label="Certifications and partnerships">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-14">
        <p className="max-w-[260px] text-sm font-semibold uppercase leading-snug tracking-wide text-ink">{trust.label}</p>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {trust.badges.map((b) => (
            <li key={b.src}>
              <Image src={b.src} alt={b.alt} width={b.w} height={b.h} className="h-8 w-auto opacity-80 grayscale sm:h-9" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Stats */
export function Stats() {
  return (
    <section className="container-x py-12 sm:py-16">
      <Reveal as="dl" className="grid gap-10 border-t border-line pt-12 sm:grid-cols-3 sm:gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <dd className="text-5xl font-medium tracking-tight text-brand sm:text-6xl">{s.value}</dd>
            <dt className="mt-3 text-body">{s.label}</dt>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

/* ------------------------------------------------------------------- Offer */
function OfferVisual({ kind }: { kind: "laptop" | "phone" | "leads" }) {
  if (kind === "laptop") {
    return (
      <div className="relative w-full max-w-[380px]">
        <Image src="/mockups/laptop.webp" alt="" width={1400} height={897} sizes="380px" className="relative z-0 w-full" />
        <div className="absolute left-[7.8%] top-[2.4%] z-10 h-[85.4%] w-[83%] overflow-hidden rounded-[3px] bg-white">
          <Image
            src="/mockups/site-scroll.webp"
            alt="A conversion-optimized dental website built by TTR"
            width={1000}
            height={2762}
            sizes="360px"
            className="site-scroll w-full"
          />
        </div>
      </div>
    );
  }
  if (kind === "phone") {
    return (
      <Image
        src="/mockups/phone-keyword.webp"
        alt="A phone showing a Google search for dentist near me"
        width={866}
        height={1006}
        sizes="300px"
        className="w-full max-w-[300px]"
      />
    );
  }
  return (
    <Image
      src="/mockups/leads.gif"
      alt="Lead tracking workflow: new lead received, welcome text sent, follow-up scheduled"
      width={600}
      height={597}
      unoptimized
      className="w-full max-w-[300px] rounded-2xl"
    />
  );
}

export function Offer() {
  return (
    <section id="what-you-get" className="container-x py-16 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl sm:text-[2.75rem]">{offer.heading}</h2>
        <p className="mt-4 text-lg text-body">{offer.sub}</p>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {offer.cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 100} className="flex flex-col overflow-hidden rounded-card bg-paper px-8 pt-8">
            <h3 className="text-xl">{c.title}</h3>
            <p className="mt-3 leading-relaxed text-body">{c.body}</p>
            <div className="mt-auto flex h-[250px] items-start justify-center pt-8">
              <OfferVisual kind={c.visual} />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Results */
export function Results() {
  return (
    <section id="results" className="container-x py-16 sm:py-24">
      <Reveal>
        <h2 className="text-center text-3xl sm:text-[2.75rem]">{results.heading}</h2>
      </Reveal>
      <div className="mt-12 grid gap-5 lg:grid-cols-2">
        {results.cases.map((cs, i) => (
          <Reveal key={cs.name} delay={i * 100} className="rounded-card bg-paper p-8 sm:p-10">
            <p className="eyebrow">Case study</p>
            <h3 className="mt-3 text-2xl">{cs.name}</h3>
            <p className="mt-3 text-body">{cs.summary}</p>
            <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {cs.stats.map((s) => (
                <div key={s.label}>
                  <dd className="text-3xl font-medium tracking-tight text-brand sm:text-4xl">{s.value}</dd>
                  <dt className="mt-2 text-sm text-meta">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------- Story */
export function Story() {
  return (
    <section id="why-ttr" className="container-x py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <p className="eyebrow">{story.eyebrow}</p>
          <h2 className="mt-4 text-3xl sm:text-[2.75rem]">{story.heading}</h2>
          {story.body.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed text-body">
              {p}
            </p>
          ))}
          <div className="mt-8">
            <BookButton>Book a free strategy call</BookButton>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <LiteYouTube id={testimonialVideo.youtubeId} title={testimonialVideo.title} thumbnail={testimonialVideo.thumbnail} />
          <p className="mt-3 text-sm text-meta">{story.videoCaption}</p>
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Process */
export function Process() {
  return (
    <section id="how-it-works" className="container-x py-16 sm:py-24">
      <Reveal>
        <h2 className="text-center text-3xl sm:text-[2.75rem]">{process.heading}</h2>
      </Reveal>
      <ol className="mt-12 grid gap-8 sm:grid-cols-3 sm:gap-6">
        {process.steps.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 100} className="border-t border-line pt-6">
            <p className="text-sm font-semibold text-brand">0{i + 1}</p>
            <h3 className="mt-4 text-xl">{s.title}</h3>
            <p className="mt-3 leading-relaxed text-body">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ---------------------------------------------------------------- CTA block */
export function CtaBlock() {
  return (
    <section id="book" className="container-x py-8 sm:py-12">
      <div className="grid overflow-hidden rounded-card bg-deep text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 className="text-3xl text-white sm:text-[2.75rem]">{cta.heading}</h2>
          <p className="mt-4 max-w-md text-lg text-white/80">{cta.sub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <BookButton variant="white">{cta.primary}</BookButton>
            <a href={phoneHref} className="btn btn-outline-white" data-track="click_to_call">
              Call {phoneDisplay}
            </a>
          </div>
        </div>
        <div className="relative min-h-[280px] lg:min-h-[460px]">
          <Image src={cta.image.src} alt={cta.image.alt} fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
        </div>
      </div>
    </section>
  );
}
