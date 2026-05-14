import { ArrowUpRight, ArrowDownRight } from "lucide-react";

import { FOR_YOU, NOT_FOR_YOU } from "@/lib/constants";

export function ForWhom() {
  return (
    <section id="pour-qui" className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="eyebrow">Cadrage</p>
          <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
            Pour qui c'est. Pour qui ce n'est pas.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone-400">
            On préfère le dire avant de vous faire perdre 45 minutes en diagnostic.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-bone/10 lg:grid-cols-2">
          <div className="bg-ink-900 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/15 text-accent">
                <ArrowUpRight className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold text-bone">Pour vous si...</h3>
            </div>
            <ul className="mt-8 space-y-5">
              {FOR_YOU.map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-bone-200">
                  <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink-900 p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-bone/10 text-bone-400">
                <ArrowDownRight className="h-4 w-4" />
              </span>
              <h3 className="text-lg font-semibold text-bone">Pas pour vous si...</h3>
            </div>
            <ul className="mt-8 space-y-5">
              {NOT_FOR_YOU.map((item, i) => (
                <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-bone-400">
                  <span className="mt-2 h-px w-5 shrink-0 bg-bone/30" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
