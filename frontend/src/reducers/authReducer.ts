import { Reducer } from "redux";
import { getType } from "typesafe-actions";
import { Action } from "../actions";
import * as actions from "../actions/authActions";
import { User } from "../models/User";

interface State {
  user?: User;
}

const initialState: State = {};

export const authReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case getType(actions.login.success):
      return {
        user: action.payload
      };

    case getType(actions.logout):
      return initialState;

    default:
      return state;
  }
};
