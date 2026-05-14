"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HERO_PROOF, SITE } from "@/lib/constants";

const reveal = (delay: number) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
});

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink-900 via-ink-900 to-ink-950"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-accent/10 blur-[160px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-noise opacity-60"
      />

      <div className="container-tight">
        <motion.p {...reveal(0)} className="eyebrow">
          Horizon IA · Cabinet francophone
        </motion.p>

        <motion.h1
          {...reveal(0.08)}
          className="mt-6 max-w-4xl text-balance text-display-2xl font-semibold tracking-tight"
        >
          L'équipe IA installée chez les{" "}
          <span className="text-accent">dirigeants</span> qui veulent un vrai retour business.
        </motion.h1>

        <motion.p
          {...reveal(0.16)}
          className="mt-7 max-w-2xl text-balance text-lg leading-relaxed text-bone-200 sm:text-xl"
        >
          Pas une formation. Pas un outil. Une équipe d'agents IA configurée sur Claude,
          opérée par vous, qui vous fait gagner 15 à 25 heures par semaine sur vos tâches
          à plus forte valeur.
        </motion.p>

        <motion.div {...reveal(0.24)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg">
            <a href={SITE.calendly} target="_blank" rel="noreferrer">
              Réserver mon diagnostic 45 min
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href="#methode">Voir la méthode H·O·R·I·Z</a>
          </Button>
        </motion.div>

        <motion.p
          {...reveal(0.32)}
          className="mt-12 max-w-2xl text-sm leading-relaxed text-bone-400"
        >
          {HERO_PROOF}
        </motion.p>

        <motion.div {...reveal(0.4)} className="mt-20 sm:mt-24">
          <div className="hairline" />
        </motion.div>
      </div>
    </section>
  );
}
