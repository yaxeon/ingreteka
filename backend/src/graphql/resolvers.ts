import { mergeResolvers } from "merge-graphql-schemas";
import { IResolvers } from "graphql-tools";
import auth from "./resolvers/auth";
import category from "./resolvers/category";
import file from "./resolvers/file";
import root from "./resolvers/root";

export const resolvers = mergeResolvers([
  auth,
  category,
  file,
  root
]) as IResolvers;
