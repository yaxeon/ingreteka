import { Model } from "mongoose";
import { UserModel } from "../models/user";
import { Category, CategoryModel } from "../models/category";
import { Brand, BrandModel } from "../models/brand";
import { Shop, ShopModel } from "../models/shop";
import { Selection, SelectionModel } from "../models/selection";
import { Request } from "express";

export interface ContextGraphql {
  user: UserModel | null;
  req: Request;
  models: {
    Category: Model<CategoryModel>;
    Brand: Model<BrandModel>;
    Shop: Model<ShopModel>;
    Selection: Model<SelectionModel>;
  };
}

export const context = ({ req }: any): ContextGraphql => {
  const { user = null } = req;

  return { user, req, models: { Category, Brand, Shop, Selection } };
};
