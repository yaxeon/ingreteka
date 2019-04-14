import { ContextGraphql } from "../context";

export const profile = (_: any, args: any, { user }: ContextGraphql) => {
  if (!user) {
    return null;
  }

  const { username, email, roles } = user.toObject();

  return { username, email, roles };
};
