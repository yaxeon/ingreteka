import { CategoryQueryResolvers } from "../types";

export const categorList: CategoryQueryResolvers["list"] = async (
  root,
  args,
  { models: { Category } }
) => {
  const list = await Category.find({}).sort({ sort: 1 });

  return list.map(category => category.toObject());
};
