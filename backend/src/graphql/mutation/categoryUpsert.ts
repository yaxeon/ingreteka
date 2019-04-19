import { CategoryMutationResolvers } from "../types";

export const categoryUpsert: CategoryMutationResolvers["upsert"] = async (
  root,
  { input: { id, ...rest } },
  { models: { Category } }
) => {
  const category = id
    ? await Category.findByIdAndUpdate(id, rest, { upsert: true })
    : await Category.create(rest);

  return category ? category.toObject() : null;
};
