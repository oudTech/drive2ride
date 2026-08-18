import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";
import Script from "next/script";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const siteUrl = "https://drive2ride.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Drive2Ride | Every Ride, Built Around You",
    template: "%s | Drive2Ride",
  },
  description:
    "Drive2Ride is transport made for real people, wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride.",
  keywords: [
    "wheelchair accessible transport",
    "NDIS transport",
    "accessible rideshare",
    "disability transport Canberra",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Drive2Ride",
    title: "Drive2Ride | Every Ride, Built Around You",
    description:
      "Transport made for real people, wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive2Ride | Every Ride, Built Around You",
    description:
      "Transport made for real people, wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${raleway.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-foreground font-sans">
        <StructuredData />
        <Script
          id="smartsupp-config"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var _smartsupp = _smartsupp || {}; _smartsupp.key = '8ffb10ea367aa7a023e3f926ec7fba0bfb852d28';`,
          }}
        />
        <Script
          src="https://www.smartsuppchat.com/loader.js"
          strategy="afterInteractive"
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
