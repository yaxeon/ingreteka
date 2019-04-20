import { Resolvers } from "./types";
import { authProfile } from "./query/authProfile";
import { categorList } from "./query/categoryList";
import { authLogin } from "./mutation/authLogin";
import { authLogout } from "./mutation/authLogout";
import { categoryUpsert } from "./mutation/categoryUpsert";
import { categoryDelete } from "./mutation/categoryDelete";
import { fileUpload } from "./mutation/fileUpload";

const empty = () => ({});

export const resolvers: Resolvers = {
  Query: {
    auth: empty,
    category: empty
  },
  Mutation: {
    auth: empty,
    category: empty,
    fileUpload
  },
  AuthQuery: {
    profile: authProfile
  },
  CategoryQuery: {
    list: categorList
  },
  AuthMutation: {
    login: authLogin,
    logout: authLogout
  },
  CategoryMutation: {
    upsert: categoryUpsert,
    delete: categoryDelete
  }
};
