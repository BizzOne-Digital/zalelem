import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Privacy Policy | ${siteConfig.business.name}`,
  description: `Privacy policy for ${siteConfig.business.name}, ${siteConfig.location.city} pest control.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <section className="bg-surface pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="heading-rule heading-rule-left font-display text-4xl font-extrabold tracking-tight text-ink">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 rounded-2xl border border-line bg-surface p-8 leading-relaxed text-muted shadow-card sm:p-10">
          <p>
            {siteConfig.business.name} respects your privacy. Information you
            submit through this website — such as your name, contact details,
            and property information — is used only to respond to your inquiry
            and provide the services you request.
          </p>
          <p>
            We do not sell, rent, or share your personal information with third
            parties for marketing purposes.
          </p>
          <p className="rounded-xl bg-band px-5 py-4 text-sm text-ink">
            This is a placeholder privacy policy. A complete policy tailored to
            the business&rsquo;s practices should be reviewed and confirmed by
            the client before launch.
          </p>
          <p>
            Questions? Contact us at{" "}
            <a
              href={siteConfig.contact.emailHref}
              className="font-bold text-green-700 underline"
            >
              {siteConfig.contact.email}
            </a>{" "}
            or{" "}
            <a
              href={siteConfig.contact.phoneHref}
              className="font-bold text-green-700 underline"
            >
              {siteConfig.contact.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
