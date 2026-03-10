import {
  Html,
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Img,
  Section,
  Text,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  reply_to?: string;
}

export default function ContactEmail({
  name,
  email,
  phone,
  message,reply_to
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body
        style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f5f0" }}>
        <Container
          style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
          <Section style={{ textAlign: "center" as const }}>
            <Img src="/images/logo.png" width="200" alt="Lyschor Real Estate" />{" "}
            {/* Add your logo to public/images */}
          </Section>
          <Hr />
          <Heading style={{ color: "#1a1a1a", fontSize: "24px" }}>
            New Consultation Request
          </Heading>
          <Text style={{ color: "#1a1a1a" }}>Hi Tolulope,</Text>
          <Text style={{ color: "#1a1a1a" }}>
            You have a new inquiry from the website:
          </Text>
          <Section
            style={{
              backgroundColor: "#f0f0f0",
              padding: "20px",
              borderRadius: "8px",
            }}>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone (WhatsApp):</strong> {phone}
            </Text>
            <Text>
              <strong>Message:</strong>
            </Text>
            <Text
              style={{
                whiteSpace: "pre-wrap",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "4px",
              }}>
              {message}
            </Text>
          </Section>
          <Hr />
          <Text style={{ color: "#666", fontSize: "14px" }}>
            This is an automated message from Lyschor Real Estate. Reply
            directly to respond to {name}.
          </Text>
          <Text style={{ color: "#666", fontSize: "12px" }}>
            Best, Lyschor Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
