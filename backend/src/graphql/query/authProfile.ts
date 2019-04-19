import { AuthQueryResolvers } from "../types";

export const authProfile: AuthQueryResolvers["profile"] = (
  root,
  args,
  { user }
) => {
  if (!user) {
    return null;
  }

  return user.toObject();
};
