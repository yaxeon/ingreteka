import { Document, model, Schema } from "mongoose";

import { Omit, Brand as BrandType } from "../graphql/types";

export interface BrandModel extends Document, Omit<BrandType, "id"> {}

export const BrandSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

BrandSchema.set("toObject", { virtuals: true });

export const Brand = model<BrandModel>("Brand", BrandSchema, "brands");
