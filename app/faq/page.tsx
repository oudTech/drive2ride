import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { FaqPageHero } from "@/components/faq-page/faq-page-hero";
import { FaqAccordion } from "@/components/faq-page/faq-accordion";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking, accessibility, safety, and how Drive2Ride works.",
  alternates: { canonical: "/faq" },
  keywords: [
    "Drive2Ride FAQ",
    "accessible rideshare questions",
    "NDIS transport booking help",
  ],
};

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FaqPageHero />
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className={cn(CONTAINER)}>
            <Reveal y={30} className="text-center">
              <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
                Frequently asked Questions
              </h2>
            </Reveal>

            <Reveal y={40} delay={0.1} className="mx-auto mt-12 max-w-3xl">
              <FaqAccordion />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
