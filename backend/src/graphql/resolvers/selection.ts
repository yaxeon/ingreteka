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
  list: async (root, { includeCategories }, { models: { Selection } }) => {
    const query = includeCategories.length
      ? { categories: { $in: includeCategories } }
      : {};

    const list = await Selection.find(query)
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
