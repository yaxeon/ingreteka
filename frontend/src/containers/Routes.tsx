import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { BrandPage } from "../pages/BrandPage";
import { ShopPage } from "../pages/ShopPage";
import { CategoryPage } from "../pages/CategoryPage";
import { SelectionPage } from "../pages/SelectionPage";

export const Routes = () => (
  <Switch>
    <Route path="/brands" component={BrandPage} />
    <Route path="/category/shops" component={ShopPage} />
    <Route path="/category/:slug" component={CategoryPage} />
    <Route path="/selection/:slug/:id" component={SelectionPage} />
    <Route component={HomePage} />
  </Switch>
);
