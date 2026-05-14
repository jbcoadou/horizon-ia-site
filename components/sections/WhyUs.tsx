import { WHY_US } from "@/lib/constants";

export function WhyUs() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="max-w-3xl">
          <p className="eyebrow">Différenciation</p>
          <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
            Trois choses que personne d'autre ne fait.
          </h2>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-bone/10 md:grid-cols-3">
          {WHY_US.map((item, i) => (
            <article
              key={item.title}
              className="group relative flex flex-col gap-5 bg-ink-900 p-8 transition-colors duration-300 hover:bg-ink-800/60 sm:p-10"
            >
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")} · {item.kicker}
              </span>
              <h3 className="text-2xl font-semibold tracking-tight text-bone text-balance">
                {item.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-bone-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
