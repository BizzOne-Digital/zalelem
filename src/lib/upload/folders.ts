export const UPLOAD_FOLDERS = ["pages", "products", "gallery", "misc"] as const;
export type UploadFolder = (typeof UPLOAD_FOLDERS)[number];

export function isUploadFolder(value: string): value is UploadFolder {
  return (UPLOAD_FOLDERS as readonly string[]).includes(value);
}
