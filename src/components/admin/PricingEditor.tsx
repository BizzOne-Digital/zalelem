"use client";

import { ImageUploadField } from "@/components/admin/ImageUploadField";
import { TextArea, TextInput, slugify } from "@/components/admin/admin-fields";
import type {
  PricingComparisonRow,
  PricingContent,
  PricingKeyDifference,
  PricingTreatment,
  PricingWarranty,
} from "@/types/cms";

function TreatmentEditor({
  item,
  onChange,
  onRemove,
  label,
}: {
  item: PricingTreatment;
  onChange: (next: PricingTreatment) => void;
  onRemove: () => void;
  label: string;
}) {
  return (
    <div className="space-y-3 rounded-2xl border border-white/10 bg-base-800/50 p-4">
      <div className="flex items-center justify-between gap-3">
        <h4 className="font-bold text-gold-500">{label}</h4>
        <button
          type="button"
          onClick={onRemove}
          className="text-xs text-red-300"
        >
          Remove
        </button>
      </div>
      <TextInput
        label="ID (stable)"
        value={item.id}
        onChange={(v) => onChange({ ...item, id: slugify(v) || item.id })}
      />
      <TextInput
        label="Title"
        value={item.title}
        onChange={(v) => onChange({ ...item, title: v })}
      />
      <TextInput
        label="Price Range"
        value={item.priceRange}
        onChange={(v) => onChange({ ...item, priceRange: v })}
      />
      <TextInput
        label="Note"
        value={item.note}
        onChange={(v) => onChange({ ...item, note: v })}
      />
      <TextArea
        label="Intro"
        value={item.intro}
        onChange={(v) => onChange({ ...item, intro: v })}
      />
      <ImageUploadField
        label="Image"
        folder="pages"
        value={item.image}
        onChange={(url) => onChange({ ...item, image: url })}
      />
      <label className="flex items-center gap-2 text-sm text-white/80">
        <input
          type="checkbox"
          checked={Boolean(item.featured)}
          onChange={(e) => onChange({ ...item, featured: e.target.checked })}
        />
        Featured / Recommended
      </label>
      <TextArea
        label="Bullets (Label: text — one per line)"
        value={item.bullets.map((b) => `${b.label}: ${b.text}`).join("\n")}
        onChange={(v) =>
          onChange({
            ...item,
            bullets: v
              .split("\n")
              .map((line) => line.trim())
              .filter(Boolean)
              .map((line) => {
                const i = line.indexOf(":");
                if (i < 0) return { label: line, text: "" };
                return {
                  label: line.slice(0, i).trim(),
                  text: line.slice(i + 1).trim(),
                };
              }),
          })
        }
      />
    </div>
  );
}

function emptyTreatment(): PricingTreatment {
  return {
    id: `item-${Date.now()}`,
    title: "New Treatment",
    priceRange: "",
    note: "",
    intro: "",
    image: "",
    bullets: [],
    featured: false,
  };
}

export function PricingEditor({
  pricing,
  onChange,
}: {
  pricing: PricingContent;
  onChange: (next: PricingContent) => void;
}) {
  const set = <K extends keyof PricingContent>(key: K, value: PricingContent[K]) =>
    onChange({ ...pricing, [key]: value });

  const updateTreatment = (
    key: "bedBugTreatments" | "generalPests",
    idx: number,
    next: PricingTreatment,
  ) => {
    const list = [...pricing[key]];
    list[idx] = next;
    set(key, list);
  };

  const removeTreatment = (
    key: "bedBugTreatments" | "generalPests",
    idx: number,
  ) => {
    set(
      key,
      pricing[key].filter((_, i) => i !== idx),
    );
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="font-display text-xl font-extrabold">Pricing Page</h2>
        <p className="text-sm text-white/50">
          Edits appear live on /pricing after Save All.
        </p>
      </div>

      <div className="space-y-3 rounded-2xl border border-gold-500/25 bg-base-800/40 p-5">
        <h3 className="font-bold text-gold-500">Hero</h3>
        <TextInput label="Eyebrow" value={pricing.heroEyebrow} onChange={(v) => set("heroEyebrow", v)} />
        <TextInput label="Title" value={pricing.heroTitle} onChange={(v) => set("heroTitle", v)} />
        <TextInput label="Subtitle" value={pricing.heroSubtitle} onChange={(v) => set("heroSubtitle", v)} />
        <TextArea label="Description" value={pricing.heroDescription} onChange={(v) => set("heroDescription", v)} />
        <ImageUploadField label="Hero Image" folder="pages" value={pricing.heroImage} onChange={(url) => set("heroImage", url)} />
      </div>

      <div className="space-y-3 rounded-2xl border border-white/10 bg-base-800/40 p-5">
        <h3 className="font-bold text-gold-500">Honesty Section</h3>
        <TextInput label="Title" value={pricing.honestyTitle} onChange={(v) => set("honestyTitle", v)} />
        <TextArea label="Content" value={pricing.honestyContent} onChange={(v) => set("honestyContent", v)} />
        <ImageUploadField label="Image" folder="pages" value={pricing.honestyImage} onChange={(url) => set("honestyImage", url)} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">
            Bed Bug Treatments ({pricing.bedBugTreatments.length})
          </h3>
          <button
            type="button"
            className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
            onClick={() =>
              set("bedBugTreatments", [...pricing.bedBugTreatments, emptyTreatment()])
            }
          >
            + Add Treatment
          </button>
        </div>
        <TextInput
          label="Section Title"
          value={pricing.bedBugSectionTitle}
          onChange={(v) => set("bedBugSectionTitle", v)}
        />
        {pricing.bedBugTreatments.map((item, idx) => (
          <TreatmentEditor
            key={item.id}
            label={`Treatment ${idx + 1}`}
            item={item}
            onChange={(next) => updateTreatment("bedBugTreatments", idx, next)}
            onRemove={() => removeTreatment("bedBugTreatments", idx)}
          />
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-lg font-bold">Comparison Table</h3>
        <TextInput label="Title" value={pricing.comparisonTitle} onChange={(v) => set("comparisonTitle", v)} />
        <TextArea label="Intro" value={pricing.comparisonIntro} onChange={(v) => set("comparisonIntro", v)} />
        {pricing.comparisonRows.map((row, idx) => (
          <div key={`${row.treatment}-${idx}`} className="grid gap-2 rounded-xl border border-white/10 p-4 md:grid-cols-2">
            <div className="flex justify-end md:col-span-2">
              <button
                type="button"
                className="text-xs text-red-300"
                onClick={() =>
                  set(
                    "comparisonRows",
                    pricing.comparisonRows.filter((_, i) => i !== idx),
                  )
                }
              >
                Remove row
              </button>
            </div>
            {(
              [
                ["Treatment", "treatment"],
                ["Price", "price"],
                ["Speed", "speed"],
                ["Best For", "bestFor"],
              ] as const
            ).map(([label, key]) => (
              <TextInput
                key={key}
                label={label}
                value={row[key]}
                onChange={(v) => {
                  const next = [...pricing.comparisonRows];
                  next[idx] = { ...row, [key]: v };
                  set("comparisonRows", next);
                }}
              />
            ))}
            <label className="flex items-center gap-2 text-sm text-white/80 md:col-span-2">
              <input
                type="checkbox"
                checked={row.highlight}
                onChange={(e) => {
                  const next = [...pricing.comparisonRows];
                  next[idx] = { ...row, highlight: e.target.checked };
                  set("comparisonRows", next);
                }}
              />
              Highlight row
            </label>
          </div>
        ))}
        <button
          type="button"
          className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
          onClick={() => {
            const row: PricingComparisonRow = {
              treatment: "New",
              price: "",
              speed: "",
              bestFor: "",
              highlight: false,
            };
            set("comparisonRows", [...pricing.comparisonRows, row]);
          }}
        >
          + Add Comparison Row
        </button>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">Key Differences</h3>
          <button
            type="button"
            className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
            onClick={() => {
              const item: PricingKeyDifference = {
                title: "New",
                text: "",
              };
              set("keyDifferences", [...pricing.keyDifferences, item]);
            }}
          >
            + Add
          </button>
        </div>
        {pricing.keyDifferences.map((item, idx) => (
          <div key={`${item.title}-${idx}`} className="space-y-2 rounded-xl border border-white/10 p-4">
            <button
              type="button"
              className="text-xs text-red-300"
              onClick={() =>
                set(
                  "keyDifferences",
                  pricing.keyDifferences.filter((_, i) => i !== idx),
                )
              }
            >
              Remove
            </button>
            <TextInput
              label="Title"
              value={item.title}
              onChange={(v) => {
                const next = [...pricing.keyDifferences];
                next[idx] = { ...item, title: v };
                set("keyDifferences", next);
              }}
            />
            <TextArea
              label="Text"
              value={item.text}
              onChange={(v) => {
                const next = [...pricing.keyDifferences];
                next[idx] = { ...item, text: v };
                set("keyDifferences", next);
              }}
            />
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">
            General Pests ({pricing.generalPests.length})
          </h3>
          <button
            type="button"
            className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
            onClick={() =>
              set("generalPests", [...pricing.generalPests, emptyTreatment()])
            }
          >
            + Add Pest
          </button>
        </div>
        <TextInput
          label="Section Title"
          value={pricing.generalSectionTitle}
          onChange={(v) => set("generalSectionTitle", v)}
        />
        {pricing.generalPests.map((item, idx) => (
          <TreatmentEditor
            key={item.id}
            label={`Pest ${idx + 1}`}
            item={item}
            onChange={(next) => updateTreatment("generalPests", idx, next)}
            onRemove={() => removeTreatment("generalPests", idx)}
          />
        ))}
      </div>

      <div className="space-y-3 rounded-2xl border border-white/10 bg-base-800/40 p-5">
        <h3 className="font-bold text-gold-500">Mid Banner & CTA</h3>
        <TextInput label="Mid Banner Title" value={pricing.midBannerTitle} onChange={(v) => set("midBannerTitle", v)} />
        <TextInput label="Mid Banner CTA" value={pricing.midBannerCta} onChange={(v) => set("midBannerCta", v)} />
        <TextInput label="CTA Title" value={pricing.ctaTitle} onChange={(v) => set("ctaTitle", v)} />
        <TextArea label="CTA Description" value={pricing.ctaDescription} onChange={(v) => set("ctaDescription", v)} />
        <ImageUploadField label="CTA Image" folder="pages" value={pricing.ctaImage} onChange={(url) => set("ctaImage", url)} />
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold">Warranties</h3>
          <button
            type="button"
            className="rounded-lg bg-gold-500 px-3 py-2 text-xs font-bold text-base-950"
            onClick={() => {
              const item: PricingWarranty = { title: "New Warranty", text: "" };
              set("warranties", [...pricing.warranties, item]);
            }}
          >
            + Add Warranty
          </button>
        </div>
        <TextInput label="Section Title" value={pricing.warrantiesTitle} onChange={(v) => set("warrantiesTitle", v)} />
        <TextArea label="Intro" value={pricing.warrantiesIntro} onChange={(v) => set("warrantiesIntro", v)} />
        {pricing.warranties.map((item, idx) => (
          <div key={`${item.title}-${idx}`} className="space-y-2 rounded-xl border border-white/10 p-4">
            <button
              type="button"
              className="text-xs text-red-300"
              onClick={() =>
                set(
                  "warranties",
                  pricing.warranties.filter((_, i) => i !== idx),
                )
              }
            >
              Remove
            </button>
            <TextInput
              label="Title"
              value={item.title}
              onChange={(v) => {
                const next = [...pricing.warranties];
                next[idx] = { ...item, title: v };
                set("warranties", next);
              }}
            />
            <TextArea
              label="Text"
              value={item.text}
              onChange={(v) => {
                const next = [...pricing.warranties];
                next[idx] = { ...item, text: v };
                set("warranties", next);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
