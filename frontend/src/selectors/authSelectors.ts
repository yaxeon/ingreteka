import { User } from "../models/User";
import { State } from "../reducers";

export const makeGetCurrentUser = () => (state: State): User | undefined =>
  state.auth.user;
