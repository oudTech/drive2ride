import { Hr, Section, Text } from "@react-email/components";
import {
  BRAND,
  EmailFooter,
  EmailHeader,
  EmailShell,
} from "@/emails/components/email-shell";

export interface ContactConfirmationEmailProps {
  fullName: string;
  category: string;
  message: string;
}

export default function ContactConfirmationEmail({
  fullName = "Jordan Lee",
  category = "General Enquiry",
  message = "Hi, I'd love to know more about booking recurring rides for therapy appointments.",
}: ContactConfirmationEmailProps) {
  const firstName = fullName.split(" ")[0] || fullName;

  return (
    <EmailShell preview="We've received your message and we're on it.">
      <EmailHeader
        eyebrow="Inquiry Received"
        title={`Thanks for reaching out, ${firstName}!`}
        subtitle=""
      />

      <Section className="px-8 py-8">
        <Text className="m-0 text-[15px] leading-relaxed text-[#0f1320]">
          Hi {firstName},
        </Text>
        <Text className="m-0 mt-4 text-[15px] leading-relaxed text-[#0f1320]">
          Thank you for getting in touch with Drive2Ride. Your inquiry has
          been received, and a member of our team will personally review it
          and get back to you shortly. We treat every message with the same
          care we bring to every ride.
        </Text>

        <Section
          className="mt-6 rounded-[14px] p-6"
          style={{ backgroundColor: "#f5f7fb" }}
        >
          <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
            Category
          </Text>
          <Text className="m-0 mt-1 text-[15px] font-semibold text-[#0f1320]">
            {category}
          </Text>

          <Hr className="my-4 border-[#e2e6f0]" />

          <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
            Your message
          </Text>
          <Text className="m-0 mt-1 text-[15px] leading-relaxed whitespace-pre-line text-[#4a5169]">
            {message}
          </Text>
        </Section>

        <Text className="m-0 mt-6 text-[15px] leading-relaxed text-[#0f1320]">
          Need to reach us sooner? Just reply to this email and it will land
          directly with our team.
        </Text>

        <Section className="mt-6 text-center">
          <a
            href="https://drive2ride.com"
            style={{
              backgroundColor: BRAND,
              color: "#ffffff",
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Visit Drive2Ride
          </a>
        </Section>
      </Section>

      <EmailFooter />
    </EmailShell>
  );
}
