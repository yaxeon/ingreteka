import idx from "idx";
import { SelectionMutationResolvers, SelectionQueryResolvers } from "../types";
import { updateSelectionIndex } from "../../service/searchIndex";

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

    if (id) {
      await updateSelectionIndex(id);
    }

    return selection ? selection.toObject() : null;
  }
};

const SelectionQuery: SelectionQueryResolvers = {
  list: async (root, { filter }, { user, models: { Selection, Category } }) => {
    const categoryId = idx(filter, _ => _.categoryId);
    const categorySlug = idx(filter, _ => _.categorySlug);
    const shopId = idx(filter, _ => _.shopId);
    const brandId = idx(filter, _ => _.brandId);
    const id = idx(filter, _ => _.id);
    const query = Selection.find();

    if (id) {
      query.where("_id").in(id);
    }

    if (categorySlug) {
      const categoryBySlugList = await Category.find({
        slug: { $in: categorySlug }
      }).select("id");
      const categoryBySlug = categoryBySlugList.map(({ id }) => id);

      query.where("categories").in(categoryBySlug);
    }

    if (categoryId) {
      query.where("categories").in(categoryId);
    }

    if (shopId) {
      query.where("shops").in(shopId);
    }

    if (brandId) {
      query.where("brands").in(brandId);
    }

    if (user === null || !user.isAdmin()) {
      query.where("isPublished").equals(true);
    }

    query.sort({ relevanceDate: "desc" });

    const list = await query
      .populate("categories")
      .populate("brands")
      .populate("shops");

    return list.map(selection => selection.toObject());
  },
  search: async (
    root,
    { filter: { query: search } },
    { user, models: { Selection } }
  ) => {
    const query = Selection.find();

    query.setQuery({ $text: { $search: search } });

    if (user === null || !user.isAdmin()) {
      query.where("isPublished").equals(true);
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
