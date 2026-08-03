import type { EditablePage, EditableSection } from "@/types/cms";

export function cmsSection(
  page: EditablePage | undefined,
  id: string,
): EditableSection | undefined {
  return page?.sections.find((s) => s.id === id);
}

export function cmsText(
  page: EditablePage | undefined,
  id: string,
  field: "title" | "content",
  fallback: string,
): string {
  const section = cmsSection(page, id);
  const value = section?.[field];
  return value?.trim() ? value : fallback;
}

export function cmsBullets(
  page: EditablePage | undefined,
  id: string,
  fallback: string[] = [],
): string[] {
  const section = cmsSection(page, id);
  return section?.bullets?.length ? section.bullets : fallback;
}
