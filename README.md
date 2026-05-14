# Horizon IA · Site vitrine

Site Next.js 14 (App Router) + TypeScript + Tailwind + shadcn/ui pour [horizoniaconsulting.com](https://horizoniaconsulting.com).

## Stack

- Next.js 14 (App Router, Server Components par défaut)
- TypeScript strict
- Tailwind CSS 3.4
- shadcn/ui (Button, Accordion, Card) en composants locaux
- Framer Motion (uniquement Hero + Méthode)
- lucide-react pour les icônes
- next/font (Inter 400 / 500 / 600 / 700)

## Identité

- Couleurs : `#0a0a0a` (ink), `#ffffff` (bone), `#ff5e00` (accent)
- Typo : Inter exclusivement
- Style : Anthropic.com x Linear.app, beaucoup de respiration, lignes fines

## Démarrer

```bash
pnpm install   # ou npm install / yarn
pnpm dev       # http://localhost:3000
```

## Build

```bash
pnpm build
pnpm start
```

## Architecture

```
app/
  (marketing)/
    page.tsx              Homepage avec les 9 sections
    methode/page.tsx
    offres/page.tsx
    club/page.tsx
    a-propos/page.tsx
    contact/page.tsx
  layout.tsx
  globals.css
  sitemap.ts
  robots.ts
components/
  Navbar.tsx
  Footer.tsx
  ClientLogoMarquee.tsx
  TestimonialVideo.tsx
  sections/             HeroSection, ClientLogos, WhyUs, Method, ForWhom, Testimonials, Founder, Offers, FAQ
  ui/                   button, accordion, card, reveal
lib/
  utils.ts
  constants.ts          Toutes les données du site (offres, piliers, FAQ, témoignages)
public/
  logos/                Remplacer par les vrais logos clients
  testimonials/         Vidéos et photos témoignages
  founder/portrait.jpg  Portrait Jean Briac Coadou
```

## Données à remplacer

- `public/logos/*` : 12 logos clients réels (le marquee les prend automatiquement via `CLIENT_LOGOS` dans `lib/constants.ts`)
- `public/founder/portrait.jpg` : portrait du fondateur (ratio 3/4)
- `public/testimonials/*` : posters et vidéos, à brancher dans `TESTIMONIALS` (`kind: "video"` + `videoSrc` + `poster`, ou `kind: "quote"` + `quote`)
- `public/og.png` : image Open Graph 1200×630

## Déploiement Vercel

Le projet est prêt à être déployé sans configuration additionnelle :

1. Pousser sur GitHub
2. Importer le repo dans Vercel
3. Aucune variable d'environnement n'est requise pour la version actuelle

## SEO

- `metadata` par page via App Router
- `app/sitemap.ts` génère `/sitemap.xml`
- `app/robots.ts` génère `/robots.txt`
- OG tags et Twitter Card dans `app/layout.tsx`

## Performance

- Inter chargé via `next/font` (zero layout shift)
- Animations limitées au Hero et à la section Méthode
- Aucune dépendance lourde inutile
- Cible Lighthouse : Performance 90+, Accessibility 95+, SEO 95+
