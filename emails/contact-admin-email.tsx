import { Column, Hr, Row, Section, Text } from "@react-email/components";
import {
  BRAND,
  EmailFooter,
  EmailHeader,
  EmailShell,
} from "@/emails/components/email-shell";

export interface ContactAdminEmailProps {
  fullName: string;
  email: string;
  phone: string;
  audience: string;
  category: string;
  message: string;
  submittedAt: string;
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <Row className="mb-4">
      <Column>
        <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
          {label}
        </Text>
        <Text className="m-0 mt-1 text-[15px] leading-relaxed text-[#0f1320]">
          {value}
        </Text>
      </Column>
    </Row>
  );
}

export default function ContactAdminEmail({
  fullName = "Jordan Lee",
  email = "jordan@example.com",
  phone = "+61 400 000 000",
  audience = "An NDIS Participant",
  category = "General Enquiry",
  message = "Hi, I'd love to know more about booking recurring rides for therapy appointments.",
  submittedAt = "12 Aug 2026, 10:42 am",
}: ContactAdminEmailProps) {
  return (
    <EmailShell preview={`New contact form inquiry from ${fullName}`}>
      <EmailHeader
        eyebrow="Website Inquiry"
        title="New contact form submission"
        subtitle={submittedAt}
      />

      <Section className="px-8 py-8">
        <Text className="m-0 mb-6 text-[14px] leading-relaxed text-[#4a5169]">
          Someone just reached out through the Drive2Ride contact form.
          Here&apos;s what they shared:
        </Text>

        <Section
          className="rounded-[14px] p-6"
          style={{ backgroundColor: "#f5f7fb" }}
        >
          <Field label="Full name" value={fullName} />
          <Field label="Email address" value={email} />
          <Field label="Phone number" value={phone} />
          <Row>
            <Column className="w-1/2">
              <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
                They are
              </Text>
              <Text className="m-0 mt-1 text-[15px] leading-relaxed text-[#0f1320]">
                {audience}
              </Text>
            </Column>
            <Column className="w-1/2">
              <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
                Category
              </Text>
              <Text className="m-0 mt-1 text-[15px] leading-relaxed text-[#0f1320]">
                {category}
              </Text>
            </Column>
          </Row>

          <Hr className="my-4 border-[#e2e6f0]" />

          <Text className="m-0 text-[11px] font-bold tracking-[1.5px] text-[#9199ad] uppercase">
            Message
          </Text>
          <Text className="m-0 mt-1 text-[15px] leading-relaxed whitespace-pre-line text-[#0f1320]">
            {message}
          </Text>
        </Section>

        <Section className="mt-6 text-center">
          <a
            href={`mailto:${email}`}
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
            Reply to {fullName.split(" ")[0]}
          </a>
        </Section>
      </Section>

      <EmailFooter />
    </EmailShell>
  );
}
