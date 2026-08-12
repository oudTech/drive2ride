import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { LegalPageHeader } from "@/components/legal/legal-page-header";
import { LegalContent } from "@/components/legal/legal-blocks";
import { PRIVACY_POLICY_BLOCKS } from "@/components/legal/privacy-policy-content";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Drive2Ride collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <LegalPageHeader title="Privacy policy" />
        <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className={cn(CONTAINER)}>
            <Reveal y={20} className="mx-auto max-w-3xl">
              <LegalContent blocks={PRIVACY_POLICY_BLOCKS} />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
