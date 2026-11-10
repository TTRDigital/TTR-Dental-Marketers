"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronIcon } from "./icons";

type Slide = { src: string; alt: string; w: number; h: number };

/** Auto-advancing photo carousel with arrows and dots, like the live site's team gallery. */
export function Carousel({ slides, interval = 4500, className = "" }: { slides: Slide[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = slides.length;

  const go = useCallback((n: number) => setIndex((i) => (i + n + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => go(1), interval);
    return () => clearInterval(id);
  }, [paused, count, interval, go]);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-brand-light ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="TTR Dental team photos"
    >
      <div className="relative aspect-[4/3] w-full">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
            aria-hidden={i !== index}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow hover:bg-white"
        aria-label="Previous photo"
      >
        <ChevronIcon className="size-5 rotate-180" />
      </button>
      <button
        type="button"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-ink shadow hover:bg-white"
        aria-label="Next photo"
      >
        <ChevronIcon className="size-5" />
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            className={`size-2.5 rounded-full border border-white/70 transition ${i === index ? "bg-white" : "bg-white/30 hover:bg-white/60"}`}
            aria-label={`Show photo ${i + 1} of ${count}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}
