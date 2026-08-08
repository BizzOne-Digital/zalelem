"use client";

import { useMemo, useState } from "react";
import {
  bedroomOptions,
  floorOptions,
  propertyTypeOptions,
} from "@/lib/contact-schema";

type Severity = "not-sure" | "early" | "moderate" | "severe";
type Preference = "not-sure" | "gold" | "silver" | "bronze";

const severityOptions: { value: Severity; label: string }[] = [
  { value: "not-sure", label: "Not sure yet" },
  { value: "early", label: "Early / few signs" },
  { value: "moderate", label: "Moderate activity" },
  { value: "severe", label: "Severe / widespread" },
];

const preferenceOptions: { value: Preference; label: string }[] = [
  { value: "not-sure", label: "Not sure — recommend for me" },
  { value: "gold", label: "Gold (Heat)" },
  { value: "silver", label: "Silver (Combination)" },
  { value: "bronze", label: "Bronze (Aprehend®)" },
];

function recommend(severity: Severity, preference: Preference): {
  tier: "Gold" | "Silver" | "Bronze";
  reason: string;
} {
  if (preference === "gold") {
    return { tier: "Gold", reason: "You selected the Gold heat package." };
  }
  if (preference === "silver") {
    return { tier: "Silver", reason: "You selected the Silver combination package." };
  }
  if (preference === "bronze") {
    return { tier: "Bronze", reason: "You selected the Bronze Aprehend® package." };
  }
  if (severity === "severe") {
    return {
      tier: "Gold",
      reason:
        "Widespread activity usually benefits from same-day thermal heat (Gold).",
    };
  }
  if (severity === "moderate") {
    return {
      tier: "Silver",
      reason:
        "Moderate infestations often suit a dual-action combination plan (Silver).",
    };
  }
  return {
    tier: "Bronze",
    reason:
      "Early or uncertain activity often starts with Aprehend® residual protection (Bronze).",
  };
}

export function PackageFactQuestionnaire() {
  const [propertyType, setPropertyType] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [floors, setFloors] = useState("");
  const [severity, setSeverity] = useState<Severity>("not-sure");
  const [preference, setPreference] = useState<Preference>("not-sure");
  const [noticed, setNoticed] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("Alberta");
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const suggestion = useMemo(
    () => recommend(severity, preference),
    [severity, preference],
  );

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const message = [
      "Bed bug package fact questionnaire",
      `Suggested package: ${suggestion.tier} — ${suggestion.reason}`,
      `Severity: ${severity}`,
      `Preferred package: ${preference}`,
      `How long noticed: ${noticed || "n/a"}`,
      `City: ${city}`,
      `Province: ${province}`,
    ].join("\n");

    const form = new FormData();
    form.set("fullName", fullName);
    form.set("phone", phone);
    form.set("email", email);
    form.set("propertyType", propertyType || "House");
    form.set("pestType", "Bed Bugs");
    form.set("serviceType", "Residential");
    form.set("propertySize", propertySize);
    form.set("bedrooms", bedrooms);
    form.set("floors", floors);
    form.set("area", city);
    form.set("contactMethod", "Phone Call");
    form.set("timing", "As soon as possible");
    form.set("message", message);
    form.set("consent", "true");
    form.set("company", "");

    try {
      const res = await fetch("/api/contact", { method: "POST", body: form });
      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus("error");
        setError(json.error || "Could not send. Please call us or try again.");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
      setError("Network error. Please call us or try again.");
    }
  }

  if (status === "ok") {
    return (
      <div className="rounded-2xl border border-green-600/30 bg-green-50 p-8 text-center">
        <h3 className="font-display text-2xl font-bold text-ink">
          Thank you — we received your details
        </h3>
        <p className="mt-3 text-muted">
          Our team will follow up about the {suggestion.tier} package
          recommendation and next steps.
        </p>
      </div>
    );
  }

  const field =
    "mt-1 w-full rounded-lg border border-line bg-surface px-3 py-2.5 text-sm text-ink";

  return (
    <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-8">
      <div>
        <h3 className="font-display text-2xl font-bold text-ink">
          Fact questionnaire
        </h3>
        <p className="mt-2 text-sm text-muted">
          Answer a few questions so we can recommend Gold, Silver, or Bronze and
          prepare an accurate quote.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Property type
          <select
            required
            className={field}
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
          >
            <option value="">Select…</option>
            {propertyTypeOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink">
          Approx. size (sq ft)
          <input
            className={field}
            value={propertySize}
            onChange={(e) => setPropertySize(e.target.value)}
            placeholder="e.g. 1200"
          />
        </label>
        <label className="block text-sm font-semibold text-ink">
          # of bedrooms
          <select
            className={field}
            value={bedrooms}
            onChange={(e) => setBedrooms(e.target.value)}
          >
            <option value="">Select…</option>
            {bedroomOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink">
          # of floors
          <select
            className={field}
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
          >
            <option value="">Select…</option>
            {floorOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink">
          Infestation severity
          <select
            className={field}
            value={severity}
            onChange={(e) => setSeverity(e.target.value as Severity)}
          >
            {severityOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-semibold text-ink">
          How long have you noticed activity?
          <input
            className={field}
            value={noticed}
            onChange={(e) => setNoticed(e.target.value)}
            placeholder="e.g. 2 weeks"
          />
        </label>
        <label className="block text-sm font-semibold text-ink sm:col-span-2">
          Preferred package
          <select
            className={field}
            value={preference}
            onChange={(e) => setPreference(e.target.value as Preference)}
          >
            {preferenceOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="rounded-xl border border-gold-500/40 bg-band px-4 py-4">
        <p className="text-xs font-bold tracking-wide text-green-700 uppercase">
          Suggested package
        </p>
        <p className="mt-1 font-display text-xl font-extrabold text-ink">
          {suggestion.tier}
        </p>
        <p className="mt-1 text-sm text-muted">{suggestion.reason}</p>
        <a
          href={`#${suggestion.tier.toLowerCase()}`}
          className="mt-3 inline-flex text-sm font-bold text-green-700 hover:text-lime-500"
        >
          Jump to {suggestion.tier} details →
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-ink">
          Full name
          <input
            required
            className={field}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Phone
          <input
            required
            className={field}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold text-ink">
          Email
          <input
            required
            type="email"
            className={field}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block text-sm font-semibold text-ink">
          City
          <input
            required
            className={field}
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Calgary"
          />
        </label>
        <label className="block text-sm font-semibold text-ink sm:col-span-2">
          Province
          <select
            className={field}
            value={province}
            onChange={(e) => setProvince(e.target.value)}
          >
            <option>Alberta</option>
            <option>British Columbia</option>
          </select>
        </label>
      </div>

      {error ? <p className="text-sm font-semibold text-red-600">{error}</p> : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Submit questionnaire"}
      </button>
    </form>
  );
}
