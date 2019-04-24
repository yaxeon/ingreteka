import { Document, Model, model, Schema } from "mongoose";

export interface ShopModel extends Document {
  title: string;
  image: string;
  description?: string;
  link?: string;
}

export const ShopSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    link: {
      type: String
    }
  },
  {
    versionKey: false
  }
);

ShopSchema.set("toObject", { virtuals: true });

export const Shop: Model<ShopModel> = model<ShopModel>(
  "Shop",
  ShopSchema,
  "shops"
);
