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
    const list = await Selection.find({
      categories: { $in: includeCategories }
    })
      .populate("categories")
      .populate("brands")
      .populate("shops");

    return list.map(selection => selection.toObject());
  }
};

export default {
  SelectionMutation,
  SelectionQuery
};
