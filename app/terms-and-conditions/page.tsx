import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/footer/site-footer";
import { LegalPageHeader } from "@/components/legal/legal-page-header";
import { LegalContent } from "@/components/legal/legal-blocks";
import { TERMS_BLOCKS } from "@/components/legal/terms-content";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms and conditions governing your use of Drive2Ride.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1 bg-white">
        <LegalPageHeader title="Terms & Condition" />
        <section className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <div className={cn(CONTAINER)}>
            <div className="mx-auto max-w-3xl">
              <LegalContent blocks={TERMS_BLOCKS} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
