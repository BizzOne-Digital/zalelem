import type { EditablePage, EditableSection } from "@/types/cms";

export type CmsHeroProps = {
  heroTitle?: string;
  heroDescription?: string;
  heroImage?: string;
  phone?: string;
  phoneHref?: string;
  page?: EditablePage;
};

export function pickHero(
  props: CmsHeroProps,
  fallbacks: { title: string; description: string; image?: string },
) {
  return {
    title: props.heroTitle?.trim() || props.page?.heroTitle || fallbacks.title,
    description:
      props.heroDescription?.trim() ||
      props.page?.heroDescription ||
      fallbacks.description,
    image:
      props.heroImage?.trim() ||
      props.page?.heroImage ||
      fallbacks.image ||
      "",
  };
}

export function sectionById(
  page: EditablePage | undefined,
  id: string,
): EditableSection | undefined {
  return page?.sections.find((s) => s.id === id);
}
