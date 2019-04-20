import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ApolloProvider } from "react-apollo-hooks";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import { AppContainer } from "./containers/AppContainer";
import { createClient } from "./api/client";
import { theme } from "./theme";
import * as serviceWorker from "./serviceWorker";

const history = createBrowserHistory();
const client = createClient({ uri: "/graphql" });

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </MuiThemeProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
