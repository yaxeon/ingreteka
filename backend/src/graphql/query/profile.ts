import { IFieldResolver } from "graphql-tools";

import { ContextGraphql } from "../context";

export const profile: IFieldResolver<any, ContextGraphql> = (...args) => {
  const [, , { user }] = args;

  if (!user) {
    return null;
  }

  const { username, email, roles } = user.toObject();

  return { username, email, roles };
};
