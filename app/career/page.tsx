import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { CareerHero } from "@/components/career-page/career-hero";
import { WorkingAtSection } from "@/components/career-page/working-at-section";
import { AccessibleServicesSection } from "@/components/career-page/accessible-services-section";
import { ValuesVision } from "@/components/values-vision";

export const metadata: Metadata = {
  title: "Career",
  description:
    "Join Drive2Ride as a driver and help provide safe, reliable, and respectful transport for people across the community.",
  alternates: { canonical: "/career" },
  keywords: [
    "become a driver Canberra",
    "NDIS driver jobs ACT",
    "accessible transport driver careers",
  ],
};

export default function CareerPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <CareerHero />
        <WorkingAtSection />
        <AccessibleServicesSection />
        <ValuesVision />
      </main>
      <SiteFooter />
    </>
  );
}
