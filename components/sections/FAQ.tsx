"use client";

import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FAQS, SITE } from "@/lib/constants";

export function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">Questions tranchantes</p>
            <h2 className="mt-5 text-display-lg font-semibold tracking-tight text-balance">
              Ce qu'on nous demande vraiment.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-bone-400">
              Pas de SAV de bienvenue. On répond aux questions que les dirigeants nous
              posent en off après les premiers échanges.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-24 overflow-hidden rounded-3xl border border-bone/10 bg-gradient-to-br from-ink-800/60 to-ink-900 p-10 sm:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-display-lg font-semibold tracking-tight text-balance">
                Un diagnostic de 45 minutes. Gratuit.
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-bone-400">
                Vous repartez avec votre cartographie d'opportunités IA même si on
                ne travaille pas ensemble.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
              <Button asChild size="lg">
                <a href={SITE.calendly} target="_blank" rel="noreferrer">
                  Réserver mon diagnostic
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
