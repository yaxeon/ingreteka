import { IContextGraphql } from "./context";

export const resolvers = {
  Query: {
    profile: (parent: any, args: any, { user }: IContextGraphql) => {
      if (!user) {
        return null;
      }
      const { username, roles, picture } = user.toObject();

      return { username, roles, picture };
    }
  }
};
