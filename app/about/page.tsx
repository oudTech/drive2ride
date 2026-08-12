import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { AboutHero } from "@/components/about-page/about-hero";
import { AboutIntro } from "@/components/about-page/about-intro";
import { ValuesVision } from "@/components/values-vision";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Drive2Ride was built for real people, wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride.",
  alternates: { canonical: "/about" },
  keywords: [
    "about Drive2Ride",
    "accessible transport company Canberra",
    "wheelchair transport provider ACT",
  ],
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <AboutHero />
        <AboutIntro />
        <ValuesVision />
      </main>
      <SiteFooter />
    </>
  );
}
