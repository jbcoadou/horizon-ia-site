import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SITE } from "@/lib/constants";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Horizon IA · L'équipe IA installée chez les dirigeants",
    template: "%s · Horizon IA",
  },
  description:
    "Cabinet francophone qui installe une équipe IA dirigeante sur Claude. Pas une formation, un système qui fait gagner 15 à 25 heures par semaine aux dirigeants de PME.",
  keywords: [
    "Horizon IA",
    "Claude",
    "Anthropic",
    "équipe IA dirigeante",
    "automatisation dirigeant",
    "transformation IA",
    "Jean Briac Coadou",
    "Bootcamp IA",
    "Implementation IA",
  ],
  authors: [{ name: "Jean Briac Coadou" }],
  creator: "Horizon IA SLU",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE.url,
    siteName: SITE.name,
    title: "Horizon IA · L'équipe IA installée chez les dirigeants",
    description:
      "Pas une formation. Pas un outil. Une équipe d'agents IA configurée sur Claude, opérée par vous.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Horizon IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Horizon IA · L'équipe IA installée chez les dirigeants",
    description:
      "Pas une formation. Une équipe d'agents IA configurée sur Claude, opérée par vous.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="min-h-dvh bg-ink-900 text-bone selection:bg-accent selection:text-ink-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
