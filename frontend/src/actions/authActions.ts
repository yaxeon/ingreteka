import { createStandardAction } from "typesafe-actions";
import { User } from "../models/User";

export const login = createStandardAction("LOGIN")<User>();
export const logout = createStandardAction("LOGOUT")<void>();
