import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { FeaturesHero } from "@/components/features-page/features-hero";
import { ServicesNumberedGrid } from "@/components/features-page/services-numbered-grid";
import { DualFeaturePanel } from "@/components/features-page/dual-feature-panel";
import { HearingSupportGrid } from "@/components/features-page/hearing-support-grid";
import { EmergencySupportPanel } from "@/components/features-page/emergency-support-panel";
import { TrackRideSection } from "@/components/features-page/track-ride-section";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Smart features that make every Drive2Ride trip simple, safe, and accessible, from real time tracking to Auslan support and one tap emergency help.",
  alternates: { canonical: "/features" },
  keywords: [
    "Drive2Ride features",
    "real time ride tracking",
    "Auslan support transport",
    "emergency support rideshare",
  ],
};

export default function FeaturesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <FeaturesHero />
        <ServicesNumberedGrid />
        <DualFeaturePanel />
        <HearingSupportGrid />
        <EmergencySupportPanel />
        <TrackRideSection />
      </main>
      <SiteFooter />
    </>
  );
}
