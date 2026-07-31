import Image, { type ImageProps } from "next/image";
import { resolveCmsImage } from "@/lib/cms-image";

type Props = Omit<ImageProps, "src"> & {
  src: string | null | undefined;
  fallback?: string;
};

/** next/image wrapper that safely resolves CMS / Mongo upload URLs. */
export function CmsImage({ src, fallback, alt, ...rest }: Props) {
  return <Image src={resolveCmsImage(src, fallback)} alt={alt} {...rest} />;
}
