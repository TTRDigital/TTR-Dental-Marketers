import Image from "next/image";
import { caseStudies, ctaBand, process, stopAds, teamPhotos, threeSteps, whyTtr } from "@/lib/content";
import { testimonialVideo } from "@/lib/site";
import { BookButton } from "./BookingModal";
import { Carousel } from "./Carousel";
import { LiteYouTube } from "./LiteYouTube";
import { Reveal } from "./Reveal";
import { CheckIcon } from "./icons";

type Part = { text: string; accent?: boolean };
const Rich = ({ parts }: { parts: readonly Part[] }) => (
  <>
    {parts.map((p, i) =>
      p.accent ? (
        <span key={i} className="text-brand">
          {p.text}
        </span>
      ) : (
        <span key={i}>{p.text}</span>
      ),
    )}
  </>
);

const CheckList = ({ items, light = false }: { items: readonly string[]; light?: boolean }) => (
  <ul className="space-y-2.5">
    {items.map((item) => (
      <li key={item} className={`flex items-start gap-3 text-[1.05rem] font-semibold ${light ? "text-white" : "text-body"}`}>
        <CheckIcon className={`mt-1 size-5 shrink-0 ${light ? "text-white" : "text-brand"}`} />
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

/* ---------------------------------------------------------------- Stop ads */
export function StopAds() {
  return (
    <section id="stop-paying-for-ads" className="relative overflow-hidden bg-paper py-16 sm:py-24">
      <span className="pattern-corner -left-6 top-6" aria-hidden="true" />
      <span className="pattern-corner -right-6 bottom-6 rotate-180" aria-hidden="true" />
      <div className="container-x">
        <Reveal className="grid items-center gap-10 rounded-3xl bg-white p-6 shadow-[0_30px_80px_-40px_rgb(79_29_84/0.35)] sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              <span className="text-brand">{stopAds.heading[0]}</span>
              {stopAds.heading[1]}
            </h2>
            <div className="mt-7">
              <CheckList items={stopAds.points} />
            </div>
            <BookButton className="mt-9">Book Free Strategy Call</BookButton>
          </div>
          <Carousel slides={teamPhotos} />
        </Reveal>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Why TTR */
export function WhyTtr() {
  return (
    <section id="why-ttr" className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center text-3xl font-extrabold tracking-wide sm:text-4xl">{whyTtr.heading}</h2>
        </Reveal>
        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <LiteYouTube id={testimonialVideo.youtubeId} title={testimonialVideo.title} thumbnail={testimonialVideo.thumbnail} />
            <p className="mt-3 text-center text-sm text-meta">
              Why Dr. Medi Adili of Ideal Dental Solutions trusts TTR Dental Marketers.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[1.05rem] leading-relaxed text-body">{whyTtr.story}</p>
            <ul className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4" aria-label="Certifications and partnerships">
              {whyTtr.badges.map((b) => (
                <li key={b.src}>
                  <Image src={b.src} alt={b.alt} width={b.w} height={b.h} className="h-10 w-auto sm:h-11" />
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Results */
export function Results() {
  return (
    <section id="results" className="bg-paper py-16 sm:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Case studies</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Real practices. Real new patients.</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.name} delay={i * 120} className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-40px_rgb(79_29_84/0.3)]">
              <div className="flex-1 p-7 sm:p-9">
                <h3 className="text-2xl font-bold">{cs.name}</h3>
                <p className="mt-4 leading-relaxed text-body">{cs.summary}</p>
                <dl className="mt-7 grid grid-cols-3 gap-4">
                  {cs.stats.map((s) => (
                    <div key={s.label}>
                      <dd className="font-heading text-2xl font-extrabold text-brand sm:text-3xl">{s.value}</dd>
                      <dt className="mt-1 text-[0.7rem] font-semibold uppercase tracking-wider text-meta">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="flex h-[300px] items-start justify-center overflow-hidden bg-brand-light px-8 pt-8">
                <Image
                  src={cs.image.src}
                  alt={cs.image.alt}
                  width={cs.image.w}
                  height={cs.image.h}
                  sizes="280px"
                  className="w-auto max-w-[280px] rounded-t-[28px] drop-shadow-[0_18px_30px_rgb(79_29_84/0.35)]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Three steps */
function StepVisual({ kind }: { kind: "laptop" | "phone" | "leads" }) {
  if (kind === "laptop") {
    return (
      <div className="relative mx-auto w-full max-w-[620px]">
        <Image src="/mockups/laptop.webp" alt="" width={1400} height={897} sizes="(min-width: 1024px) 620px, 100vw" className="relative z-0 w-full" />
        {/* Screen area of the laptop frame; the site screenshot scrolls inside it */}
        <div className="absolute left-[7.8%] top-[2.4%] z-10 h-[85.4%] w-[83%] overflow-hidden rounded-[4px] bg-white">
          <Image
            src="/mockups/site-scroll.webp"
            alt="A conversion-optimized dental website built by TTR"
            width={1000}
            height={2762}
            sizes="(min-width: 1024px) 480px, 80vw"
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
        alt="A phone showing a Google search for Dentist Near Me"
        width={866}
        height={1006}
        sizes="(min-width: 1024px) 460px, 80vw"
        className="mx-auto w-full max-w-[380px]"
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
      className="mx-auto w-full max-w-[460px] rounded-2xl"
    />
  );
}

export function ThreeSteps() {
  return (
    <section id="three-steps" className="py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.75rem]">
            <Rich parts={threeSteps.heading} />
          </h2>
        </Reveal>
        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {threeSteps.steps.map((step, i) => (
            <Reveal key={step.label} className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div className="max-w-xl">
                <p className="eyebrow">{step.label}</p>
                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  <Rich parts={step.title} />
                </h3>
                <p className="mt-5 text-[1.05rem] leading-relaxed text-body">{step.body}</p>
              </div>
              <StepVisual kind={step.visual} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------------------------------------- Process */
export function Process() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-paper py-16 sm:py-24">
      <div className="container-x">
        <Reveal>
          <h2 className="text-center text-3xl font-bold sm:text-4xl">
            <Rich parts={process.heading} />
          </h2>
        </Reveal>
        <div className="relative mt-14">
          <Image
            src="/steps/curve.png"
            alt=""
            width={1440}
            height={104}
            className="pointer-events-none absolute left-1/2 top-9 hidden w-[120%] max-w-none -translate-x-1/2 opacity-70 lg:block"
            aria-hidden="true"
          />
          <ol className="relative grid gap-12 sm:grid-cols-3 sm:gap-8">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 120} className="text-center">
                <Image src={s.icon} alt="" width={354} height={348} className="mx-auto h-28 w-28" />
                <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
                <p className="mx-auto mt-3 max-w-xs leading-relaxed text-body">{s.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- CTA band */
export function CtaBand() {
  return (
    <section id="book" className="grid lg:grid-cols-2">
      <div className="relative min-h-[320px] lg:min-h-[560px]">
        <Image src={ctaBand.image.src} alt={ctaBand.image.alt} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex items-center bg-brand px-gutter py-16 text-white sm:py-20 lg:px-16">
        <Reveal className="mx-auto max-w-lg">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">{ctaBand.heading}</h2>
          <div className="mt-7">
            <CheckList items={ctaBand.points} light />
          </div>
          <BookButton variant="white" uppercase className="mt-10">
            {ctaBand.cta}
          </BookButton>
        </Reveal>
      </div>
    </section>
  );
}
