import { Document, model, Schema } from "mongoose";

import { Omit, Category as CategoryType } from "../graphql/types";

export interface CategoryModel extends Document, Omit<CategoryType, "id"> {}

export const CategorySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    sort: {
      type: Number,
      default: 0
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

CategorySchema.set("toObject", { virtuals: true });

export const Category = model<CategoryModel>(
  "Category",
  CategorySchema,
  "categories"
);
