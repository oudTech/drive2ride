import { Logo } from "@/components/logo";
import { CONTAINER } from "@/lib/container";
import { cn } from "@/lib/utils";
import { FooterBadgeOne, FooterBadgeTwo } from "./footer-badges";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./social-icons";

const FOOTER_COLUMNS = [
  {
    title: "For Drivers",
    links: [{ label: "Become A Driver", href: "/career" }],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "How it works", href: "/how-it-works" },
      { label: "Our Services", href: "/services" },
      { label: "Career", href: "/career" },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "#", icon: FacebookIcon },
  { label: "Instagram", href: "#", icon: InstagramIcon },
  { label: "LinkedIn", href: "#", icon: LinkedinIcon },
];

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className={cn(CONTAINER, "pt-16 sm:pt-20")}>
        <h2 className="text-2xl font-bold sm:text-3xl">
          Acknowledgement of Country
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/60 sm:text-base">
          We acknowledge the gunnawal people as traditional custodians of the
          ACT and recognise any other people or families with connection to the
          lands of the ACT and region. We acknowledge and respect their
          continuing culture and the contribution they make to the life of this
          city and this region.
        </p>

        <div className="mt-12 flex flex-col gap-12 border-b border-white/10 pb-12 lg:mt-16 lg:flex-row lg:justify-between lg:gap-8 lg:pb-16">
          <div>
            <Logo className="h-9 text-white" />
            <div className="mt-6 space-y-1 text-xs text-white/50 sm:text-sm">
              <p>DRIVE2RIDE PTY LTD IS REGISTERED IN AUSTRALIA</p>
              <p>TRADEMARK NO. 2207692. ABN NO. 36621483341. CANBERRA</p>
              <p>OFFICE: UNIT 3, 46 COLBEE COURT, PHILLIP ACT 2606</p>
            </div>
            <div className="mt-5 flex items-center gap-2">
              <FooterBadgeOne />
              <FooterBadgeTwo />
              <img
                src="/lgbtq-icon.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              <img
                src="/aus-icon.svg"
                alt=""
                aria-hidden="true"
                className="h-6 w-6"
              />
              <img
                src="/ndis-icon.svg"
                alt="Registered NDIS Provider"
                className="h-6 w-auto"
              />
            </div>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:gap-16">
            {FOOTER_COLUMNS.map((column) => (
              <div
                key={column.title}
                className={
                  column.title === "Company" ? "col-span-2 sm:col-span-1" : ""
                }
              >
                <h3 className="font-bold text-white">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-white/60 transition-colors hover:text-white"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div
          className={cn(
            CONTAINER,
            "flex flex-col items-center gap-1 py-6 text-center text-sm text-white/50",
          )}
        >
          <p>© {year} Drive2Ride. All rights reserved.</p>
          <p>
            Designed by{" "}
            <a
              href="https://oudtechnologies.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              OudTech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
