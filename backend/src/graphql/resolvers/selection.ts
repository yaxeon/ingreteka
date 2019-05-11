import idx from "idx";
import { SelectionMutationResolvers, SelectionQueryResolvers } from "../types";

const SelectionMutation: SelectionMutationResolvers = {
  delete: async (root, { input: { id } }, { models: { Selection } }) => {
    await Selection.findByIdAndDelete(id);

    return true;
  },
  upsert: async (
    root,
    { input: { id, ...rest } },
    { models: { Selection } }
  ) => {
    const selection = id
      ? await Selection.findByIdAndUpdate(id, rest, { upsert: true })
      : await Selection.create(rest);

    return selection ? selection.toObject() : null;
  }
};

const SelectionQuery: SelectionQueryResolvers = {
  list: async (root, { filter }, { models: { Selection, Category } }) => {
    const query = Selection.find();
    const categoryId = idx(filter, _ => _.categoryId);
    const categorySlug = idx(filter, _ => _.categorySlug);
    const shopId = idx(filter, _ => _.shopId);
    const brandId = idx(filter, _ => _.brandId);

    if (categorySlug) {
      const categoryBySlugList = await Category.find({
        slug: { $in: categorySlug }
      }).select("id");
      const categoryBySlug = categoryBySlugList.map(({ id }) => id);
      query.find({ categories: { $in: categoryBySlug } });
    }

    if (categoryId) {
      query.find({ categories: { $in: categoryId } });
    }

    if (shopId) {
      query.find({ shops: { $in: shopId } });
    }

    if (brandId) {
      query.find({ brands: { $in: brandId } });
    }

    const list = await query
      .populate("categories")
      .populate("brands")
      .populate("shops");

    return list.map(selection => selection.toObject());
  },
  item: async (root, { id }, { models: { Selection } }) => {
    const selection = await Selection.findById(id)
      .populate("categories")
      .populate("brands")
      .populate("shops");

    return selection ? selection.toObject() : null;
  }
};

export default {
  SelectionMutation,
  SelectionQuery
};
