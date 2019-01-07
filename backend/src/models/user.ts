import { Document, Schema, Model, model } from "mongoose";

export interface IUserModel extends Document {
  email?: string;
  username?: string;
  roles: string[];
  createdAt: Date;
  instagramId: string;
}

export const UserSchema: Schema = new Schema(
  {
    email: String,
    username: String,
    roles: [String],
    createdAt: { type: Date, default: Date.now },
    instagramId: String
  },
  {
    versionKey: false
  }
);

export const User: Model<IUserModel> = model<IUserModel>(
  "User",
  UserSchema,
  "users"
);
