import { Document, Schema, Model, model } from "mongoose";

enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface IUserModel extends Document {
  email?: string;
  username?: string;
  roles: UserRole[];
  createdAt: Date;
  instagramId: string;
}

export const UserSchema: Schema = new Schema(
  {
    email: String,
    username: String,
    roles: [{ type: String, enum: [UserRole.USER, UserRole.ADMIN] }],
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
