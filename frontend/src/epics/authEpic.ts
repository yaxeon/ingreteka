import { combineEpics, Epic } from "redux-observable";
import { filter, switchMap, map } from "rxjs/operators";
import { isActionOf } from "typesafe-actions";
import { getProfile } from "../api/method/getProfile";
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
      getProfile(gqlClient).pipe(
        map(({ data }) => {
          if (data.profile) {
            return actions.login(data.profile);
          }
          return actions.logout();
        })
      )
    )
  );

export const authEpic = combineEpics(loginEpic);
