import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { BrandPage } from "../pages/BrandPage";
import { CategoryPage } from "../pages/CategoryPage";

export const Routes = () => (
  <Switch>
    <Route path="/brands" component={BrandPage} />
    <Route path="/category/:slug" component={CategoryPage} />
    <Route component={HomePage} />
  </Switch>
);
