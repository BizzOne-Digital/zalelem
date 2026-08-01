import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { siteConfig } from "@/config/site";
import { getCmsContent } from "@/lib/cms";
import {
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-schema";

export const runtime = "nodejs";

const MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp", "image/heic"];

function fieldOrEmpty(form: FormData, key: string): string {
  const value = form.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const cms = await getCmsContent();
  const site = cms.site;
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 },
    );
  }

  const data: ContactFormData = {
    fullName: fieldOrEmpty(form, "fullName"),
    phone: fieldOrEmpty(form, "phone"),
    email: fieldOrEmpty(form, "email"),
    propertyType: fieldOrEmpty(form, "propertyType"),
    pestType: fieldOrEmpty(form, "pestType"),
    serviceType: fieldOrEmpty(form, "serviceType"),
    propertySize: fieldOrEmpty(form, "propertySize"),
    bedrooms: fieldOrEmpty(form, "bedrooms"),
    floors: fieldOrEmpty(form, "floors"),
    area: fieldOrEmpty(form, "area"),
    contactMethod: fieldOrEmpty(form, "contactMethod"),
    timing: fieldOrEmpty(form, "timing"),
    message: fieldOrEmpty(form, "message"),
    consent: form.get("consent") === "on" || form.get("consent") === "true",
    company: fieldOrEmpty(form, "company"),
  };

  // Honeypot: silently accept bot submissions without sending anything.
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateContactForm(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Optional photo attachment.
  const attachments: { filename: string; content: Buffer }[] = [];
  const photo = form.get("photo");
  if (photo instanceof File && photo.size > 0) {
    if (photo.size > MAX_UPLOAD_BYTES) {
      return NextResponse.json(
        { ok: false, errors: { message: "Image must be under 5 MB." } },
        { status: 422 },
      );
    }
    if (!ALLOWED_IMAGE_TYPES.includes(photo.type)) {
      return NextResponse.json(
        { ok: false, errors: { message: "Image must be JPEG, PNG, WebP, or HEIC." } },
        { status: 422 },
      );
    }
    attachments.push({
      filename: photo.name || "upload.jpg",
      content: Buffer.from(await photo.arrayBuffer()),
    });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    // Deployment not yet configured — do not pretend the message was sent.
    console.error("Contact form: SMTP environment variables are not configured.");
    return NextResponse.json(
      {
        ok: false,
        error:
          "The contact form is temporarily unavailable. Please call or email us directly.",
      },
      { status: 503 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT ?? 587),
    secure: Number(SMTP_PORT ?? 587) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Full Name", data.fullName],
    ["Phone", data.phone],
    ["Email", data.email],
    ["Property Type", data.propertyType],
    ["Pest Type", data.pestType],
    ["Residential / Commercial", data.serviceType],
    ["Approx. Property Size", data.propertySize || "—"],
    ["Bedrooms", data.bedrooms || "—"],
    ["Floors", data.floors || "—"],
    ["Area / Postal Code", data.area || "—"],
    ["Preferred Contact Method", data.contactMethod || "—"],
    ["Desired Timing", data.timing || "—"],
  ];

  const textBody = [
    `New quote request from the ${site.businessName} website`,
    "",
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Message:",
    data.message || "—",
  ].join("\n");

  try {
    await transporter.sendMail({
      from: SMTP_FROM ?? SMTP_USER,
      to: site.formRecipient || siteConfig.contact.formRecipient,
      replyTo: data.email,
      subject: `Quote Request — ${data.pestType} (${data.serviceType}) — ${data.fullName}`,
      text: textBody,
      attachments,
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      {
        ok: false,
        error:
          "We could not send your request. Please try again or call us directly.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
