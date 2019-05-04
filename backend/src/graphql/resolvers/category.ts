import { CategoryMutationResolvers, CategoryQueryResolvers } from "../types";

const CategoryMutation: CategoryMutationResolvers = {
  delete: async (root, { input: { id } }, { models: { Category } }) => {
    await Category.findByIdAndDelete(id);

    return true;
  },
  upsert: async (
    root,
    { input: { id, ...rest } },
    { models: { Category } }
  ) => {
    const category = id
      ? await Category.findByIdAndUpdate(id, rest, { upsert: true })
      : await Category.create(rest);

    return category ? category.toObject() : null;
  }
};

const CategoryQuery: CategoryQueryResolvers = {
  list: async (root, args, { models: { Category } }) => {
    const list = await Category.find({}).sort({ sort: 1 });

    return list.map(category => category.toObject());
  },
  item: async (root, { id }, { models: { Category } }) => {
    const category = await Category.findById(id);

    return category ? category.toObject() : null;
  }
};

export default {
  CategoryMutation,
  CategoryQuery
};
