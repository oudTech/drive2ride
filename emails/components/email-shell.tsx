import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import type { ReactNode } from "react";

export const BRAND = "#1F74F4";
export const BRAND_DARK = "#0B3FA0";
export const INK = "#05070d";

const SITE_URL = "https://drive2ride.com";

export function EmailShell({
  preview,
  children,
}: {
  preview: string;
  children: ReactNode;
}) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Tailwind>
        <Body className="m-0 bg-[#f0f2f7] py-10 font-sans">
          <Container className="mx-auto w-full max-w-[560px] overflow-hidden rounded-[20px] bg-white shadow-sm">
            {children}
          </Container>
          <Text className="mx-auto mt-6 max-w-[560px] px-6 text-center text-xs text-[#9199ad]">
            You are receiving this because a form was submitted on{" "}
            <Link href={SITE_URL} className="text-[#9199ad] underline">
              drive2ride.com
            </Link>
            .
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
}

export function EmailHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <Section
      className="px-8 py-12 text-center"
      style={{
        backgroundColor: BRAND,
        backgroundImage: `linear-gradient(135deg, ${BRAND} 0%, ${BRAND_DARK} 100%)`,
      }}
    >
      <Text className="m-0 text-[11px] font-bold tracking-[3px] text-white/70 uppercase">
        {eyebrow}
      </Text>
      <Text className="m-0 mt-3 text-[26px] leading-tight font-extrabold text-white">
        Drive<span style={{ color: "#A4E6C8" }}>2</span>Ride
      </Text>
      <Text className="m-0 mt-2 text-[15px] leading-snug text-white/85">
        {title}
      </Text>
      {subtitle ? (
        <Text className="m-0 mt-1 text-[13px] leading-snug text-white/60">
          {subtitle}
        </Text>
      ) : null}
    </Section>
  );
}

export function EmailFooter() {
  return (
    <Section className="px-8 py-8" style={{ backgroundColor: INK }}>
      <Text className="m-0 text-center text-[14px] font-bold text-white">
        Drive2Ride
      </Text>
      <Text className="m-0 mt-1 text-center text-[12px] leading-relaxed text-white/50">
        Every ride, built around you.
      </Text>

      <Hr className="my-5 border-white/10" />

      <Section>
        <Text className="m-0 text-center text-[12px] text-white/60">
          <Link href={SITE_URL} className="text-white/70 no-underline">
            Home
          </Link>
          <span className="text-white/25"> &nbsp;•&nbsp; </span>
          <Link href={`${SITE_URL}/services`} className="text-white/70 no-underline">
            Services
          </Link>
          <span className="text-white/25"> &nbsp;•&nbsp; </span>
          <Link href={`${SITE_URL}/contact`} className="text-white/70 no-underline">
            Contact
          </Link>
        </Text>
      </Section>

      <Text className="m-0 mt-5 text-center text-[11px] text-white/35">
        © {new Date().getFullYear()} Drive2Ride Australia. All rights reserved.
      </Text>
    </Section>
  );
}
