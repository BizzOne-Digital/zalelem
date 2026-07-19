"use client";

import { useRef, useState } from "react";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import {
  bedroomOptions,
  contactMethodOptions,
  floorOptions,
  pestOptions,
  propertyTypeOptions,
  serviceTypeOptions,
  timingOptions,
  validateContactForm,
  type ContactFormData,
  type FieldErrors,
} from "@/lib/contact-schema";
import { siteConfig } from "@/config/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-white/12 bg-base-950/70 px-4 py-3 text-[0.95rem] text-white placeholder:text-muted/60 focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/25 aria-[invalid=true]:border-red-400 [&>option]:bg-base-950 [&>option]:text-white";

function Field({
  label,
  htmlFor,
  required,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-sm font-bold text-white"
      >
        {label}
        {required && (
          <span className="text-gold-500" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="mt-1.5 text-sm font-medium text-red-400"
        >
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const data: ContactFormData = {
      fullName: String(formData.get("fullName") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      email: String(formData.get("email") ?? ""),
      propertyType: String(formData.get("propertyType") ?? ""),
      pestType: String(formData.get("pestType") ?? ""),
      serviceType: String(formData.get("serviceType") ?? ""),
      propertySize: String(formData.get("propertySize") ?? ""),
      bedrooms: String(formData.get("bedrooms") ?? ""),
      floors: String(formData.get("floors") ?? ""),
      area: String(formData.get("area") ?? ""),
      contactMethod: String(formData.get("contactMethod") ?? ""),
      timing: String(formData.get("timing") ?? ""),
      message: String(formData.get("message") ?? ""),
      consent: formData.get("consent") === "on",
      company: String(formData.get("company") ?? ""),
    };

    const clientErrors = validateContactForm(data);
    setErrors(clientErrors);
    setServerError(null);
    if (Object.keys(clientErrors).length > 0) {
      const firstKey = Object.keys(clientErrors)[0];
      formEl.querySelector<HTMLElement>(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        return;
      }
      if (json.errors) setErrors(json.errors);
      setServerError(
        json.error ??
          "Something in the form needs attention. Please review and try again.",
      );
      setStatus("error");
    } catch {
      setServerError(
        "We could not reach the server. Please check your connection and try again, or call us directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-green-500/30 bg-green-700/10 p-8 text-center sm:p-12"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-white">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="font-display mt-5 text-2xl font-extrabold text-white">
          Request Received
        </h3>
        <p className="mx-auto mt-3 max-w-md text-muted">
          Thank you — your request has been sent to our team.{" "}
          {siteConfig.contact.responseMessage} If your situation is urgent,
          call us at{" "}
          <a
            href={siteConfig.contact.phoneHref}
            className="font-bold text-gold-500 underline"
          >
            {siteConfig.contact.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="space-y-5"
      aria-label="Request a quote"
    >
      {/* Honeypot — hidden from real users, tempting to bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="fullName" required error={errors.fullName}>
          <input
            type="text"
            id="fullName"
            name="fullName"
            autoComplete="name"
            required
            aria-invalid={!!errors.fullName}
            aria-describedby={errors.fullName ? "fullName-error" : undefined}
            className={inputClass}
          />
        </Field>
        <Field label="Phone Number" htmlFor="phone" required error={errors.phone}>
          <input
            type="tel"
            id="phone"
            name="phone"
            inputMode="tel"
            autoComplete="tel"
            placeholder="403-555-0123"
            required
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            className={inputClass}
          />
        </Field>
      </div>

      <Field label="Email Address" htmlFor="email" required error={errors.email}>
        <input
          type="email"
          id="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={inputClass}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Property Type"
          htmlFor="propertyType"
          required
          error={errors.propertyType}
        >
          <select
            id="propertyType"
            name="propertyType"
            required
            defaultValue=""
            aria-invalid={!!errors.propertyType}
            className={inputClass}
          >
            <option value="" disabled>
              Select property type
            </option>
            {propertyTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field
          label="Type of Pest"
          htmlFor="pestType"
          required
          error={errors.pestType}
        >
          <select
            id="pestType"
            name="pestType"
            required
            defaultValue=""
            aria-invalid={!!errors.pestType}
            className={inputClass}
          >
            <option value="" disabled>
              Select pest
            </option>
            {pestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        label="Residential or Commercial"
        htmlFor="serviceType"
        required
        error={errors.serviceType}
      >
        <div
          role="radiogroup"
          aria-label="Residential or commercial"
          className="grid grid-cols-2 gap-3"
        >
          {serviceTypeOptions.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-white/12 bg-base-950/70 px-4 py-3 text-sm font-bold text-white transition-colors has-checked:border-gold-500 has-checked:bg-gold-500/10 has-checked:text-gold-400"
            >
              <input
                type="radio"
                name="serviceType"
                value={option}
                className="h-4 w-4 accent-green-600"
              />
              {option}
            </label>
          ))}
        </div>
      </Field>

      <div className="grid gap-5 sm:grid-cols-3">
        <Field label="Approx. Size (sq ft)" htmlFor="propertySize">
          <input
            type="text"
            id="propertySize"
            name="propertySize"
            inputMode="numeric"
            placeholder="e.g. 1,800"
            className={inputClass}
          />
        </Field>
        <Field label="Bedrooms" htmlFor="bedrooms">
          <select id="bedrooms" name="bedrooms" defaultValue="" className={inputClass}>
            <option value="">Select</option>
            {bedroomOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Floors" htmlFor="floors">
          <select id="floors" name="floors" defaultValue="" className={inputClass}>
            <option value="">Select</option>
            {floorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Calgary Area or Postal Code" htmlFor="area">
          <input
            type="text"
            id="area"
            name="area"
            autoComplete="postal-code"
            placeholder="e.g. T2P or Beltline"
            className={inputClass}
          />
        </Field>
        <Field label="Preferred Contact Method" htmlFor="contactMethod">
          <select
            id="contactMethod"
            name="contactMethod"
            defaultValue=""
            className={inputClass}
          >
            <option value="">Select</option>
            {contactMethodOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Desired Service Timing" htmlFor="timing">
        <select id="timing" name="timing" defaultValue="" className={inputClass}>
          <option value="">Select</option>
          {timingOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us what you are seeing, where, and for how long."
          aria-invalid={!!errors.message}
          className={inputClass}
        />
      </Field>

      <Field label="Photo (optional)" htmlFor="photo">
        <input
          type="file"
          id="photo"
          name="photo"
          accept="image/jpeg,image/png,image/webp,image/heic"
          className="w-full rounded-xl border border-dashed border-white/20 bg-base-950/70 px-4 py-3 text-sm text-muted file:mr-4 file:rounded-lg file:border-0 file:bg-green-600/20 file:px-4 file:py-2 file:text-sm file:font-bold file:text-green-400"
        />
        <p className="mt-1.5 text-xs text-muted">
          A photo of the pest or affected area helps us assess faster. Max 5 MB.
        </p>
      </Field>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            name="consent"
            required
            aria-invalid={!!errors.consent}
            className="mt-1 h-4 w-4 shrink-0 accent-green-600"
          />
          <span className="text-sm text-muted">
            I agree to be contacted by {siteConfig.business.name} about my
            request using the details provided above.
            <span className="text-gold-500" aria-hidden="true">
              {" "}
              *
            </span>
          </span>
        </label>
        {errors.consent && (
          <p role="alert" className="mt-1.5 text-sm font-medium text-red-400">
            {errors.consent}
          </p>
        )}
      </div>

      {serverError && (
        <div
          role="alert"
          className="flex items-start gap-3 rounded-xl border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-300"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {serverError}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-base font-bold text-base-950 shadow-gold transition-all hover:bg-gold-400 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" aria-hidden="true" />
            Request My Free Quote
          </>
        )}
      </button>
    </form>
  );
}
