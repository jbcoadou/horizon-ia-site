import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Club Horizon IA",
  description:
    "La communauté privée des dirigeants qui font tourner une équipe IA installée. Sessions live, bibliothèque de prompts, partage de workflows.",
};

const BENEFITS: { title: string; body: string }[] = [
  {
    title: "Sessions live mensuelles",
    body: "Deux rendez-vous chaque mois. Un focus stratégique, un focus technique Claude.",
  },
  {
    title: "Bibliothèque vivante",
    body: "Prompts, Skills, Projects et workflows mis à jour à chaque sortie Anthropic.",
  },
  {
    title: "Cercle restreint",
    body: "Uniquement des dirigeants ayant terminé un bootcamp ou un programme Implementation.",
  },
  {
    title: "Veille hebdo",
    body: "Une note de 5 minutes chaque vendredi, sans bruit, sans hype, sans clickbait.",
  },
];

export default function ClubPage() {
  return (
    <>
      <section className="pt-40 pb-16">
        <div className="container-tight">
          <p className="eyebrow">Communauté privée</p>
          <h1 className="mt-5 max-w-4xl text-display-2xl font-semibold tracking-tight text-balance">
            Le Club Horizon IA.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-400">
            La continuité du programme, entre dirigeants. On y partage les workflows qui
            marchent, sans posture, sans masque marketing.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-tight">
          <div className="grid gap-px overflow-hidden rounded-2xl bg-bone/10 sm:grid-cols-2">
            {BENEFITS.map((b) => (
              <article key={b.title} className="bg-ink-900 p-8 sm:p-10">
                <h2 className="text-xl font-semibold tracking-tight text-bone">
                  {b.title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-bone-400">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-tight">
          <div className="overflow-hidden rounded-3xl border border-bone/10 bg-gradient-to-br from-ink-800/60 to-ink-900 p-10 sm:p-14">
            <h3 className="max-w-2xl text-display-lg font-semibold tracking-tight text-balance">
              L'accès passe par un diagnostic. Pas par un formulaire.
            </h3>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-bone-400">
              On garde le Club resserré. Le diagnostic permet de vérifier que vous y
              trouverez votre place et qu'on n'y perd pas le niveau d'exigence.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href={SITE.calendly} target="_blank" rel="noreferrer">
                Réserver mon diagnostic
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
