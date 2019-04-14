import { profile } from "./query/profile";
import { login } from "./mutation/login";

export const resolvers = {
  Query: {
    profile
  },
  Mutation: {
    login
  }
};
