import { Document, model, Schema } from "mongoose";
import bcrypt from "bcrypt";

export enum UserRole {
  USER = "USER",
  ADMIN = "ADMIN"
}

export interface UserModel extends Document {
  email: string;
  password: string;
  username?: string;
  roles: UserRole[];
  createdAt: Date;
  verifyPassword(password: string): boolean;
  isAdmin(): boolean;
}

export const UserSchema: Schema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String
    },
    roles: [{ type: String, enum: [UserRole.USER, UserRole.ADMIN] }],
    createdAt: { type: Date, default: Date.now }
  },
  {
    versionKey: false
  }
);

UserSchema.methods.verifyPassword = function(password: string) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.isAdmin = function() {
  this.roles.includes(UserRole.ADMIN);
};

export const User = model<UserModel>("User", UserSchema, "users");

export const hashPassword = (password: string) => bcrypt.hashSync(password, 8);
