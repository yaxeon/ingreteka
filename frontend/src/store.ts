import { History } from "history";
import { applyMiddleware, compose, createStore, Middleware } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { Action } from "./actions";
import { Api } from "./api";
import { rootEpic } from "./epics";
import { rootReducer, State } from "./reducers";

export interface Dependencies {
  history: History;
  api: Api;
}

const composeEnhancers =
  (process.env.NODE_ENV !== "production" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const configureStore = (
  preloadedState: State | undefined,
  dependencies: Dependencies
) => {
  const epicMiddleware = createEpicMiddleware<
    Action,
    Action,
    State,
    Dependencies
  >({
    dependencies
  });
  const middlewares: Middleware[] = [epicMiddleware];

  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(middlewareEnhancer)
  );

  epicMiddleware.run(rootEpic);

  return { store };
};
