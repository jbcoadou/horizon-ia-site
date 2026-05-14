import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { OFFERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Offers() {
  return (
    <section id="offres" className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="eyebrow">Catalogue</p>
          <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
            Trois façons de travailler ensemble.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone-400">
            Tout part du même diagnostic de 45 minutes. C'est lui qui décide laquelle
            des trois portes vous ouvrez.
          </p>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {OFFERS.map((offer) => (
            <article
              key={offer.slug}
              id={offer.slug}
              className={cn(
                "group relative flex flex-col rounded-2xl border bg-ink-800/40 p-8 transition-all duration-300 hover:-translate-y-1",
                offer.featured
                  ? "border-accent/40 bg-gradient-to-b from-ink-800/60 to-ink-900 ring-1 ring-accent/20"
                  : "border-bone/10 hover:border-bone/20"
              )}
            >
              {offer.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-900">
                  Le plus choisi
                </span>
              )}
              <header>
                <h3 className="text-xl font-semibold tracking-tight text-bone">
                  {offer.name}
                </h3>
                <p className="mt-2 text-[15px] text-bone-400">{offer.tagline}</p>
                <p className="mt-6 text-4xl font-semibold tracking-tight text-bone">
                  {offer.price}
                </p>
              </header>

              <ul className="mt-8 flex-1 space-y-3">
                {offer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-[14px] leading-relaxed text-bone-200"
                  >
                    <span
                      aria-hidden
                      className="mt-2 h-px w-4 shrink-0 bg-accent"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={offer.featured ? "primary" : "subtle"}
                size="md"
                className="mt-10 w-full"
              >
                <a href={offer.href} target="_blank" rel="noreferrer">
                  {offer.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
