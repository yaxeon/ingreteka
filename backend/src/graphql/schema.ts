import path from "path";
import { importSchema } from "graphql-import";
import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolvers";

const typeDefs = importSchema(path.join(__dirname, "./schema/schema.graphql"));

export const schema = makeExecutableSchema({ typeDefs, resolvers });
