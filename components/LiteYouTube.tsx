"use client";

import Image from "next/image";
import { useState } from "react";
import { PlayIcon } from "./icons";

type Props = { id: string; title: string; thumbnail: string; className?: string };

/** Shows the thumbnail and only loads the (privacy-enhanced) YouTube player on click. */
export function LiteYouTube({ id, title, thumbnail, className = "" }: Props) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative aspect-video overflow-hidden rounded-card bg-ink ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 h-full w-full cursor-pointer"
          aria-label={`Play video: ${title}`}
        >
          <Image src={thumbnail} alt="" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
          <span className="absolute inset-0 bg-ink/20 transition group-hover:bg-ink/10" aria-hidden="true" />
          <span className="absolute left-1/2 top-1/2 inline-flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink transition group-hover:scale-105">
            <PlayIcon className="ml-1 size-9" />
          </span>
        </button>
      )}
    </div>
  );
}
