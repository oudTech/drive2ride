import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { ServicesHero } from "@/components/services-page/services-hero";
import { FeaturesGridSection } from "@/components/services-page/features-grid-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Drive2Ride connects people with disability, elderly passengers, carers, families, and support providers with safe, reliable, and accessible transport across Canberra and the ACT.",
  alternates: { canonical: "/services" },
  keywords: [
    "NDIS transport services",
    "wheelchair accessible rides Canberra",
    "disability support transport ACT",
    "elderly transport services",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero />
        <FeaturesGridSection />
      </main>
      <SiteFooter />
    </>
  );
}
