import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";
import { ContactForm } from "./contact-form";
import { MailIcon, LocationIcon, PhoneIcon } from "./contact-icons";

const CONTACT_DETAILS = [
  { icon: PhoneIcon, label: "(02) 6280 9748", href: "tel:+61262809748" },
  {
    icon: MailIcon,
    label: "info@drive2ride.com",
    href: "mailto:info@drive2ride.com",
  },
  {
    icon: LocationIcon,
    label: "Unit 3, 46 Colbee Court, Phillip ACT 2606",
    href: "https://maps.google.com/?q=Unit+3,+46+Colbee+Court,+Phillip+ACT+2606",
  },
];

export function ContactInfoSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className={cn(CONTAINER)}>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-8">
          <Reveal x={-40} y={0}>
            <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
              Hear From Our Team
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-neutral-600">
              Whether you need support, have feedback, or want to partner
              with us, we&apos;d love to hear from you. Contact our team and
              we&apos;ll respond promptly.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              {CONTACT_DETAILS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-neutral-800 transition-colors hover:text-brand"
                >
                  <Icon />
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal x={40} y={0} delay={0.15} className="relative">
            <div className="relative overflow-hidden rounded-[20px] p-4 sm:p-6">
              <Image
                src="/contact-form-bg.png"
                alt=""
                aria-hidden="true"
                fill
                className="object-cover"
              />
              <div className="relative">
                <ContactForm turnstileSiteKey={process.env.TURNSTILE_SITE_KEY} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
