import { ActionType } from "typesafe-actions";
import * as authActions from "./authActions";

export type Action = ActionType<typeof authActions>;
