import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { BrandPage } from "../pages/BrandPage";

export const Routes = () => (
  <Switch>
    <Route path="/brands" component={BrandPage} />
    <Route component={HomePage} />
  </Switch>
);
