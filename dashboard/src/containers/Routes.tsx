import React from "react";
import { Route, Switch } from "react-router-dom";

import { CategoryPage } from "../pages/CategoryPage";
import { ShopPage } from "../pages/ShopPage";
import { BrandPage } from "../pages/BrandPage";

export const Routes = () => (
  <Switch>
    <Route path="/shop" component={ShopPage} />
    <Route path="/brand" component={BrandPage} />
    <Route component={CategoryPage} />
  </Switch>
);
