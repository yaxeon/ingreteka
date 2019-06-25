import { Selection } from "../models/selection";
import { Types } from "mongoose";

export const updateSelectionIndex = async (id: Types.ObjectId) => {
  const selection = await Selection.findById(id)
    .populate("brands")
    .populate("shops");

  if (!selection) {
    return;
  }

  const brandWords = selection.brands.map(({ title }) => title);
  const shopWords = selection.shops.map(({ title }) => title);
  selection.search = [...brandWords, ...shopWords].join(", ");

  await selection.save();
};
