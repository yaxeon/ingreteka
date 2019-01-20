import { Document, Model, model, Schema } from "mongoose";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface IUserModel extends Document {
  email?: string;
  username?: string;
  roles: UserRole[];
  createdAt: Date;
  facebookId?: string;
  picture?: string;
}

export const UserSchema: Schema = new Schema(
  {
    email: String,
    username: String,
    roles: [{ type: String, enum: [UserRole.USER, UserRole.ADMIN] }],
    createdAt: { type: Date, default: Date.now },
    facebookId: String,
    picture: String
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
