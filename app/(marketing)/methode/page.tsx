import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Method } from "@/components/sections/Method";
import { ForWhom } from "@/components/sections/ForWhom";
import { METHOD_PILLARS, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "La méthode H·O·R·I·Z",
  description:
    "Le protocole en cinq piliers qui transforme une équipe humaine en équipe humain + IA en 90 jours. Hyper-clarté, Outils, Routines, Implémentation, Zone de récurrence.",
};

const DETAILS: Record<string, string[]> = {
  H: [
    "Audit de votre semaine type sur 14 jours.",
    "Identification des 20% de tâches qui produisent 80% du résultat.",
    "Hiérarchisation par effet de levier dirigeant.",
  ],
  O: [
    "Installation Claude (Pro, Team, Enterprise selon contexte).",
    "Connexion MCP à votre stack (Gmail, Drive, Notion, Slack, CRM).",
    "Création de Projects et Skills sur mesure.",
  ],
  R: [
    "Documentation de chaque workflow critique en français.",
    "Conversion en agent exécutable avec Cowork ou Claude Code.",
    "Test, itération, validation en conditions réelles.",
  ],
  I: [
    "Trois cas d'usage business sortis en production en parallèle.",
    "Mesure des heures reprises chaque semaine.",
    "Ajustement par cycles courts, pas de big bang.",
  ],
  Z: [
    "Documentation interne pour vos équipes.",
    "Rituels hebdomadaires de pilotage.",
    "Transfert complet de propriété à la fin du programme.",
  ],
};

export default function MethodPage() {
  return (
    <>
      <section className="pt-40 pb-8">
        <div className="container-tight">
          <p className="eyebrow">Méthode</p>
          <h1 className="mt-5 max-w-4xl text-display-2xl font-semibold tracking-tight text-balance">
            H·O·R·I·Z. Le protocole en cinq piliers.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-400">
            Conçu pour les dirigeants qui veulent un système installé, pas une session
            d'inspiration. Chaque pilier produit un livrable concret et chiffré.
          </p>
        </div>
      </section>

      <Method />

      <section className="section pt-0">
        <div className="container-tight space-y-16">
          {METHOD_PILLARS.map((pillar, i) => (
            <article
              key={pillar.letter}
              className="grid gap-10 border-t border-bone/10 pt-16 lg:grid-cols-12"
            >
              <div className="lg:col-span-4">
                <span
                  aria-hidden
                  className="block font-semibold leading-none text-accent"
                  style={{ fontSize: "120px", letterSpacing: "-0.06em" }}
                >
                  {pillar.letter}
                </span>
                <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-bone-500">
                  Pilier {i + 1} sur 5
                </p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-bone">
                  {pillar.name}
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg leading-relaxed text-bone-200">{pillar.body}</p>
                <ul className="mt-8 space-y-4">
                  {DETAILS[pillar.letter]?.map((line) => (
                    <li key={line} className="flex gap-4 text-[15px] text-bone-400">
                      <span className="mt-2 h-px w-5 shrink-0 bg-accent" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ForWhom />

      <section className="section pt-0">
        <div className="container-tight">
          <div className="overflow-hidden rounded-3xl border border-bone/10 bg-gradient-to-br from-ink-800/60 to-ink-900 p-10 sm:p-14">
            <h3 className="max-w-2xl text-display-lg font-semibold tracking-tight text-balance">
              Prêt à voir la méthode appliquée à votre boîte ?
            </h3>
            <Button asChild size="lg" className="mt-8">
              <a href={SITE.calendly} target="_blank" rel="noreferrer">
                Réserver mon diagnostic 45 min
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
