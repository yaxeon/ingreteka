import { Model } from "mongoose";
import { UserModel, User } from "../models/user";

export interface ContextGraphql {
  user: UserModel | null;
  req: any;
  models: {
    User: Model<UserModel>;
  };
}

export const context = ({ req }: any): ContextGraphql => {
  const { user } = req;

  return { user, req, models: { User } };
};
