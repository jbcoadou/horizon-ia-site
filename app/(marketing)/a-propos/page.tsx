import type { Metadata } from "next";

import { Founder } from "@/components/sections/Founder";
import { WhyUs } from "@/components/sections/WhyUs";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Jean Briac Coadou, fondateur d'Horizon IA. 150 000 dirigeants suivis sur LinkedIn, formé entre Bretagne et San Francisco. Pourquoi Horizon IA existe.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-8">
        <div className="container-tight">
          <p className="eyebrow">À propos</p>
          <h1 className="mt-5 max-w-4xl text-display-2xl font-semibold tracking-tight text-balance">
            Une thèse simple. Une exécution exigeante.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-400">
            Horizon IA n'est pas un cabinet de plus. C'est l'extension opérationnelle
            d'une thèse défendue publiquement depuis 150 000 abonnés.
          </p>
        </div>
      </section>
      <Founder />
      <WhyUs />
    </>
  );
}
