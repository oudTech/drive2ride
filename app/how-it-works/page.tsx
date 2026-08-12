import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { HowItWorksPageHero } from "@/components/how-it-works-page/how-it-works-page-hero";
import { FeatureRow } from "@/components/how-it-works-page/feature-row";
import { RoutePlannerSection } from "@/components/how-it-works-page/route-planner-section";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "See how Drive2Ride keeps every ride safe, from one tap emergency support to real time AI powered safety monitoring.",
  alternates: { canonical: "/how-it-works" },
  keywords: [
    "how Drive2Ride works",
    "accessible ride booking process",
    "safety monitoring rideshare",
  ],
};

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HowItWorksPageHero />
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className={cn(CONTAINER)}>
            <div className="flex flex-col gap-16 lg:gap-24">
              <FeatureRow
                imageSrc="/emergency-mockup.png"
                imageAlt="Drive2Ride Emergency Support screen"
                title="Emergency support"
                description="Drive2Ride's Emergency Support features are designed to protect passengers and drivers during every trip. With one tap, users can trigger an SOS alert, share their live location with emergency contacts, and notify support teams for immediate assistance."
              />
              <FeatureRow
                imageSrc="/safety-mockup.png"
                imageAlt="Drive2Ride Safety Monitor screen"
                title="Safety Monitor"
                description="Monitor vehicle and passenger safety in real time with AI powered alerts for speed, seatbelts, cabin conditions, air quality, and other critical safety indicators. It monitors speed, cabin temperature, seatbelt status, air quality, and other real time conditions, instantly alerting drivers and operators to potential risks."
                reverse
              />
              <RoutePlannerSection />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
