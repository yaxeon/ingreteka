import passport from "passport";
import { IFieldResolver } from "graphql-tools";
import { promisify } from "util";
import { ContextGraphql } from "../context";

type Variables = {
  username: string;
  password: string;
};

const authenticate = (username: string, password: string) =>
  new Promise((resolve, reject) => {
    passport.authenticate("local", (error, user) => {
      if (error || !user) {
        return reject();
      }

      resolve(user);
    })({ body: { username, password } });
  });

export const login: IFieldResolver<any, ContextGraphql, Variables> = async (
  ...args
) => {
  try {
    const [, { username, password }, { req }] = args;
    const user = await authenticate(username, password);

    await promisify(req.logIn.bind(req))(user);
  } catch (e) {
    return false;
  }

  return true;
};
