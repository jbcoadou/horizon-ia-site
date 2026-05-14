import { FOUNDER_MARKERS } from "@/lib/constants";

const PARAGRAPHS = [
  "Originaire de Guingamp en Bretagne, formé entre la France et San Francisco, j'ai compris là-bas que les meilleures boîtes installent l'IA dans leur opération, pas dans leur PowerPoint.",
  "J'ai construit Horizon IA en partant d'une certitude : la France a cinq ans de retard sur l'usage business de l'IA, et les dirigeants francophones n'ont pas besoin d'une formation de plus. Ils ont besoin d'une équipe IA installée.",
  "150 000 dirigeants me suivent aujourd'hui sur LinkedIn parce que je publie ce que les autres cachent : les vrais workflows, les vrais prompts, les vrais résultats chiffrés.",
  "Avec Horizon IA, on installe ce que je fais tourner chez moi. Pas un produit générique. Une équipe IA conçue pour votre métier, opérée par vous.",
];

export function Founder() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="eyebrow">Le fondateur</p>
            <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
              Pourquoi je fais ça.
            </h2>

            <div className="mt-10 space-y-6 text-[16px] leading-relaxed text-bone-200">
              {PARAGRAPHS.map((p, i) => (
                <p key={i} className={i === 0 ? "text-bone" : ""}>
                  {p}
                </p>
              ))}
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
              {FOUNDER_MARKERS.map((marker, i) => (
                <div key={marker} className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full border border-accent/40 text-[11px] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-bone-200">{marker}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-bone/10 bg-ink-800">
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900"
              />
              <div
                aria-hidden
                className="absolute right-[-30%] top-[-30%] h-72 w-72 rounded-full bg-accent/15 blur-3xl"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-[11px] uppercase tracking-[0.24em] text-bone-500">
                  Photo portrait à remplacer dans /public/founder/portrait.jpg
                </p>
                <p className="mt-2 text-base font-semibold text-bone">
                  Jean Briac Coadou
                </p>
                <p className="text-sm text-bone-400">Fondateur · Horizon IA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
