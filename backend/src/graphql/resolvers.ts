import { IResolvers } from "graphql-tools";

import { ContextGraphql } from "./context";
import { profile } from "./query/profile";
import { login } from "./mutation/login";
import { logout } from "./mutation/logout";

export const resolvers: IResolvers<any, ContextGraphql> = {
  Query: {
    profile
  },
  Mutation: {
    login,
    logout
  }
};
