import { AuthMutationResolvers } from "../types";

export const authLogout: AuthMutationResolvers["logout"] = (
  root,
  args,
  { req }
) => {
  req.logout();

  return true;
};
