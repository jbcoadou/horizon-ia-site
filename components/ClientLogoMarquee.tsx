import Image from "next/image";

export type ClientLogo = { name: string; src?: string };

export function ClientLogoMarquee({ logos }: { logos: ClientLogo[] }) {
  const items = [...logos, ...logos];

  return (
    <div className="mask-fade-r relative overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-12 py-2">
        {items.map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="grid h-14 w-40 shrink-0 place-items-center rounded-lg border border-bone/10 bg-ink-800/40 px-4 text-xs uppercase tracking-[0.16em] text-bone-400"
            aria-hidden={i >= logos.length}
          >
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={36}
                className="h-7 w-auto opacity-70"
              />
            ) : (
              <span>{logo.name}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
