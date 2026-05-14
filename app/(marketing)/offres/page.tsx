import type { Metadata } from "next";

import { Offers } from "@/components/sections/Offers";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Offres",
  description:
    "Bootcamp Vidéo, Bootcamp Présentiel, Implementation 90 jours. Trois façons d'installer votre équipe IA dirigeante sur Claude.",
};

export default function OffresPage() {
  return (
    <>
      <section className="pt-40 pb-4">
        <div className="container-tight">
          <p className="eyebrow">Catalogue</p>
          <h1 className="mt-5 max-w-4xl text-display-2xl font-semibold tracking-tight text-balance">
            Trois portes d'entrée. Un seul protocole.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-400">
            On vous laisse choisir le format. Le contenu, lui, ne se négocie pas.
          </p>
        </div>
      </section>
      <Offers />
      <FAQ />
    </>
  );
}
