import { Model } from "mongoose";
import { IUserModel, User } from "../models/user";

export interface IContextGraphql {
  user: IUserModel | null;
  models: {
    User: Model<IUserModel>;
  };
}

export const context = ({ request }: any): IContextGraphql => {
  const { user } = request;

  return { user, models: { User } };
};
