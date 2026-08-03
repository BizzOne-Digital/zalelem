"use client";

import { ImageUploadField } from "@/components/admin/ImageUploadField";
import type { EditableSection } from "@/types/cms";

export function TextInput({
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

export function TextArea({
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

export function SectionEditor({
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

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
