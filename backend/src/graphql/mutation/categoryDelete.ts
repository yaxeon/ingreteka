import { CategoryMutationResolvers } from "../types";

export const categoryDelete: CategoryMutationResolvers["delete"] = async (
  root,
  { input: { id } },
  { models: { Category } }
) => {
  await Category.findByIdAndDelete(id);

  return true;
};
