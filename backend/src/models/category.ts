import { Document, Model, model, Schema } from "mongoose";

export interface CategoryModel extends Document {
  title: string;
  description: string;
  slug: string;
  sort: number;
  image?: string;
}

export const CategorySchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
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
      type: String
    }
  },
  {
    versionKey: false
  }
);

CategorySchema.set("toObject", { virtuals: true });

export const Category: Model<CategoryModel> = model<CategoryModel>(
  "Category",
  CategorySchema,
  "categories"
);
