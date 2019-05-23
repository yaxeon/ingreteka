import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@material-ui/styles";
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContainer />
      </ThemeProvider>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
