import React from "react";
import { Route, Switch } from "react-router-dom";

import { CategoryPage } from "../pages/CategoryPage";
import { ShopPage } from "../pages/ShopPage";
import { BrandPage } from "../pages/BrandPage";
import { SelectionPage } from "../pages/SelectionPage";
import { PdfPage } from "../pages/PdfPage";

export const Routes = () => (
  <Switch>
    <Route path="/pdf" component={PdfPage} />
    <Route path="/shop" component={ShopPage} />
    <Route path="/brand" component={BrandPage} />
    <Route path="/category" component={CategoryPage} />
    <Route component={SelectionPage} />
  </Switch>
);
