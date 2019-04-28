import { GraphQLScalarType, Kind } from "graphql";
import { GraphQLDateTime } from "graphql-iso-date";
import { Types } from "mongoose";

export const GraphQLObjectId = new GraphQLScalarType({
  name: "GraphQLObjectId",
  description: "Mongo ObjectId id scalar type",
  parseValue(value: string) {
    return new Types.ObjectId(value);
  },
  serialize(value: string) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Types.ObjectId(ast.value);
    }
    return null;
  }
});

export default {
  GraphQLDateTime,
  GraphQLObjectId
};
