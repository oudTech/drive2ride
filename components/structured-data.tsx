const SITE_URL = "https://drive2ride.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Drive2Ride",
  alternateName: "Drive2Ride Australia",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.svg`,
  image: `${SITE_URL}/opengraph-image.png`,
  slogan: "Every Ride, Built Around You",
  description:
    "Drive2Ride is transport made for real people, wheelchair users, people with hearing or vision needs, and anyone who wants a safer, more caring ride.",
  telephone: "+61262809748",
  email: "info@drive2ride.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 3, 46 Colbee Court",
    addressLocality: "Phillip",
    addressRegion: "ACT",
    postalCode: "2606",
    addressCountry: "AU",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: "Australian Capital Territory",
  },
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
