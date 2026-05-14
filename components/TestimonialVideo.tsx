"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";
import type { Testimonial } from "@/lib/constants";

export function TestimonialCard({ data }: { data: Testimonial }) {
  if (data.kind === "video") {
    return <VideoTestimonial data={data} />;
  }
  return <QuoteTestimonial data={data} />;
}

function VideoTestimonial({ data }: { data: Testimonial }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-bone/10 bg-ink-800">
      {playing && data.videoSrc ? (
        <video
          src={data.videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          controls
          autoPlay
          playsInline
        />
      ) : (
        <>
          {data.poster ? (
            <Image
              src={data.poster}
              alt={data.name}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-ink-700 to-ink-900 text-bone-500">
              <span className="text-xs uppercase tracking-[0.2em]">Vidéo à venir</span>
            </div>
          )}
          <button
            type="button"
            aria-label={`Lire le témoignage de ${data.name}`}
            onClick={() => data.videoSrc && setPlaying(true)}
            className={cn(
              "absolute inset-0 grid place-items-center bg-ink-900/30 transition-colors group-hover:bg-ink-900/40",
              !data.videoSrc && "pointer-events-none"
            )}
          >
            <span className="grid h-16 w-16 place-items-center rounded-full bg-accent text-ink-900 shadow-[0_12px_32px_-12px_rgba(255,94,0,0.6)] transition-transform group-hover:scale-105">
              <Play className="h-6 w-6 translate-x-0.5 fill-current" />
            </span>
          </button>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/40 to-transparent p-6">
            <p className="text-sm font-semibold text-bone">{data.name}</p>
            <p className="text-xs text-bone-400">
              {data.role} · {data.company}
            </p>
          </figcaption>
        </>
      )}
    </figure>
  );
}

function QuoteTestimonial({ data }: { data: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-bone/10 bg-ink-800/40 p-7">
      <blockquote className="text-[15px] leading-relaxed text-bone-200">
        {data.quote ? `« ${data.quote} »` : "Témoignage à venir."}
      </blockquote>
      <figcaption className="mt-8 flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-full bg-bone/10 text-sm font-semibold text-bone-400">
          {data.name === "Témoignage à venir"
            ? "·"
            : data.name
                .split(" ")
                .map((p) => p[0])
                .join("")
                .slice(0, 2)
                .toUpperCase()}
        </span>
        <div className="text-sm">
          <p className="font-medium text-bone">{data.name}</p>
          <p className="text-bone-400">
            {data.role} · {data.company}
          </p>
        </div>
      </figcaption>
    </figure>
  );
}
