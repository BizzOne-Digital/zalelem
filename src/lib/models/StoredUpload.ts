import { Schema, model, models, type InferSchemaType } from "mongoose";
import { UPLOAD_FOLDERS } from "@/lib/upload/folders";

const storedUploadSchema = new Schema(
  {
    folder: {
      type: String,
      required: true,
      enum: UPLOAD_FOLDERS,
    },
    filename: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    data: { type: Buffer, required: true },
  },
  { timestamps: true },
);

storedUploadSchema.index({ folder: 1, filename: 1 }, { unique: true });

export type StoredUploadDoc = InferSchemaType<typeof storedUploadSchema>;

export const StoredUploadModel =
  models.StoredUpload ||
  model("StoredUpload", storedUploadSchema, "stored_uploads");
