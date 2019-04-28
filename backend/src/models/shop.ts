import { Document, model, Schema } from "mongoose";

import { Omit, Shop as ShopType } from "../graphql/types";

export interface ShopModel extends Document, Omit<ShopType, "id"> {}

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
    link: {
      type: String,
      required: true
    }
  },
  {
    versionKey: false
  }
);

ShopSchema.set("toObject", { virtuals: true });

export const Shop = model<ShopModel>("Shop", ShopSchema, "shops");
