import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="bg-[var(--background)] px-8 pb-24 pt-40 md:px-12 lg:px-16">
        <div className="mx-auto max-w-[var(--site-max-width)]">
          <h1
            className="mb-12 font-sans font-light leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(36px, 3vw, 70px)" }}
          >
            Privacy Policy
          </h1>

          <div className="prose max-w-3xl font-sans text-base font-light leading-relaxed text-[var(--muted)]">
            <p className="mb-6">Last updated: January 2025</p>

            <h2 className="mb-4 mt-10 font-sans text-xl font-medium text-foreground">1. Information We Collect</h2>
            <p className="mb-6">
              We may collect personal information that you voluntarily provide when contacting us through our website, including your name, email address, and phone number. We also automatically collect certain information about your device and usage of our website through cookies and similar technologies.
            </p>

            <h2 className="mb-4 mt-10 font-sans text-xl font-medium text-foreground">2. How We Use Your Information</h2>
            <p className="mb-6">
              We use the information we collect to respond to your inquiries, provide our services, improve our website, and communicate with you about our work. We do not sell your personal information to third parties.
            </p>

            <h2 className="mb-4 mt-10 font-sans text-xl font-medium text-foreground">3. Cookies</h2>
            <p className="mb-6">
              Our website uses cookies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.
            </p>

            <h2 className="mb-4 mt-10 font-sans text-xl font-medium text-foreground">4. Third-Party Services</h2>
            <p className="mb-6">
              We may use third-party services such as analytics providers and hosting services that may collect information about your use of our website. These services have their own privacy policies.
            </p>

            <h2 className="mb-4 mt-10 font-sans text-xl font-medium text-foreground">5. Contact</h2>
            <p className="mb-6">
              If you have questions about this privacy policy, please contact us at{" "}
              <a href="mailto:creative@murka.id" className="text-foreground underline transition-colors hover:text-[var(--muted)]">
                creative@murka.id
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
