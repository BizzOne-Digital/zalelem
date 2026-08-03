"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { PricingEditor } from "@/components/admin/PricingEditor";
import {
  SectionEditor,
  TextArea,
  TextInput,
  slugify,
} from "@/components/admin/admin-fields";
import { defaultPricingContent } from "@/lib/default-pricing";
import type {
  CmsContent,
  EditablePage,
  EditableService,
  ServiceFaq,
} from "@/types/cms";

type Tab = "pages" | "locations" | "services" | "pricing" | "faqs" | "settings";

const RESERVED_SLUGS = new Set([
  "about",
  "admin",
  "api",
  "aprehend-bed-bugs",
  "bed-bug-heat-treatment",
  "commercial",
  "contact",
  "diy-pest-control",
  "faqs",
  "how-heat-treatment-works",
  "how-it-works",
  "locations",
  "offers",
  "pricing",
  "privacy",
  "property-types",
  "service-area",
  "services",
  "terms",
  "why-choose",
]);

function emptyPage(kind: "page" | "location"): EditablePage {
  const stamp = Date.now();
  return {
    slug: kind === "location" ? `city-${stamp}` : `page-${stamp}`,
    kind,
    cityLabel: kind === "location" ? "New City" : undefined,
    published: true,
    title: kind === "location" ? "New Location" : "New Page",
    description: "",
    heroTitle: kind === "location" ? "Pest Control in New City" : "New Page",
    heroDescription: "",
    heroImage: "",
    sections: [
      {
        id: "overview",
        title: "Overview",
        content: "",
        image: "",
        bullets: [],
      },
    ],
  };
}

function emptyService(): EditableService {
  const stamp = Date.now();
  return {
    slug: `service-${stamp}`,
    name: "New Service",
    shortName: "New",
    cardDescription: "",
    heroTitle: "New Service",
    heroDescription: "",
    heroImage: "",
    whoFor: "",
    warningSigns: [],
    approach: [],
    sections: [
      {
        id: "overview",
        title: "Service Overview",
        content: "",
        image: "",
        bullets: [],
      },
    ],
    faq: [],
    priceRange: "",
    pricingNote: "",
  };
}

export default function AdminPage() {
  const router = useRouter();
  const [tab, setTab] = useState<Tab>("pages");
  const [content, setContent] = useState<CmsContent | null>(null);
  const [saving, setSaving] = useState(false);
  const [pageIdx, setPageIdx] = useState(0);
  const [locationIdx, setLocationIdx] = useState(0);
  const [serviceIdx, setServiceIdx] = useState(0);
  const [message, setMessage] = useState("");
  const [loadError, setLoadError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/api/content");
        if (!res.ok) throw new Error("Failed to load content");
        const data = (await res.json()) as CmsContent;
        setContent({
          ...data,
          pricing: data.pricing ?? defaultPricingContent,
        });
      } catch {
        setLoadError("Could not load CMS content from the database.");
      }
    };
    void load();
  }, []);

  const marketingPages = useMemo(
    () =>
      (content?.pages ?? [])
        .map((page, index) => ({ page, index }))
        .filter(({ page }) => page.kind !== "location"),
    [content],
  );

  const locationPages = useMemo(
    () =>
      (content?.pages ?? [])
        .map((page, index) => ({ page, index }))
        .filter(({ page }) => page.kind === "location"),
    [content],
  );

  const selectedMarketing = marketingPages[pageIdx] ?? null;
  const selectedLocation = locationPages[locationIdx] ?? null;
  const selectedService = content?.services?.[serviceIdx] ?? null;

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  };

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
        fetch("/api/admin/pricing", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(content.pricing ?? defaultPricingContent),
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

  const updatePageAt = (absoluteIndex: number, page: EditablePage) => {
    const pages = [...content.pages];
    pages[absoluteIndex] = page;
    setContent({ ...content, pages });
  };

  const deletePageAt = (absoluteIndex: number) => {
    if (!confirm("Delete this page permanently?")) return;
    const pages = content.pages.filter((_, i) => i !== absoluteIndex);
    setContent({ ...content, pages });
    setPageIdx(0);
    setLocationIdx(0);
  };

  const addPage = (kind: "page" | "location") => {
    const page = emptyPage(kind);
    setContent({ ...content, pages: [...content.pages, page] });
    if (kind === "location") {
      setTab("locations");
      setLocationIdx(locationPages.length);
    } else {
      setTab("pages");
      setPageIdx(marketingPages.length);
    }
  };

  const addService = () => {
    setContent({ ...content, services: [...content.services, emptyService()] });
    setTab("services");
    setServiceIdx(content.services.length);
  };

  const deleteService = (idx: number) => {
    if (!confirm("Delete this service permanently?")) return;
    setContent({
      ...content,
      services: content.services.filter((_, i) => i !== idx),
    });
    setServiceIdx(0);
  };

  const tabs: { id: Tab; label: string; count?: number }[] = [
    { id: "pages", label: "Pages", count: marketingPages.length },
    { id: "locations", label: "Locations", count: locationPages.length },
    { id: "services", label: "Services", count: content.services.length },
    { id: "pricing", label: "Pricing" },
    { id: "faqs", label: "FAQs", count: content.faqs.length },
    { id: "settings", label: "Settings" },
  ];

  return (
    <main className="min-h-screen bg-base-950 py-8 text-white">
      <div className="mx-auto mb-6 flex max-w-[90rem] items-center justify-between gap-4 px-4 lg:px-8">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-gold-500 uppercase">
            Pest Warriors CMS
          </p>
          <h1 className="font-display text-2xl font-extrabold">Admin Dashboard</h1>
          <p className="mt-1 text-sm text-white/55">
            Edit pages, locations, services, and pricing — then Save All.
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
        <aside className="h-fit rounded-2xl border border-white/10 bg-base-900/80 p-3">
          {tabs.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`mb-1.5 w-full rounded-lg px-3 py-2.5 text-left text-sm font-semibold ${
                tab === item.id
                  ? "bg-gold-500 text-base-950"
                  : "bg-base-800 text-white hover:bg-base-700"
              }`}
              onClick={() => setTab(item.id)}
            >
              {item.label}
              {item.count !== undefined ? ` (${item.count})` : null}
            </button>
          ))}
        </aside>

        {(tab === "pages" || tab === "locations" || tab === "services") && (
          <aside className="max-h-[75vh] overflow-y-auto rounded-2xl border border-white/10 bg-base-900/80 p-3">
            <div className="mb-3 flex items-center justify-between gap-2 px-2">
              <p className="text-xs font-bold tracking-wide text-white/45 uppercase">
                {tab === "pages"
                  ? "All Pages"
                  : tab === "locations"
                    ? "All Locations"
                    : "All Services"}
              </p>
              <button
                type="button"
                className="rounded-md bg-gold-500 px-2 py-1 text-[0.65rem] font-bold text-base-950"
                onClick={() => {
                  if (tab === "services") addService();
                  else addPage(tab === "locations" ? "location" : "page");
                }}
              >
                + Add
              </button>
            </div>

            {tab === "pages"
              ? marketingPages.map(({ page, index }, listIdx) => (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => setPageIdx(listIdx)}
                    className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                      pageIdx === listIdx
                        ? "bg-green-600/30 font-bold text-green-300"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span className="block font-semibold">{page.title}</span>
                    <span className="text-[0.7rem] text-white/45">
                      /{page.slug}
                    </span>
                  </button>
                ))
              : null}

            {tab === "locations"
              ? locationPages.map(({ page }, listIdx) => (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => setLocationIdx(listIdx)}
                    className={`mb-1 w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                      locationIdx === listIdx
                        ? "bg-green-600/30 font-bold text-green-300"
                        : "text-white/80 hover:bg-white/5"
                    }`}
                  >
                    <span className="block font-semibold">
                      {page.cityLabel || page.title}
                    </span>
                    <span className="text-[0.7rem] text-white/45">
                      /{page.slug}
                      {page.published === false ? " · hidden" : ""}
                    </span>
                  </button>
                ))
              : null}

            {tab === "services"
              ? content.services.map((service, idx) => (
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
                      /services/{service.slug}
                      {service.priceRange ? ` · ${service.priceRange}` : ""}
                    </span>
                  </button>
                ))
              : null}
          </aside>
        )}

        <section
          className={`min-w-0 rounded-2xl border border-white/10 bg-base-900/70 p-5 ${
            tab === "pricing" || tab === "faqs" || tab === "settings"
              ? "lg:col-span-2"
              : ""
          }`}
        >
          {tab === "settings" ? (
            <SettingsEditor
              content={content}
              setContent={setContent}
              parseLines={parseLines}
            />
          ) : null}

          {tab === "pages" && selectedMarketing ? (
            <EditablePageForm
              page={selectedMarketing.page}
              allowSlugEdit
              showLocationFields={false}
              onChange={(page) => updatePageAt(selectedMarketing.index, page)}
              onDelete={() => deletePageAt(selectedMarketing.index)}
            />
          ) : null}

          {tab === "locations" && selectedLocation ? (
            <EditablePageForm
              page={selectedLocation.page}
              allowSlugEdit
              showLocationFields
              reservedSlugs={RESERVED_SLUGS}
              onChange={(page) => updatePageAt(selectedLocation.index, page)}
              onDelete={() => deletePageAt(selectedLocation.index)}
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
              onDelete={() => deleteService(serviceIdx)}
            />
          ) : null}

          {tab === "pricing" ? (
            <PricingEditor
              pricing={content.pricing ?? defaultPricingContent}
              onChange={(pricing) => setContent({ ...content, pricing })}
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

function EditablePageForm({
  page,
  onChange,
  onDelete,
  allowSlugEdit,
  showLocationFields,
  reservedSlugs,
}: {
  page: EditablePage;
  onChange: (next: EditablePage) => void;
  onDelete: () => void;
  allowSlugEdit?: boolean;
  showLocationFields?: boolean;
  reservedSlugs?: Set<string>;
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
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-extrabold text-white">
            {showLocationFields ? "Edit Location" : "Edit Page"}
          </h2>
          <p className="text-sm text-white/50">Slug: /{page.slug}</p>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-lg border border-red-500/40 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-500/10"
        >
          Delete
        </button>
      </div>

      <div className="space-y-3 rounded-2xl border border-gold-500/25 bg-base-800/40 p-5">
        <h3 className="font-bold text-gold-500">Page / Hero</h3>
        {allowSlugEdit ? (
          <TextInput
            label="URL Slug"
            value={page.slug}
            onChange={(v) => {
              const next = slugify(v);
              if (reservedSlugs?.has(next)) return;
              onChange({ ...page, slug: next });
            }}
          />
        ) : null}
        {showLocationFields ? (
          <>
            <TextInput
              label="City Label"
              value={page.cityLabel ?? ""}
              onChange={(v) => onChange({ ...page, cityLabel: v })}
            />
            <label className="flex items-center gap-2 text-sm text-white/80">
              <input
                type="checkbox"
                checked={page.published !== false}
                onChange={(e) =>
                  onChange({ ...page, published: e.target.checked })
                }
              />
              Published (show in Locations menu)
            </label>
          </>
        ) : null}
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
  onDelete,
}: {
  service: EditableService;
  onChange: (next: EditableService) => void;
  onDelete: () => void;
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
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-xl font-extrabold text-white">
            Edit Service
          </h2>
          <p className="text-sm text-white/50">Slug: /services/{service.slug}</p>
        </div>
        <button
          type="button"
          onClick={onDelete}
          className="rounded-lg border border-red-500/40 px-3 py-1.5 text-xs font-semibold text-red-300 hover:bg-red-500/10"
        >
          Delete
        </button>
      </div>

      <div className="space-y-3 rounded-2xl border border-gold-500/25 bg-base-800/40 p-5">
        <TextInput
          label="URL Slug"
          value={service.slug}
          onChange={(v) => onChange({ ...service, slug: slugify(v) })}
        />
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
        <TextInput
          label="Price Range"
          value={service.priceRange ?? ""}
          onChange={(v) => onChange({ ...service, priceRange: v })}
        />
        <TextInput
          label="Pricing Note"
          value={service.pricingNote ?? ""}
          onChange={(v) => onChange({ ...service, pricingNote: v })}
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
        <span className="mb-1 block text-white/80">Service Areas Note</span>
        <textarea
          className="h-20 w-full rounded-lg border border-white/20 bg-base-800 px-3 py-2"
          value={content.site.serviceAreasNote}
          onChange={(e) =>
            setContent({
              ...content,
              site: { ...content.site, serviceAreasNote: e.target.value },
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
