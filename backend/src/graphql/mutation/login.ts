import passport from "passport";
import { promisify } from "util";
import { ContextGraphql } from "../context";

const authenticate = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    passport.authenticate("local", (error, user) => {
      if (error || !user) {
        return reject();
      }

      resolve(user);
    })({ body: { username, password } });
  });

export const login = async (_: any, args: any, { req }: ContextGraphql) => {
  try {
    const { username, password } = args;
    const user = await authenticate(username, password);

    await promisify(req.logIn.bind(req))(user);
  } catch (e) {
    return false;
  }

  return true;
};
