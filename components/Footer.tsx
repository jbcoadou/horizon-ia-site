import Link from "next/link";
import { Linkedin, Youtube, Instagram } from "lucide-react";

import { SITE, SOCIAL } from "@/lib/constants";

const COLS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "Offres",
    links: [
      { label: "Bootcamp Vidéo", href: "/offres#bootcamp-video" },
      { label: "Bootcamp Présentiel", href: "/offres#bootcamp-presentiel" },
      { label: "Implementation 90 jours", href: "/offres#implementation-90-jours" },
    ],
  },
  {
    title: "Méthode",
    links: [
      { label: "La méthode H·O·R·I·Z", href: "/methode" },
      { label: "Pour qui", href: "/methode#pour-qui" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Club Horizon IA", href: "/club" },
      { label: "Newsletter (bientôt)", href: "#" },
      { label: "LinkedIn", href: SOCIAL.linkedin, external: true },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/legal/mentions" },
      { label: "CGV", href: "/legal/cgv" },
      { label: "Confidentialité", href: "/legal/confidentialite" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-bone/10 bg-ink-900">
      <div className="container-tight py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-[13px] font-bold text-ink-900">
                H
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Horizon IA</span>
            </Link>
            <p className="mt-4 max-w-xs text-[15px] text-bone-400">{SITE.baseline}</p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink href={SOCIAL.linkedin} label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SOCIAL.youtube} label="YouTube">
                <Youtube className="h-4 w-4" />
              </SocialLink>
              <SocialLink href={SOCIAL.instagram} label="Instagram">
                <Instagram className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-bone-400">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-bone-200 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-bone-200 transition-colors hover:text-accent"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-bone/10 pt-8 text-xs text-bone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {SITE.legalName} · {SITE.nrt} · {SITE.address} ·{" "}
            <a className="hover:text-bone-200" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </p>
          <p>© {new Date().getFullYear()} Horizon IA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="grid h-9 w-9 place-items-center rounded-full border border-bone/15 text-bone-200 transition-all hover:-translate-y-0.5 hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
