import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { CategoryPage } from "../pages/CategoryPage";

export const Routes = () => (
  <Switch>
    <Route path="/category/:name" component={CategoryPage} />
    <Route component={HomePage} />
  </Switch>
);
