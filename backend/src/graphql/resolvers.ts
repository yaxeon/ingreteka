import { mergeResolvers } from "merge-graphql-schemas";
import { IResolvers } from "graphql-tools";
import auth from "./resolvers/auth";
import category from "./resolvers/category";
import file from "./resolvers/file";
import root from "./resolvers/root";
import shop from "./resolvers/shop";
import brand from "./resolvers/brand";

export const resolvers = mergeResolvers([
  auth,
  category,
  file,
  shop,
  brand,
  root
]) as IResolvers;
