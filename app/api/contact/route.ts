import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactAdminEmail from "@/emails/contact-admin-email";
import ContactConfirmationEmail from "@/emails/contact-confirmation-email";

const ADMIN_EMAIL = "drive2rideaustralia@gmail.com";
const FROM_ADDRESS = "Drive2Ride <noreply@drive2ride.com>";

interface ContactPayload {
  fullName: string;
  email: string;
  phone: string;
  audience: string;
  category: string;
  message: string;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { fullName, email, phone, audience, category, message } = body;

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
