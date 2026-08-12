import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero/hero-section";
import { AboutSection } from "@/components/about/about-section";
import { ServicesSection } from "@/components/services/services-section";
import { DriverCtaSection } from "@/components/driver-cta/driver-cta-section";
import { HowItWorksSection } from "@/components/how-it-works/how-it-works-section";
import { FaqSection } from "@/components/faq/faq-section";
import { SiteFooter } from "@/components/footer/site-footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  keywords: [
    "wheelchair accessible transport Canberra",
    "NDIS transport ACT",
    "disability rideshare",
    "accessible taxi Canberra",
    "safe transport for elderly",
  ],
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DriverCtaSection />
        <HowItWorksSection />
        <FaqSection />
      </main>
      <SiteFooter />
    </>
  );
}
