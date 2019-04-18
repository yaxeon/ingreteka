import { IFieldResolver } from "graphql-tools";

import { ContextGraphql } from "../context";

export const logout: IFieldResolver<any, ContextGraphql> = (...args) => {
  const [, , { req }] = args;

  try {
    req.logout();
  } catch (e) {
    return false;
  }

  return true;
};
