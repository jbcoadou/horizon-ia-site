import type { Metadata } from "next";
import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE, SOCIAL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Réserver un diagnostic de 45 minutes avec l'équipe Horizon IA, ou nous écrire directement.",
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24">
      <div className="container-tight">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-5 max-w-3xl text-display-2xl font-semibold tracking-tight text-balance">
          La meilleure façon de nous rencontrer, c'est un diagnostic.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone-400">
          45 minutes en visio. Cartographie de vos opportunités IA en sortie, que vous
          choisissiez de travailler avec nous ou non.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={SITE.calendly} target="_blank" rel="noreferrer">
              Réserver mon diagnostic
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg">
            <a href={`mailto:${SITE.email}`}>Nous écrire</a>
          </Button>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl bg-bone/10 sm:grid-cols-3">
          <InfoTile
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={SITE.email}
            href={`mailto:${SITE.email}`}
          />
          <InfoTile
            icon={<Linkedin className="h-4 w-4" />}
            label="LinkedIn"
            value="Jean Briac Coadou"
            href={SOCIAL.linkedin}
          />
          <InfoTile
            icon={<MapPin className="h-4 w-4" />}
            label="Siège social"
            value={`${SITE.legalName} · ${SITE.address}`}
          />
        </div>
      </div>
    </section>
  );
}

function InfoTile({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <span className="grid h-9 w-9 place-items-center rounded-full bg-bone/5 text-bone-400 transition-colors group-hover:bg-accent/15 group-hover:text-accent">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-bone-500">
          {label}
        </p>
        <p className="mt-1 text-[15px] text-bone-200">{value}</p>
      </div>
    </>
  );

  const className =
    "group flex items-center gap-4 bg-ink-900 p-8 transition-colors hover:bg-ink-800/60";

  if (href) {
    return (
      <a className={className} href={href} target="_blank" rel="noreferrer">
        {content}
      </a>
    );
  }
  return <div className={className}>{content}</div>;
}
