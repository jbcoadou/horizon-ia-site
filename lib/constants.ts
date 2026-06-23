import {
  Compass,
  Wrench,
  Workflow,
  Rocket,
  Repeat,
  type LucideIcon,
} from "lucide-react";

export const SITE = {
  name: "Horizon IA",
  url: "https://www.horizon-ia.io",
  legalName: "Horizon IA SLU",
  nrt: "NRT L-720522-U",
  address: "AD500 Andorra la Vella",
  email: "contact@horizoniaconsulting.com",
  calendly: "https://calendly.com/horizon-ia/diagnostic",
  baseline: "L'équipe IA installée chez les dirigeants.",
};

export const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/jeanbriaccoadou",
  youtube: "https://www.youtube.com/@horizonia",
  instagram: "https://www.instagram.com/horizonia",
};

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Méthode", href: "/methode" },
  { label: "Offres", href: "/offres" },
  { label: "Club", href: "/club" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export const HERO_PROOF =
  "Déjà 150 000 dirigeants nous suivent sur LinkedIn · Top 28 mondial Favikon IA (avril 2025)";

export const WHY_US: { kicker: string; title: string; body: string }[] = [
  {
    kicker: "Audience",
    title: "150 000 dirigeants nous écoutent déjà.",
    body: "Aucune publicité payée. Une audience LinkedIn construite ligne par ligne, qui valide chaque méthode publiée avant qu'elle n'arrive chez vous.",
  },
  {
    kicker: "Technologie",
    title: "Nous installons Claude, pas ChatGPT.",
    body: "MCP, Skills, Projects, Code, Cowork. Le seul modèle qui supporte aujourd'hui une équipe IA dirigeante opérée comme un vrai collaborateur.",
  },
  {
    kicker: "Résultat",
    title: "Vous mesurez le ROI en heures gagnées, pas en collaborateurs formés.",
    body: "15 à 25 heures par semaine reprises sur les tâches qui font tourner votre business. Pas une attestation de formation à classer.",
  },
];

export const METHOD_PILLARS: {
  letter: string;
  name: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    letter: "H",
    name: "Hyper-clarté",
    body: "Cartographier les 20% de tâches qui font 80% du résultat. On regarde votre semaine réelle, pas un organigramme.",
    icon: Compass,
  },
  {
    letter: "O",
    name: "Outils",
    body: "Installer Claude, MCP, Skills, Projects et Cowork dans votre stack existante. Aucune migration brutale, aucune dépendance verrouillée.",
    icon: Wrench,
  },
  {
    letter: "R",
    name: "Routines",
    body: "Codifier vos workflows critiques en agents IA exécutables. Ce qui prenait deux heures se déclenche en une commande.",
    icon: Workflow,
  },
  {
    letter: "I",
    name: "Implémentation",
    body: "Déployer en parallèle trois cas d'usage business à fort ROI. Pas un POC, des livrables qui sortent en production.",
    icon: Rocket,
  },
  {
    letter: "Z",
    name: "Zone de récurrence",
    body: "Transformer les gains en système qui tourne sans vous. Vous gardez le levier, l'équipe garde l'autonomie.",
    icon: Repeat,
  },
];

export const FOR_YOU: string[] = [
  "Vous dirigez une boîte qui fait entre 500k et 10M de CA et vous savez que vous êtes le goulot d'étranglement.",
  "Vous avez déjà testé ChatGPT, vous voyez le potentiel, mais rien n'est ancré dans vos opérations.",
  "Vous voulez un système qui tourne pendant vos vacances, pas un outil de plus à ouvrir le lundi matin.",
  "Vous êtes prêt à passer une journée la tête dans le moteur avec nous pour gagner les 12 mois suivants.",
  "Vous mesurez la réussite en heures reprises sur l'opération, pas en cases cochées sur un plan de formation.",
];

export const NOT_FOR_YOU: string[] = [
  "Vous cherchez une formation à distribuer à vos équipes pour cocher la case 'on a fait de l'IA'.",
  "Vous voulez tester douze outils en parallèle sans vous engager sur un protocole unique.",
  "Vous attendez de l'IA qu'elle remplace votre stratégie. Elle exécute, elle ne décide pas pour vous.",
  "Vous refusez d'arbitrer vos priorités. Sans clarté en entrée, aucun agent IA ne rattrape la dispersion.",
  "Vous voulez un prestataire qui livre seul dans son coin. Ici, on installe avec vous, pas à votre place.",
];

export type Testimonial = {
  kind: "video" | "quote";
  name: string;
  role: string;
  company: string;
  quote?: string;
  videoSrc?: string;
  poster?: string;
  avatar?: string;
};

export const TESTIMONIALS: Testimonial[] = [
  { kind: "quote", name: "Témoignage à venir", role: "CEO", company: "PME industrie" },
  { kind: "quote", name: "Témoignage à venir", role: "Fondateur", company: "Cabinet conseil" },
  { kind: "quote", name: "Témoignage à venir", role: "Dirigeant", company: "Agence marketing" },
  { kind: "quote", name: "Témoignage à venir", role: "Associé", company: "Cabinet d'expertise" },
  { kind: "quote", name: "Témoignage à venir", role: "Directrice générale", company: "Groupe service" },
  { kind: "quote", name: "Témoignage à venir", role: "CEO", company: "Scale-up B2B" },
];

export const FOUNDER_MARKERS: string[] = [
  "Top 28 mondial Favikon IA",
  "Scène partagée avec Tony Parker",
  "Learning Expedition Google San Francisco",
];

export type Offer = {
  slug: string;
  name: string;
  price: string;
  tagline: string;
  bullets: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const OFFERS: Offer[] = [
  {
    slug: "bootcamp-video",
    name: "Bootcamp Vidéo",
    price: "900€ TTC",
    tagline: "L'autonomie sur Claude en 4 heures de vidéo intensive.",
    bullets: [
      "4 heures de vidéo structurées par cas d'usage dirigeant",
      "Bibliothèque de prompts Claude prête à l'emploi",
      "Templates Projects et Skills à dupliquer",
      "Accès communauté Club Horizon IA pendant 30 jours",
    ],
    cta: "Réserver mon diagnostic",
    href: SITE.calendly,
  },
  {
    slug: "bootcamp-presentiel",
    name: "Bootcamp Présentiel",
    price: "1497€ TTC",
    tagline: "Une journée à Paris pour installer votre équipe IA dirigeante.",
    bullets: [
      "Journée intensive en petit comité de dirigeants",
      "Installation Claude, MCP et premiers agents en live",
      "Cartographie personnelle de vos 20% à forte valeur",
      "Suivi 30 jours par email pour ancrer les routines",
    ],
    cta: "Réserver mon diagnostic",
    href: SITE.calendly,
    featured: true,
  },
  {
    slug: "implementation-90-jours",
    name: "Implementation 90 jours",
    price: "6000€ HT",
    tagline:
      "On installe votre équipe IA et on la fait tourner avec vous pendant 90 jours.",
    bullets: [
      "Audit dirigeant et cartographie des 3 cas d'usage prioritaires",
      "Build des agents Claude opérés dans votre stack",
      "12 sessions hebdomadaires de pilotage et d'itération",
      "Transfert complet de propriété à la fin du programme",
    ],
    cta: "Réserver mon diagnostic",
    href: SITE.calendly,
  },
];

export const AUTOMATIONS: { title: string; body: string }[] = [
  {
    title: "Prospection LinkedIn",
    body: "Votre équipe IA repère les bons prospects, rédige des messages personnalisés et remplit votre agenda. Vous validez, elle envoie.",
  },
  {
    title: "Création de contenu",
    body: "Posts, emails et scripts produits en continu dans votre voix, à partir de vos idées. Vous restez présent sans y passer vos soirées.",
  },
  {
    title: "Relances et CRM",
    body: "Chaque appel résumé, chaque relance préparée, votre pipeline tenu à jour tout seul. Plus aucun prospect qui passe à la trappe.",
  },
  {
    title: "Devis et propositions",
    body: "Un brief vocal, et votre proposition commerciale chiffrée ressort prête à envoyer. Ce qui prenait deux heures prend cinq minutes.",
  },
  {
    title: "Reporting et analyse",
    body: "Vos chiffres, vos réunions et vos retours clients synthétisés chaque semaine. Vous pilotez sur des faits, pas au ressenti.",
  },
  {
    title: "Back-office",
    body: "Administratif, suivi, tâches répétitives confiés à des agents qui tournent 24/7, y compris quand vous dormez.",
  },
];

export const AUDIT = {
  eyebrow: "L'audit IA gratuit",
  title:
    "Réservez votre audit IA. Dans tous les cas, vous repartez avec un plan d'action.",
  subtitle:
    "30 à 45 minutes avec un expert Horizon IA. On regarde votre entreprise, on identifie où l'IA vous fait gagner le plus, et on vous remet un plan concret. Gratuit, sans engagement.",
  deliverables: [
    {
      title: "La cartographie de vos tâches automatisables",
      body: "On repère précisément où vous perdez du temps et de l'argent aujourd'hui.",
    },
    {
      title: "Vos 3 automatisations IA prioritaires",
      body: "Celles qui débloquent le plus de valeur pour votre situation, classées par impact.",
    },
    {
      title: "Un plan d'action concret et chiffré",
      body: "Les étapes, l'ordre, le résultat attendu. Vous repartez avec, même si on ne travaille pas ensemble.",
    },
    {
      title: "Une réponse franche",
      body: "On vous dit honnêtement si on peut vous aider, ou non. Aucune vente forcée.",
    },
  ],
  reassurance:
    "On n'a aucun intérêt à vous vendre quoi que ce soit si on ne peut pas vous aider. Notre réputation tient à une seule chose : les résultats de nos clients.",
  cta: "Réserver mon audit IA gratuit",
};

export const FAQS: { question: string; answer: string }[] = [
  {
    question: "Pourquoi Claude et pas ChatGPT ou Gemini ?",
    answer:
      "Parce que Claude est aujourd'hui le seul modèle qui supporte une équipe IA dirigeante, pas un simple assistant de chat. MCP, Skills, Projects, Cowork et Code permettent d'opérer des agents connectés à vos outils réels, avec une qualité de raisonnement supérieure sur les tâches de cadrage stratégique. Nous utilisons les autres modèles quand ils sont meilleurs sur une tâche précise, mais l'épine dorsale reste Claude.",
  },
  {
    question: "Combien d'heures gagnées par semaine en moyenne chez vos clients ?",
    answer:
      "Entre 15 et 25 heures par dirigeant et par semaine sur les tâches mesurables : préparation de RDV commerciaux, rédaction et publication LinkedIn, analyse de comptes-rendus, reporting interne, prospection ciblée. La fourchette dépend du point de départ, mais aucun de nos clients ne récupère moins de 10 heures la première semaine.",
  },
  {
    question: "Est-ce que mes équipes vont avoir besoin de coder ?",
    answer:
      "Non. Tout passe par des interfaces conversationnelles et des fichiers de configuration lisibles. Vous écrivez en français ce que l'agent doit faire, nous le rendons exécutable. Les équipes techniques peuvent aller plus loin avec Claude Code si elles le souhaitent, mais ce n'est jamais un prérequis pour les dirigeants.",
  },
  {
    question: "Quelle est la différence avec Mister IA ou Alegria ?",
    answer:
      "Mister IA et Alegria forment vos équipes à utiliser plusieurs outils IA. Très bien fait pour de l'acculturation. Horizon IA installe une équipe IA opérée par vous, le dirigeant, sur un seul standard, Claude, avec LinkedIn comme premier cas d'usage chiffrable. Vous ne ressortez pas avec une attestation, vous ressortez avec un système qui tourne.",
  },
  {
    question: "Combien de temps avant de voir le ROI ?",
    answer:
      "Premiers gains mesurables en semaine 1 sur la création de contenu et la préparation de réunions. ROI structurel à partir de la semaine 4 quand les routines sont codifiées. À 90 jours, vous avez basculé sur un modèle opérationnel où l'IA absorbe en permanence vos 20% les plus chronophages.",
  },
  {
    question: "Que se passe-t-il si Claude change ses prix ou ses conditions ?",
    answer:
      "Nos protocoles sont conçus pour être portables. Les Skills et Projects que nous installons sont des fichiers que vous possédez. Si Anthropic modifie son offre, nous adaptons la stack en moins de deux semaines. Le savoir-faire est dans la méthode, pas dans le verrouillage d'un fournisseur.",
  },
];

export const CLIENT_LOGOS: { name: string; src?: string }[] = Array.from(
  { length: 12 },
  (_, i) => ({ name: `Client ${i + 1}` })
);
