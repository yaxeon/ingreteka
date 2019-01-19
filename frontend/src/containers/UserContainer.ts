import { connect, Selector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { User } from "../models/User";
import { State } from "../reducers";
import { makeGetCurrentUser } from "../selectors/authSelectors";

interface StateProps {
  user?: User;
}

interface Props extends StateProps {
  children(props: StateProps): JSX.Element;
}

const makeMapStateToProps = (): Selector<State, StateProps, {}> =>
  createStructuredSelector({
    user: makeGetCurrentUser()
  });

const enhance = connect(makeMapStateToProps);

export const UserContainer = enhance(({ user, children }: Props) =>
  children({ user })
);
