import { ClientLogoMarquee } from "@/components/ClientLogoMarquee";
import { CLIENT_LOGOS } from "@/lib/constants";

export function ClientLogos() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-tight">
        <p className="text-center text-xs font-medium uppercase tracking-[0.22em] text-bone-400">
          Ils ont installé leur équipe IA avec Horizon IA
        </p>
      </div>
      <div className="mt-10">
        <ClientLogoMarquee logos={CLIENT_LOGOS} />
      </div>
    </section>
  );
}
