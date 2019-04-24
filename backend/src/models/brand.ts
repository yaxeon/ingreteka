import { Document, Model, model, Schema } from "mongoose";

export interface BrandModel extends Document {
  title: string;
  image: string;
  description?: string;
}

export const BrandSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    image: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

BrandSchema.set("toObject", { virtuals: true });

export const Brand: Model<BrandModel> = model<BrandModel>(
  "Brand",
  BrandSchema,
  "brands"
);
