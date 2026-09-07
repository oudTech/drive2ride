import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactAdminEmail from "@/emails/contact-admin-email";
import ContactConfirmationEmail from "@/emails/contact-confirmation-email";
import { verifyTurnstileToken } from "@/lib/turnstile";
import { getClientIp, isRateLimited } from "@/lib/rate-limit";

const ADMIN_EMAIL = "drive2rideaustralia@gmail.com";
const FROM_ADDRESS = "Drive2Ride <noreply@drive2ride.com>";
const ALLOWED_ORIGINS = new Set([
  "https://drive2ride.com",
  "https://www.drive2ride.com",
]);
const MIN_SUBMIT_MS = 1500; // real users can't fill this form faster than this
const MAX_MESSAGE_LENGTH = 5000;
const MAX_LINKS_IN_MESSAGE = 2;

interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  audience: string;
  category: string;
  message: string;
  turnstileToken?: string;
  website?: string; // honeypot — real users never see or fill this field
  formRenderedAt?: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function countLinks(value: string) {
  return (value.match(/https?:\/\/|www\./gi) ?? []).length;
}

function isAllowedOrigin(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin) return process.env.NODE_ENV !== "production";
  if (ALLOWED_ORIGINS.has(origin)) return true;
  return process.env.NODE_ENV !== "production" && origin.includes("localhost");
}

/** Responds as if the submission succeeded without sending anything. Used
 * for bot signals (honeypot, time-trap) so scripts don't learn what tripped. */
function fakeSuccess() {
  return NextResponse.json({ success: true });
}

export async function POST(request: Request) {
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ error: "Request not allowed." }, { status: 403 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: bots fill every field, real users never see this one.
  if (isNonEmptyString(body.website)) {
    return fakeSuccess();
  }

  // Time-trap: bots submit near-instantly, real users take a few seconds
  // to fill in a six-field form.
  const renderedAt = Number(body.formRenderedAt);
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_SUBMIT_MS) {
    return fakeSuccess();
  }

  const { fullName, email, phone, audience, category, message, turnstileToken } = body;

  if (
    !isNonEmptyString(fullName) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(audience) ||
    !isNonEmptyString(category) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json(
      { error: "Please fill in every field before submitting." },
      { status: 400 },
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  if (
    message.length > MAX_MESSAGE_LENGTH ||
    countLinks(message) > MAX_LINKS_IN_MESSAGE ||
    countLinks(fullName) > 0
  ) {
    return NextResponse.json(
      { error: "Please remove links and shorten your message, then try again." },
      { status: 400 },
    );
  }

  if (!isNonEmptyString(turnstileToken) || !(await verifyTurnstileToken(turnstileToken, clientIp))) {
    return NextResponse.json(
      { error: "We couldn't verify you're human. Please try again." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email sending is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const submittedAt = new Date().toLocaleString("en-AU", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Australia/Sydney",
  });

  try {
    const [adminResult, confirmationResult] = await Promise.all([
      resend.emails.send({
        from: FROM_ADDRESS,
        to: ADMIN_EMAIL,
        replyTo: email,
        subject: `New inquiry from ${fullName}`,
        react: ContactAdminEmail({
          fullName,
          email,
          phone,
          audience,
          category,
          message,
          submittedAt,
        }),
      }),
      resend.emails.send({
        from: FROM_ADDRESS,
        to: email,
        subject: "We've received your inquiry",
        react: ContactConfirmationEmail({
          fullName,
          category,
          message,
        }),
      }),
    ]);

    if (adminResult.error || confirmationResult.error) {
      console.error(
        "Resend error:",
        adminResult.error ?? confirmationResult.error,
      );
      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form send failure:", error);
    return NextResponse.json(
      { error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
