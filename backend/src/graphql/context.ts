import { Model } from "mongoose";
import { UserModel } from "../models/user";
import { Category, CategoryModel } from "../models/category";

export interface ContextGraphql {
  user: UserModel | null;
  req: any;
  models: {
    Category: Model<CategoryModel>;
  };
}

export const context = ({ req }: any): ContextGraphql => {
  const { user } = req;

  return { user, req, models: { Category } };
};
