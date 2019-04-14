import { gql } from "apollo-server";

export const typeDefs = gql`
  directive @auth(roles: [String]) on FIELD_DEFINITION

  enum UserRole {
    ADMIN
    USER
  }

  type User {
    email: String!
    username: String
    roles: [UserRole]!
  }

  type Query {
    profile: User @auth(roles: ["USER", "ADMIN"])
  }

  type Mutation {
    login(username: String!, password: String!): Boolean!
  }
`;
