"use client";

import { motion } from "framer-motion";

import { METHOD_PILLARS } from "@/lib/constants";

export function Method() {
  return (
    <section id="methode" className="section relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-px w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-bone/20 to-transparent"
      />
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="eyebrow">Protocole</p>
          <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
            La méthode H·O·R·I·Z.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone-400">
            Le seul protocole francophone qui transforme une équipe humaine en équipe
            humain + IA en 90 jours.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {METHOD_PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.article
                key={pillar.letter}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col gap-5 rounded-2xl border border-bone/10 bg-ink-800/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bone/20 hover:bg-ink-800/60"
              >
                <div className="flex items-start justify-between">
                  <span
                    aria-hidden
                    className="font-semibold leading-none text-accent"
                    style={{ fontSize: "96px", letterSpacing: "-0.06em" }}
                  >
                    {pillar.letter}
                  </span>
                  <Icon className="h-5 w-5 text-bone-500 transition-colors group-hover:text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-bone">
                    {pillar.name}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-bone-400">
                    {pillar.body}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
