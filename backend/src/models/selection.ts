import { Document, model, Schema } from "mongoose";

import { Omit, Selection as SelectionType } from "../graphql/types";

export interface SelectionModel extends Document, Omit<SelectionType, "id"> {
  search?: string;
}

export const SelectionSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    search: {
      type: String
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: "Category"
      }
    ],
    brands: [
      {
        type: Schema.Types.ObjectId,
        ref: "Brand"
      }
    ],
    shops: [
      {
        type: Schema.Types.ObjectId,
        ref: "Shop"
      }
    ],
    images: {
      type: [String],
      required: true
    },
    relevanceDate: {
      type: Date,
      required: false
    },
    isPublished: {
      type: Boolean,
      default: false
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

SelectionSchema.set("toObject", { virtuals: true });
SelectionSchema.index(
  { name: "text", text: "text", title: "text", search: "text" },
  {
    weights: {
      search: 10,
      title: 10,
      text: 5
    },
    default_language: "russian"
  }
);

export const Selection = model<SelectionModel>(
  "Selection",
  SelectionSchema,
  "selections"
);
