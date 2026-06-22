"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-bone/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-tight flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent text-[13px] font-bold text-ink-900">
            H
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Horizon IA</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-bone-400 transition-colors hover:text-bone"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button asChild size="sm">
            <a href={SITE.calendly} target="_blank" rel="noreferrer">
              Réserver mon audit gratuit
            </a>
          </Button>
        </div>

        <button
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          className="grid h-10 w-10 place-items-center rounded-full border border-bone/15 text-bone md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-bone/10 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <nav className="container-tight flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-3 text-base text-bone-200 transition-colors hover:bg-bone/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="md" className="mt-3 w-full">
              <a href={SITE.calendly} target="_blank" rel="noreferrer">
                Réserver mon audit gratuit
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
