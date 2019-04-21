import path from "path";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";

const resolversArray = fileLoader(
  path.join(__dirname, "./resolvers/**/*.resolvers.*")
);

export const resolvers = mergeResolvers(resolversArray);
