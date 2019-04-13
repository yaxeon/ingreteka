import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppContainer } from "./containers/AppContainer";
import { configureStore } from "./store";
import { ApiClient } from "./api";
import { theme } from "./theme";
import * as serviceWorker from "./serviceWorker";
import "./style.css";

const history = createBrowserHistory();

const gqlClient = new ApiClient({ uri: "/graphql" });

const { store } = configureStore(undefined, {
  history,
  gqlClient
});

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
