import { Document, model, Schema } from "mongoose";

import { Omit, Selection as SelectionType } from "../graphql/types";

export interface SelectionModel extends Document, Omit<SelectionType, "id"> {}

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
    }
  },
  {
    versionKey: false,
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" }
  }
);

SelectionSchema.set("toObject", { virtuals: true });
SelectionSchema.index(
  { name: "text", text: "text", title: "text" },
  {
    weights: {
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
