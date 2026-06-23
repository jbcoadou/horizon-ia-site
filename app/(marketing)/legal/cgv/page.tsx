import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente des prestations Horizon IA.",
};

export default function CgvPage() {
  return (
    <section className="pt-40 pb-24">
      <div className="container-tight max-w-3xl">
        <p className="eyebrow">Légal</p>
        <h1 className="mt-5 text-display-xl font-semibold tracking-tight">
          Conditions générales de vente
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-bone-300">
          <div>
            <h2 className="text-lg font-semibold text-bone">Objet</h2>
            <p className="mt-3">
              Les présentes conditions régissent les prestations d'accompagnement et
              d'installation de solutions IA proposées par {SITE.legalName} ({SITE.nrt}),
              {" "}
              {SITE.address}.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Prestations et prix</h2>
            <p className="mt-3">
              L'audit IA est offert et sans engagement. Les programmes payants (bootcamps,
              implémentation, accompagnement) sont décrits sur la page Offres, aux prix
              indiqués. Tout devis personnalisé prévaut sur les tarifs affichés.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Commande et paiement</h2>
            <p className="mt-3">
              La commande est ferme à réception du paiement ou de l'acompte convenu. Les
              paiements sont traités par un prestataire sécurisé (Stripe). Les modalités
              d'échelonnement éventuelles sont précisées au devis.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Exécution et garantie</h2>
            <p className="mt-3">
              Les prestations démarrent à la date convenue. Une garantie de satisfaction
              peut s'appliquer selon l'offre, dans les conditions précisées lors de la
              vente. Horizon IA est tenue à une obligation de moyens renforcée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Rétractation</h2>
            <p className="mt-3">
              Pour les contenus numériques et prestations dont l'exécution commence avec
              votre accord avant la fin du délai légal, vous renoncez à votre droit de
              rétractation pour la partie exécutée.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Responsabilité et droit applicable</h2>
            <p className="mt-3">
              La responsabilité de {SITE.legalName} est limitée au montant de la
              prestation. Les présentes conditions sont soumises au droit applicable au
              siège de la société. Tout litige fera l'objet d'une recherche de solution
              amiable avant toute action.
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
