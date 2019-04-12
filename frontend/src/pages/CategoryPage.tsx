import React from "react";
import Grid from "@material-ui/core/Grid";

import { CategoryItem } from "../components/CategoryItem";
import { HeaderMenu } from "../components/HeaderMenu";
import categoryImage from "../svg/category/eco.svg";

export const CategoryPage = () => (
  <React.Fragment>
    <HeaderMenu />
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} path="" />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} path="" />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} path="" />
      </Grid>
    </Grid>
  </React.Fragment>
);
