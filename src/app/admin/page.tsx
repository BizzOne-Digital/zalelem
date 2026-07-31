"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type {
  CmsContent,
  EditablePage,
  EditableSection,
  EditableService,
  ServiceFaq,
} from "@/types/cms";

type Tab = "pages" | "services" | "faqs" | "settings";

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("pages");
  const [content, setContent] = useState<CmsContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [pageIdx, setPageIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [message, setMessage] = useState("");
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/content");
        if (!res.ok) throw new Error("Failed to load content");
        const data = (await res.json()) as CmsContent;
        setContent(data);
      } catch {
        setLoadError("Could not load CMS content from the database.");
      }
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

  if (loadError) {
    return (
      <main className="bg-base-950 py-16 text-center text-white">
        <p>{loadError}</p>
      </main>
    );
  }

  if (!content) {
    return (
      <main className="bg-base-950 py-16 text-center text-white">
        Loading admin panel from database...
      </main>
    );
  }

  const save = async () => {
    setSaving(true);
    setMessage("");
    try {
      const results = await Promise.all([
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
      if (results.some((r) => !r.ok)) throw new Error("Save failed");
      setMessage("Saved to database successfully.");
    } catch {
      setMessage("Save failed. Check login session and server.");
    } finally {
      setSaving(false);
    }
  };

  const parseLines = (value: string) =>
    value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

  return (
    <main className="min-h-screen bg-base-950 py-8 text-white">
      <div className="mx-auto mb-6 flex max-w-[90rem] items-center justify-between gap-4 px-4 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Ecoheat CMS
          </p>
          <h1 className="font-display text-2xl font-extrabold">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-white/55">
            {content.pages.length} pages · {content.services.length} services ·{" "}
            {content.faqs.length} FAQs
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={save}
            disabled={saving}
            className="rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white disabled:opacity-60"
          >
            {saving ? "Saving..." : "Save All"}
          </button>
          <button
            type="button"
            onClick={logout}
            className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:border-gold-500 hover:text-gold-500"
          >
            Log out
          </button>
        </div>
      </div>

      {message ? (
        <p className="mx-auto mb-4 max-w-[90rem] px-4 text-sm text-gold-500 lg:px-8">
          {message}
        </p>
      ) : null}

      <div className="mx-auto grid max-w-[90rem] gap-6 px-4 lg:grid-cols-[220px_260px_1fr] lg:px-8">
        {/* Main tabs */}
        <aside className="h-fit rounded-2xl border border-white/10 bg-base-900/80 p-3">
          {(["pages", "services", "faqs", "settings"] as Tab[]).map((item) => (
            <button
              key={item}
              type="button"
              className={`mb-1.5 w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold capitalize ${
                tab === item
                  ? "bg-gold-500 text-base-950"
                  : "bg-base-800 text-white hover:bg-base-700"
              }`}
              onClick={() => setTab(item)}
            >
              {item}
              {item === "pages" ? ` (${content.pages.length})` : null}
              {item === "services" ? ` (${content.services.length})` : null}
              {item === "faqs" ? ` (${content.faqs.length})` : null}
            </button>
          ))}
        </aside>

        {/* Item list for pages / services */}
        {(tab === "pages" || tab === "services") && (
          <aside className="max-h-[75vh] overflow-y-auto rounded-2xl border border-white/10 bg-base-900/80 p-3">
            <p className="mb-2 px-2 text-xs font-bold tracking-wide text-white/45 uppercase">
              {tab === "pages" ? "All Pages" : "All Services"}
            </p>
            {tab === "pages"
              ? content.pages.map((page, idx) => (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => setPageIdx(idx)}
                    className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                      pageIdx === idx
                        ? "bg-green-600/30 font-bold text-green-300"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span className="block font-semibold">{page.title}</span>
                    <span className="text-[0.7rem] text-white/45">
                      /{page.slug} · {page.sections.length} sections
                    </span>
                  </button>
                ))
              : content.services.map((service, idx) => (
                  <button
                    key={service.slug}
                    type="button"
                    onClick={() => setServiceIdx(idx)}
                    className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                      serviceIdx === idx
                        ? "bg-green-600/30 font-bold text-green-300"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span className="block font-semibold">{service.name}</span>
                    <span className="text-[0.7rem] text-white/45">
                      /{service.slug} · {service.sections.length} sections
                    </span>
                  </button>
                ))}
          </aside>
        )}

        {/* Editor */}
        <section className="min-w-0 rounded-2xl border border-white/10 bg-base-900/70 p-5">
          {tab === "settings" ? (
            <SettingsEditor
              content={content}
              setContent={setContent}
              parseLines={parseLines}
            />
          ) : null}

          {tab === "pages" && selectedPage ? (
            <EditablePageForm
              page={selectedPage}
              onChange={(page) => {
                const pages = [...content.pages];
                pages[pageIdx] = page;
                setContent({ ...content, pages });
              }}
            />
          ) : null}

          {tab === "services" && selectedService ? (
            <EditableServiceForm
              service={selectedService}
              onChange={(service) => {
                const services = [...content.services];
                services[serviceIdx] = service;
                setContent({ ...content, services });
              }}
            />
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

function SectionEditor({
  section,
  index,
  onChange,
  onRemove,
  folder = "pages",
}: {
  section: EditableSection;
  index: number;
  onChange: (next: EditableSection) => void;
  onRemove: () => void;
  folder?: "pages" | "products" | "gallery" | "misc";
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-base-800/50 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-gold-500">
          Section {index + 1}
          <span className="ml-2 text-xs font-normal text-white/40">
            id: {section.id}
          </span>
        </h3>
        <button
          type="button"
          onClick={onRemove}
          className="rounded-lg border border-red-500/40 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-500/10"
        >
          Remove section
        </button>
      </div>
      <div className="space-y-3">
        <TextInput
          label="Section Title"
          value={section.title}
          onChange={(v) => onChange({ ...section, title: v })}
        />
        <TextArea
          label="Section Content"
          value={section.content}
          onChange={(v) => onChange({ ...section, content: v })}
        />
        <ImageUploadField
          label="Section Image"
          folder={folder}
          value={section.image}
          onChange={(url) => onChange({ ...section, image: url })}
        />
        <TextArea
          label="Bullets (one per line)"
          value={section.bullets.join("\n")}
          onChange={(v) =>
            onChange({
              ...section,
              bullets: v
                .split("\n")
                .map((x) => x.trim())
                .filter(Boolean),
            })
          }
        />
      </div>
    </div>
  );
}

function EditablePageForm({
  page,
  onChange,
}: {
  page: EditablePage;
  onChange: (next: EditablePage) => void;
}) {
  const addSection = () => {
    const id = `section-${Date.now()}`;
    onChange({
      ...page,
      sections: [
        ...page.sections,
        {
          id,
          title: "New Section",
          content: "",
          image: page.heroImage || "",
          bullets: [],
        },
      ],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-extrabold text-white">
          Edit Page
        </h2>
        <p className="text-sm text-white/50">Slug: /{page.slug}</p>
      </div>

      <div className="space-y-3 rounded-2xl border border-gold-500/25 bg-base-800/40 p-5">
        <h3 className="font-bold text-gold-500">Page / Hero</h3>
        <TextInput
          label="SEO Title"
          value={page.title}
          onChange={(v) => onChange({ ...page, title: v })}
        />
        <TextArea
          label="SEO Description"
          value={page.description}
          onChange={(v) => onChange({ ...page, description: v })}
        />
        <TextInput
          label="Hero Title"
          value={page.heroTitle}
          onChange={(v) => onChange({ ...page, heroTitle: v })}
        />
        <TextArea
          label="Hero Description"
          value={page.heroDescription}
          onChange={(v) => onChange({ ...page, heroDescription: v })}
        />
        <ImageUploadField
          label="Hero Image"
          folder="pages"
          value={page.heroImage}
          onChange={(url) => onChange({ ...page, heroImage: url })}
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-white">
          Sections ({page.sections.length})
        </h3>
        <button
          type="button"
          onClick={addSection}
          className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
        >
          + Add Section
        </button>
      </div>

      {page.sections.length === 0 ? (
        <p className="text-sm text-white/50">No sections yet. Add one above.</p>
      ) : (
        page.sections.map((section, idx) => (
          <SectionEditor
            key={section.id}
            section={section}
            index={idx}
            onChange={(next) => {
              const sections = [...page.sections];
              sections[idx] = next;
              onChange({ ...page, sections });
            }}
            onRemove={() => {
              onChange({
                ...page,
                sections: page.sections.filter((_, i) => i !== idx),
              });
            }}
          />
        ))
      )}
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
  const addSection = () => {
    const id = `section-${Date.now()}`;
    onChange({
      ...service,
      sections: [
        ...service.sections,
        {
          id,
          title: "New Section",
          content: "",
          image: service.heroImage || "",
          bullets: [],
        },
      ],
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-xl font-extrabold text-white">
          Edit Service
        </h2>
        <p className="text-sm text-white/50">Slug: /services/{service.slug}</p>
      </div>

      <div className="space-y-3 rounded-2xl border border-gold-500/25 bg-base-800/40 p-5">
        <TextInput
          label="Service Name"
          value={service.name}
          onChange={(v) => onChange({ ...service, name: v })}
        />
        <TextInput
          label="Short Name"
          value={service.shortName}
          onChange={(v) => onChange({ ...service, shortName: v })}
        />
        <TextArea
          label="Card Description"
          value={service.cardDescription}
          onChange={(v) => onChange({ ...service, cardDescription: v })}
        />
        <TextInput
          label="Hero Title"
          value={service.heroTitle}
          onChange={(v) => onChange({ ...service, heroTitle: v })}
        />
        <TextArea
          label="Hero Description"
          value={service.heroDescription}
          onChange={(v) => onChange({ ...service, heroDescription: v })}
        />
        <ImageUploadField
          label="Hero Image"
          folder="products"
          value={service.heroImage}
          onChange={(url) => onChange({ ...service, heroImage: url })}
        />
        <TextArea
          label="Who For"
          value={service.whoFor}
          onChange={(v) => onChange({ ...service, whoFor: v })}
        />
        <TextArea
          label="Warning Signs (one per line)"
          value={service.warningSigns.join("\n")}
          onChange={(v) =>
            onChange({
              ...service,
              warningSigns: v
                .split("\n")
                .map((x) => x.trim())
                .filter(Boolean),
            })
          }
        />
        <TextArea
          label="Approach (one per line)"
          value={service.approach.join("\n")}
          onChange={(v) =>
            onChange({
              ...service,
              approach: v
                .split("\n")
                .map((x) => x.trim())
                .filter(Boolean),
            })
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="font-display text-lg font-bold text-white">
          Service Detail Sections ({service.sections.length})
        </h3>
        <button
          type="button"
          onClick={addSection}
          className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
        >
          + Add Section
        </button>
      </div>

      {service.sections.map((section, idx) => (
        <SectionEditor
          key={section.id}
          section={section}
          index={idx}
          folder="products"
          onChange={(next) => {
            const sections = [...service.sections];
            sections[idx] = next;
            onChange({ ...service, sections });
          }}
          onRemove={() => {
            onChange({
              ...service,
              sections: service.sections.filter((_, i) => i !== idx),
            });
          }}
        />
      ))}

      <div>
        <h3 className="mb-3 font-display text-lg font-bold text-white">
          Service FAQs
        </h3>
        <FaqListEditor
          items={service.faq}
          onChange={(faq) => onChange({ ...service, faq })}
        />
      </div>
    </div>
  );
}

function SettingsEditor({
  content,
  setContent,
  parseLines,
}: {
  content: CmsContent;
  setContent: (next: CmsContent) => void;
  parseLines: (value: string) => string[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <h2 className="font-display text-xl font-extrabold md:col-span-2">
        Contact & Site Settings
      </h2>
      {(
        [
          ["Business Name", "businessName"],
          ["Legal Name", "legalName"],
          ["Tagline", "tagline"],
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
        ] as const
      ).map(([label, key]) => (
        <label key={key} className="text-sm">
          <span className="mb-1 block text-white/80">{label}</span>
          <input
            className="w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
            value={content.site[key] as string}
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
        <span className="mb-1 block text-white/80">
          Service Areas (one per line)
        </span>
        <textarea
          className="h-28 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
          value={content.site.serviceAreas.join("\n")}
          onChange={(e) =>
            setContent({
              ...content,
              site: {
                ...content.site,
                serviceAreas: parseLines(e.target.value),
              },
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
      <div className="md:col-span-2">
        <ImageUploadField
          label="Logo"
          folder="misc"
          value={content.site.logoSrc}
          onChange={(url) =>
            setContent({
              ...content,
              site: { ...content.site, logoSrc: url },
            })
          }
        />
      </div>
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
        <div
          key={`${item.question}-${idx}`}
          className="rounded-xl border border-white/10 p-4"
        >
          <div className="mb-2 flex justify-end">
            <button
              type="button"
              className="text-xs text-red-300"
              onClick={() => onChange(items.filter((_, i) => i !== idx))}
            >
              Remove
            </button>
          </div>
          <TextInput
            label={`Question ${idx + 1}`}
            value={item.question}
            onChange={(v) => {
              const next = [...items];
              next[idx] = { ...item, question: v };
              onChange(next);
            }}
          />
          <TextArea
            label="Answer"
            value={item.answer}
            onChange={(v) => {
              const next = [...items];
              next[idx] = { ...item, answer: v };
              onChange(next);
            }}
          />
        </div>
      ))}
      <button
        type="button"
        className="rounded-lg bg-gold-500 px-4 py-2 font-bold text-base-950"
        onClick={() =>
          onChange([...items, { question: "New question", answer: "New answer" }])
        }
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
      <input
        className="w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
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
      <textarea
        className="h-28 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </label>
  );
}
