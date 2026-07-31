import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `Terms & Conditions | ${siteConfig.business.name}`,
  description: `Terms and conditions for ${siteConfig.business.name}, ${siteConfig.location.city} pest control.`,
  alternates: { canonical: "/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <section className="bg-surface pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <h1 className="heading-rule heading-rule-left font-display text-4xl font-extrabold tracking-tight text-ink">
          Terms &amp; Conditions
        </h1>
        <div className="mt-8 space-y-6 rounded-2xl border border-line bg-surface p-8 leading-relaxed text-muted shadow-card sm:p-10">
          <p>
            Website content is provided for general information about{" "}
            {siteConfig.business.name}&rsquo;s services. Service availability,
            treatment recommendations, warranties, and promotional offers vary
            by pest, property, and treatment plan, and are confirmed at the
            time of booking.
          </p>
          <p>
            The 20% new-customer offer applies to qualifying first services
            only. Offer eligibility and service terms may vary — contact us for
            details.
          </p>
          <p className="rounded-xl bg-band px-5 py-4 text-sm text-ink">
            This is a placeholder terms document. Complete terms tailored to
            the business should be reviewed and confirmed by the client before
            launch.
          </p>
          <p>
            Questions? Contact us at{" "}
            <a
              href={siteConfig.contact.emailHref}
              className="font-bold text-green-700 underline"
            >
              {siteConfig.contact.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
