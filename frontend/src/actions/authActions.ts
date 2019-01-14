import { createAsyncAction, createStandardAction } from "typesafe-actions";
import { User } from "../models/User";

export const login = createAsyncAction(
  "LOGIN_REQUEST",
  "LOGIN_SUCCESS",
  "LOGIN_FAILURE"
)<void, User, Error>();

export const logout = createStandardAction("LOGOUT")<void>();
