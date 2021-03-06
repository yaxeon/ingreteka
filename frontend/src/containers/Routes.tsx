import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage } from "../pages/HomePage";
import { BrandPage } from "../pages/BrandPage";
import { CategoryPage } from "../pages/CategoryPage";
import { SelectionPage } from "../pages/SelectionPage";
import { SearchPage } from "../pages/SearchPage";
import { FavoritePage } from "../pages/FavoritePage";
import { AboutPage } from "../pages/AboutPage";

export const Routes = () => (
  <Switch>
    <Route path="/about" component={AboutPage} />
    <Route path="/brands" component={BrandPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/favorite" component={FavoritePage} />
    <Route path="/category/:slug" component={CategoryPage} />
    <Route path="/selection/:slug/:id" component={SelectionPage} />
    <Route component={HomePage} />
  </Switch>
);
