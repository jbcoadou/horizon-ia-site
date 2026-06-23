import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Horizon IA.",
};

export default function MentionsPage() {
  return (
    <section className="pt-40 pb-24">
      <div className="container-tight max-w-3xl">
        <p className="eyebrow">Légal</p>
        <h1 className="mt-5 text-display-xl font-semibold tracking-tight">
          Mentions légales
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-bone-300">
          <div>
            <h2 className="text-lg font-semibold text-bone">Éditeur du site</h2>
            <p className="mt-3">
              {SITE.legalName}, société de droit andorran. Numéro de registre :{" "}
              {SITE.nrt}. Siège social : {SITE.address}. Contact :{" "}
              <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
            <p className="mt-2">Directeur de la publication : Jean Briac Coadou.</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Hébergeur</h2>
            <p className="mt-3">
              Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.
              vercel.com.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Propriété intellectuelle</h2>
            <p className="mt-3">
              L'ensemble des contenus de ce site (textes, visuels, logos, méthode
              H·O·R·I·Z) est la propriété exclusive de {SITE.legalName}. Toute
              reproduction, totale ou partielle, sans autorisation écrite préalable est
              interdite.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Responsabilité</h2>
            <p className="mt-3">
              {SITE.legalName} s'efforce d'assurer l'exactitude des informations
              diffusées sur ce site, sans garantie d'exhaustivité. Les résultats évoqués
              dépendent de la situation de chaque entreprise et ne constituent pas une
              garantie de performance.
            </p>
          </div>

          <p className="text-bone-500">
            Document fourni à titre indicatif, à faire valider par votre conseil
            juridique.
          </p>
        </div>
      </div>
    </section>
  );
}
