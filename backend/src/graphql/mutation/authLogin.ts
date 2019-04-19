import passport from "passport";
import { promisify } from "util";

import { AuthMutationResolvers } from "../types";

const authenticate = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    passport.authenticate("local", (error, user) => {
      if (error || !user) {
        return reject();
      }

      resolve(user);
    })({ body: { username, password } });
  });

export const authLogin: AuthMutationResolvers["login"] = async (
  root,
  { input: { username, password } },
  { req }
) => {
  try {
    const user = await authenticate(username, password);

    await promisify(req.logIn.bind(req))(user);
  } catch (e) {
    return false;
  }

  return true;
};
