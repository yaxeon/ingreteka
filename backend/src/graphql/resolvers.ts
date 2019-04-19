import { Resolvers } from "./types";
import { authProfile } from "./query/authProfile";
import { authLogin } from "./mutation/authLogin";
import { authLogout } from "./mutation/authLogout";
import { categoryUpsert } from "./mutation/categoryUpsert";

const empty = () => ({});

export const resolvers: Resolvers = {
  Query: {
    auth: empty
  },
  Mutation: {
    auth: empty,
    category: empty
  },
  AuthQuery: {
    profile: authProfile
  },
  AuthMutation: {
    login: authLogin,
    logout: authLogout
  },
  CategoryMutation: {
    upsert: categoryUpsert
  }
};
