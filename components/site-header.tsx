"use client";

import { useEffect, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTAINER } from "@/lib/container";
import { Logo } from "@/components/logo";
import { gsap } from "@/lib/gsap";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Career", href: "/career" },
  { label: "Features", href: "/features" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const pillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pillRef.current) return;
    gsap.fromTo(
      pillRef.current,
      { opacity: 0, y: -32 },
      { opacity: 1, y: 0, duration: 0.9, delay: 0.1, ease: "power3.out" },
    );
  }, []);

  useEffect(() => {
    const hero = document.getElementById("home");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { rootMargin: "-72px 0px 0px 0px", threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <header className={cn(CONTAINER, "fixed inset-x-0 top-4 z-50")}>
      <div
        ref={pillRef}
        className={cn(
          "flex items-center justify-between rounded-[20px] border-[0.99px] px-4 py-2.5 backdrop-blur-md transition-colors duration-300 sm:px-6",
          pastHero
            ? "border-white/10 bg-black/80"
            : "border-nav-border bg-nav-bg",
        )}
      >
        <a href="/" className="shrink-0">
          <Logo className="h-8 text-white sm:h-9" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="/contact"
          className={cn(
            "hidden shrink-0 rounded-full px-5 py-2 text-sm font-medium text-foreground transition-colors duration-300 lg:inline-block",
            pastHero ? "bg-white/15 hover:bg-white/25" : "bg-[#FFFFFF30] hover:bg-white/25",
          )}
        >
          Let&apos;s Talk
        </a>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 lg:hidden",
                pastHero ? "bg-white/15 hover:bg-white/25" : "bg-[#FFFFFF30] hover:bg-white/25",
              )}
            >
              <Menu className="h-5 w-5 text-foreground" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-[overlay-in_200ms_ease-out]" />
            <Dialog.Content
              className={cn(
                "fixed inset-x-4 top-4 z-50 rounded-3xl bg-white p-6 text-black shadow-2xl",
                "data-[state=open]:animate-[panel-in_250ms_ease-out]",
              )}
            >
              <div className="mb-6 flex items-center justify-between">
                <Dialog.Title asChild>
                  <Logo className="h-8 text-black" />
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 text-black"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Dialog.Close>
              </div>
              <nav className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base text-black/80 transition-colors hover:bg-black/5 hover:text-black"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 block rounded-full bg-black px-5 py-3 text-center text-sm font-medium text-white"
              >
                Contact Us
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
