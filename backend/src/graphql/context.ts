import { Model } from "mongoose";
import { UserModel } from "../models/user";
import { Category, CategoryModel } from "../models/category";
import { Request } from "express";

export interface ContextGraphql {
  user: UserModel | null;
  req: Request;
  models: {
    Category: Model<CategoryModel>;
  };
}

export const context = ({ req }: any): ContextGraphql => {
  const { user } = req;

  return { user, req, models: { Category } };
};
