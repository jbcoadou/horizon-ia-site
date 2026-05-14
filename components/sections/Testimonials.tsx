import { TestimonialCard } from "@/components/TestimonialVideo";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section">
      <div className="container-tight">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">Preuves clients</p>
            <h2 className="mt-5 text-display-xl font-semibold tracking-tight text-balance">
              Ce qu'ils en disent.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] text-bone-400">
            Vidéos tournées en fin de programme, sans script ni promesse de remise.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} data={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
