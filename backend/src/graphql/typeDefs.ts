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
  
  type Category {
    id: ID!
    title: String!
    description: String
    slug: String
    sort: Int
    image: String
  }
  
  type AuthQuery {
    profile: User @auth(roles: ["USER", "ADMIN"])
  }
  
  input AuthLoginInput {
    username: String!
    password: String!
  }
  
  type AuthMutation {
    login(input: AuthLoginInput!): Boolean
    logout: Boolean
  }
  
  input CategoryUpsertInput {
    id: ID
    title: String!
    description: String
    slug: String
    sort: Int
    image: String
  }
  
  type CategoryMutation {
    upsert(input: CategoryUpsertInput!): Category
  }
  
  type Query {
    auth: AuthQuery!
  }
  
  type Mutation {
    auth: AuthMutation!
    category: CategoryMutation @auth(roles: ["ADMIN"])
  }
`;
