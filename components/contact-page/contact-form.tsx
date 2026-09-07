"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Script from "next/script";
import { cn } from "@/lib/utils";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

const AUDIENCE_OPTIONS = [
  "An NDIS Participant",
  "A Family Member or Carer",
  "A Support Coordinator",
  "A Driver",
  "Other",
];

const CATEGORY_OPTIONS = [
  "General Enquiry",
  "Book a Ride",
  "Feedback",
  "Partnership",
  "Careers",
  "Other",
];

const inputClasses =
  "w-full rounded-lg border border-neutral-300 px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors focus:border-brand";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileReady, setTurnstileReady] = useState(false);
  const [renderedAt] = useState(() => Date.now());
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!turnstileReady || !TURNSTILE_SITE_KEY || !turnstileContainerRef.current) return;
    if (turnstileWidgetId.current) return;

    turnstileWidgetId.current = window.turnstile?.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => setTurnstileToken(token),
      "expired-callback": () => setTurnstileToken(""),
      "error-callback": () => setTurnstileToken(""),
    });
  }, [turnstileReady]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    } finally {
      // Turnstile tokens are single-use — reset so the widget issues a
      // fresh one for the next attempt.
      setTurnstileToken("");
      if (turnstileWidgetId.current) {
        window.turnstile?.reset(turnstileWidgetId.current);
      }
    }
  }

  return (
    <div className="rounded-[20px] bg-white p-8 shadow-xl sm:p-10">
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
          onReady={() => setTurnstileReady(true)}
        />
      ) : null}

      <h2 className="text-2xl font-bold text-neutral-900 sm:text-3xl">
        Contact Us
      </h2>

      <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
        {/* Honeypot: hidden from real visitors, bots fill every field. */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />
        <input type="hidden" name="formRenderedAt" value={renderedAt} readOnly />
        <input type="hidden" name="turnstileToken" value={turnstileToken} readOnly />

        <div>
          <label
            htmlFor="fullName"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Full name*
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            placeholder="Enter your full name"
            className={cn(inputClasses)}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-semibold text-neutral-900"
            >
              Email address*
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter Address"
              className={cn(inputClasses)}
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-semibold text-neutral-900"
            >
              Phone number*
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Enter phone number"
              className={cn(inputClasses)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="audience"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Are you
          </label>
          <select id="audience" name="audience" className={cn(inputClasses)}>
            {AUDIENCE_OPTIONS.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="category"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Which option best describes your request?
          </label>
          <select
            id="category"
            name="category"
            required
            defaultValue=""
            className={cn(inputClasses, "text-neutral-400 valid:text-neutral-900")}
          >
            <option value="" disabled>
              Select a category
            </option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option} className="text-neutral-900">
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-neutral-900"
          >
            Tell us how we can help.
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="Enter your message"
            className={cn(inputClasses, "resize-none")}
          />
        </div>

        {TURNSTILE_SITE_KEY ? <div ref={turnstileContainerRef} /> : null}

        {status === "error" ? (
          <p className="text-sm font-medium text-red-600">{errorMessage}</p>
        ) : null}

        <button
          type="submit"
          disabled={
            status === "submitting" || (Boolean(TURNSTILE_SITE_KEY) && !turnstileToken)
          }
          className="mt-2 w-full rounded-full bg-brand py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending..."
            : status === "success"
              ? "Thanks, we'll be in touch!"
              : "Submit inquiry"}
        </button>
      </form>
    </div>
  );
}
