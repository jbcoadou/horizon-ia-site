import { AUTOMATIONS } from "@/lib/constants";

export function Automations() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="eyebrow">Concrètement</p>
          <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
            Ce qu'on installe, et qui tourne pour vous.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-bone-400">
            Pas de la théorie. Des automatisations réelles, opérées sur Claude,
            qui produisent pendant que vous pilotez.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {AUTOMATIONS.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col gap-3 rounded-2xl border border-bone/10 bg-ink-800/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-bone/20 hover:bg-ink-800/60"
            >
              <h3 className="text-lg font-semibold tracking-tight text-bone">
                {item.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-bone-400">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
