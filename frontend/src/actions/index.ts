import { ActionType } from "typesafe-actions";
import * as authActions from "./authActions";
import * as appActions from "./appActions";

export type Action = ActionType<typeof authActions | typeof appActions>;
