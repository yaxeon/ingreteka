import path from "path";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";
import { AuthDirective } from "./AuthDirective";

const typeDefs = importSchema(
  path.join(__dirname, "../../schema/schema.graphql")
);

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  schemaDirectives: {
    auth: AuthDirective
  }
});
