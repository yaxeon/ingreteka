import { combineEpics, Epic } from "redux-observable";
import { of } from "rxjs";
import { filter, switchMap } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { Action } from "../actions";
import * as actions from "../actions/authActions";
import { init } from "../actions/appActions";
import { State } from "../reducers";
import { Dependencies } from "../store";

export const loginEpic: Epic<Action, Action, State, Dependencies> = action$ =>
  action$.pipe(
    filter(isActionOf(init)),
    switchMap(action =>
      of(actions.login.success({ username: "test", picture: "image" }))
    )
  );

export const authEpic = combineEpics(loginEpic);
