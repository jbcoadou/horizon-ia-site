import type { Metadata } from "next";

import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données du site Horizon IA.",
};

export default function ConfidentialitePage() {
  return (
    <section className="pt-40 pb-24">
      <div className="container-tight max-w-3xl">
        <p className="eyebrow">Légal</p>
        <h1 className="mt-5 text-display-xl font-semibold tracking-tight">
          Politique de confidentialité
        </h1>

        <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-bone-300">
          <div>
            <h2 className="text-lg font-semibold text-bone">Responsable du traitement</h2>
            <p className="mt-3">
              {SITE.legalName} ({SITE.nrt}), {SITE.address}. Contact :{" "}
              <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Données collectées</h2>
            <p className="mt-3">
              Lorsque vous réservez un audit ou nous contactez, nous collectons votre
              nom, votre adresse email et les informations que vous nous transmettez sur
              votre activité. La réservation passe par un outil de prise de rendez-vous
              tiers.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Finalités et base légale</h2>
            <p className="mt-3">
              Ces données servent à organiser votre rendez-vous, échanger avec vous et
              vous adresser des informations pertinentes. Le traitement repose sur votre
              consentement et notre intérêt légitime à développer notre activité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Durée et destinataires</h2>
            <p className="mt-3">
              Vos données sont conservées au maximum 3 ans après notre dernier contact.
              Elles sont accessibles à l'équipe Horizon IA et à nos sous-traitants
              techniques (prise de rendez-vous, CRM, emailing), tenus à la confidentialité.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Vos droits</h2>
            <p className="mt-3">
              Vous disposez d'un droit d'accès, de rectification, d'effacement,
              d'opposition et de portabilité. Pour l'exercer, écrivez à{" "}
              <a className="text-accent hover:underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              . Vous pouvez aussi saisir l'autorité de protection des données compétente.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-bone">Cookies</h2>
            <p className="mt-3">
              Ce site peut utiliser des cookies de mesure d'audience pour comprendre son
              usage et l'améliorer. Vous pouvez les refuser via les réglages de votre
              navigateur.
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
