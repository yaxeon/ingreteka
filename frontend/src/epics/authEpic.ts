import { combineEpics, Epic } from "redux-observable";
import { filter, switchMap, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import getProfile from "../api/query/getProfile";
import { Action } from "../actions";
import * as actions from "../actions/authActions";
import { init } from "../actions/appActions";
import { State } from "../reducers";
import { Dependencies } from "../store";

export const loginEpic: Epic<Action, Action, State, Dependencies> = (
  action$,
  state$,
  { gqlClient }
) =>
  action$.pipe(
    filter(isActionOf(init)),
    switchMap(action =>
      gqlClient.query$(getProfile).pipe(
        map(({ data }) => {
          return actions.login.success(data.profile);
        })
      )
    )
  );

export const authEpic = combineEpics(loginEpic);
