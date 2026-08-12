import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { ContactHero } from "@/components/contact-page/contact-hero";
import { ContactInfoSection } from "@/components/contact-page/contact-info-section";
import { ContactMap } from "@/components/contact-page/contact-map";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Drive2Ride team for support, feedback, or partnership enquiries.",
  alternates: { canonical: "/contact" },
  keywords: [
    "contact Drive2Ride",
    "book accessible ride Canberra",
    "NDIS transport enquiry",
  ],
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <ContactHero />
        <ContactInfoSection />
        <ContactMap />
      </main>
      <SiteFooter />
    </>
  );
}
