import { authenticate } from "../../auth/authenticate";
import { AuthMutationResolvers, AuthQueryResolvers } from "../types";

const AuthMutation: AuthMutationResolvers = {
  login: async (root, { input: { username, password } }, { req }) => {
    try {
      const user = await authenticate(username, password);

      await new Promise((resolve, reject) => {
        req.logIn(user, err => {
          err ? reject(err) : resolve();
        });
      });
    } catch (e) {
      return false;
    }

    return true;
  },
  logout: (root, args, { req }) => {
    req.logout();

    return true;
  }
};

const AuthQuery: AuthQueryResolvers = {
  profile: (root, args, { user }) => {
    if (!user) {
      return null;
    }

    return user.toObject();
  }
};

export default {
  AuthQuery,
  AuthMutation
};
