import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AUDIT, SITE } from "@/lib/constants";

export function Audit() {
  return (
    <section id="audit" className="section">
      <div className="container-tight">
        <div className="overflow-hidden rounded-3xl border border-accent/25 bg-gradient-to-b from-ink-800/60 to-ink-900 p-8 sm:p-14">
          <div className="max-w-3xl">
            <p className="eyebrow">{AUDIT.eyebrow}</p>
            <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
              {AUDIT.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-bone-400">
              {AUDIT.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {AUDIT.deliverables.map((item, i) => (
              <article
                key={item.title}
                className="flex gap-4 rounded-2xl border border-bone/10 bg-ink-900/60 p-6"
              >
                <span className="text-sm font-semibold leading-6 text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-bone">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-bone-400">
                    {item.body}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-[15px] italic leading-relaxed text-bone-400">
            {AUDIT.reassurance}
          </p>

          <div className="mt-8">
            <Button asChild size="lg">
              <a href={SITE.calendly} target="_blank" rel="noreferrer">
                {AUDIT.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
