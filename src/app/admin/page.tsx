"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { CmsContent, EditablePage, EditableService, ServiceFaq } from "@/types/cms";

type Tab = "pages" | "services" | "faqs" | "settings";

async function uploadImage(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const res = await fetch("/api/admin/upload", { method: "POST", body: form });
  if (!res.ok) throw new Error("Image upload failed.");
  const data = (await res.json()) as { url: string };
  return data.url;
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("pages");
  const [content, setContent] = useState<CmsContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [pageIdx, setPageIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/content");
      const data = (await res.json()) as CmsContent;
      setContent(data);
    };
    void load();
  }, []);

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

  const selectedPage = useMemo(
    () => (content?.pages?.[pageIdx] ? content.pages[pageIdx] : null),
    [content, pageIdx],
  );
  const selectedService = useMemo(
    () => (content?.services?.[serviceIdx] ? content.services[serviceIdx] : null),
    [content, serviceIdx],
  );

  if (!content) {
    return <main className="bg-base-950 py-16 text-center text-white">Loading admin panel...</main>;
  }

  const save = async () => {
    setSaving(true);
    setMessage("");
    try {
      await Promise.all([
        fetch("/api/admin/site", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content.site),
        }),
        fetch("/api/admin/pages", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content.pages),
        }),
        fetch("/api/admin/services", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content.services),
        }),
        fetch("/api/admin/faqs", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content.faqs),
        }),
      ]);
      setMessage("Saved successfully.");
    } catch {
      setMessage("Save failed. Check console.");
    } finally {
      setSaving(false);
    }
  };

  const parseLines = (value: string) =>
    value.split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <main className="bg-base-950 py-8 text-white">
      <div className="mx-auto mb-6 flex max-w-7xl items-center justify-between px-4 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Pest Warriors CMS
          </p>
          <h1 className="font-display text-2xl font-extrabold">Admin Dashboard</h1>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-gold-500 hover:text-gold-500"
        >
          Log out
        </button>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 px-4 lg:grid-cols-[250px_1fr] lg:px-8">
        <aside className="rounded-2xl border border-white/10 bg-base-900/80 p-4">
          {(["pages", "services", "faqs", "settings"] as Tab[]).map((item) => (
            <button
              key={item}
              className={`mb-2 w-full rounded-lg px-3 py-2 text-left font-semibold capitalize ${tab === item ? "bg-gold-500 text-base-950" : "bg-base-800 text-white"}`}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
          <button
            onClick={save}
            disabled={saving}
            className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 font-bold text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save All"}
          </button>
          {message ? <p className="mt-3 text-sm text-gold-500">{message}</p> : null}
        </aside>

        <section className="rounded-2xl border border-white/10 bg-base-900/70 p-5">
          {tab === "settings" ? (
            <div className="grid gap-4 md:grid-cols-2">
              {[
                ["Business Name", "businessName"],
                ["Legal Name", "legalName"],
                ["Tagline", "tagline"],
                ["Logo URL", "logoSrc"],
                ["City", "city"],
                ["Province", "province"],
                ["Country", "country"],
                ["Service Label", "serviceAreaLabel"],
                ["Phone", "phone"],
                ["Phone Href", "phoneHref"],
                ["Email", "email"],
                ["Email Href", "emailHref"],
                ["Facebook", "facebook"],
                ["Form Recipient", "formRecipient"],
              ].map(([label, key]) => (
                <label key={key} className="text-sm">
                  <span className="mb-1 block text-white/80">{label}</span>
                  <input
                    className="w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
                    value={content.site[key as keyof typeof content.site] as string}
                    onChange={(e) =>
                      setContent({
                        ...content,
                        site: { ...content.site, [key]: e.target.value },
                      })
                    }
                  />
                </label>
              ))}
              <label className="md:col-span-2">
                <span className="mb-1 block text-white/80">Service Areas (one per line)</span>
                <textarea
                  className="h-28 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
                  value={content.site.serviceAreas.join("\n")}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      site: { ...content.site, serviceAreas: parseLines(e.target.value) },
                    })
                  }
                />
              </label>
              <label className="md:col-span-2">
                <span className="mb-1 block text-white/80">Response Message</span>
                <textarea
                  className="h-24 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
                  value={content.site.responseMessage}
                  onChange={(e) =>
                    setContent({
                      ...content,
                      site: { ...content.site, responseMessage: e.target.value },
                    })
                  }
                />
              </label>
              <label className="md:col-span-2">
                <span className="mb-1 block text-white/80">Upload Logo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={async (e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;
                    const url = await uploadImage(file);
                    setContent({ ...content, site: { ...content.site, logoSrc: url } });
                  }}
                />
              </label>
            </div>
          ) : null}

          {tab === "pages" && selectedPage ? (
            <div className="space-y-4">
              <select
                className="rounded-lg bg-base-800 px-3 py-2"
                value={pageIdx}
                onChange={(e) => setPageIdx(Number(e.target.value))}
              >
                {content.pages.map((page, idx) => (
                  <option key={page.slug} value={idx}>{page.title}</option>
                ))}
              </select>
              <EditablePageForm
                page={selectedPage}
                onChange={(page) => {
                  const pages = [...content.pages];
                  pages[pageIdx] = page;
                  setContent({ ...content, pages });
                }}
              />
            </div>
          ) : null}

          {tab === "services" && selectedService ? (
            <div className="space-y-4">
              <select
                className="rounded-lg bg-base-800 px-3 py-2"
                value={serviceIdx}
                onChange={(e) => setServiceIdx(Number(e.target.value))}
              >
                {content.services.map((service, idx) => (
                  <option key={service.slug} value={idx}>{service.name}</option>
                ))}
              </select>
              <EditableServiceForm
                service={selectedService}
                onChange={(service) => {
                  const services = [...content.services];
                  services[serviceIdx] = service;
                  setContent({ ...content, services });
                }}
              />
            </div>
          ) : null}

          {tab === "faqs" ? (
            <FaqListEditor
              items={content.faqs}
              onChange={(faqs) => setContent({ ...content, faqs })}
            />
          ) : null}
        </section>
      </div>
    </main>
  );
}

function EditablePageForm({
  page,
  onChange,
}: {
  page: EditablePage;
  onChange: (next: EditablePage) => void;
}) {
  return (
    <div className="space-y-4">
      <TextInput label="Page Title" value={page.title} onChange={(v) => onChange({ ...page, title: v })} />
      <TextInput label="Description" value={page.description} onChange={(v) => onChange({ ...page, description: v })} />
      <TextInput label="Hero Title" value={page.heroTitle} onChange={(v) => onChange({ ...page, heroTitle: v })} />
      <TextArea label="Hero Description" value={page.heroDescription} onChange={(v) => onChange({ ...page, heroDescription: v })} />
      <TextInput label="Hero Image URL" value={page.heroImage} onChange={(v) => onChange({ ...page, heroImage: v })} />
      {page.sections.map((section, idx) => (
        <div key={section.id} className="rounded-xl border border-white/10 p-4">
          <TextInput label={`Section ${idx + 1} Title`} value={section.title} onChange={(v) => {
            const sections = [...page.sections];
            sections[idx] = { ...section, title: v };
            onChange({ ...page, sections });
          }} />
          <TextArea label="Content" value={section.content} onChange={(v) => {
            const sections = [...page.sections];
            sections[idx] = { ...section, content: v };
            onChange({ ...page, sections });
          }} />
          <TextInput label="Image URL" value={section.image} onChange={(v) => {
            const sections = [...page.sections];
            sections[idx] = { ...section, image: v };
            onChange({ ...page, sections });
          }} />
          <TextArea label="Bullets (one per line)" value={section.bullets.join("\n")} onChange={(v) => {
            const sections = [...page.sections];
            sections[idx] = { ...section, bullets: v.split("\n").map((x) => x.trim()).filter(Boolean) };
            onChange({ ...page, sections });
          }} />
        </div>
      ))}
    </div>
  );
}

function EditableServiceForm({
  service,
  onChange,
}: {
  service: EditableService;
  onChange: (next: EditableService) => void;
}) {
  return (
    <div className="space-y-4">
      <TextInput label="Service Name" value={service.name} onChange={(v) => onChange({ ...service, name: v })} />
      <TextInput label="Card Description" value={service.cardDescription} onChange={(v) => onChange({ ...service, cardDescription: v })} />
      <TextInput label="Hero Title" value={service.heroTitle} onChange={(v) => onChange({ ...service, heroTitle: v })} />
      <TextArea label="Hero Description" value={service.heroDescription} onChange={(v) => onChange({ ...service, heroDescription: v })} />
      <TextInput label="Hero Image URL" value={service.heroImage} onChange={(v) => onChange({ ...service, heroImage: v })} />
      <TextArea label="Who For" value={service.whoFor} onChange={(v) => onChange({ ...service, whoFor: v })} />
      <TextArea label="Warning Signs (one per line)" value={service.warningSigns.join("\n")} onChange={(v) => onChange({ ...service, warningSigns: v.split("\n").map((x) => x.trim()).filter(Boolean) })} />
      <TextArea label="Approach (one per line)" value={service.approach.join("\n")} onChange={(v) => onChange({ ...service, approach: v.split("\n").map((x) => x.trim()).filter(Boolean) })} />
      <FaqListEditor items={service.faq} onChange={(faq) => onChange({ ...service, faq })} />
    </div>
  );
}

function FaqListEditor({
  items,
  onChange,
}: {
  items: ServiceFaq[];
  onChange: (next: ServiceFaq[]) => void;
}) {
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={`${item.question}-${idx}`} className="rounded-xl border border-white/10 p-4">
          <TextInput label={`Question ${idx + 1}`} value={item.question} onChange={(v) => {
            const next = [...items];
            next[idx] = { ...item, question: v };
            onChange(next);
          }} />
          <TextArea label="Answer" value={item.answer} onChange={(v) => {
            const next = [...items];
            next[idx] = { ...item, answer: v };
            onChange(next);
          }} />
        </div>
      ))}
      <button
        className="rounded-lg bg-gold-500 px-4 py-2 font-bold text-base-950"
        onClick={() => onChange([...items, { question: "New question", answer: "New answer" }])}
      >
        Add FAQ
      </button>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-white/80">{label}</span>
      <input className="w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-white/80">{label}</span>
      <textarea className="h-24 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2" value={value} onChange={(e) => onChange(e.target.value)} />
    </label>
  );
}
