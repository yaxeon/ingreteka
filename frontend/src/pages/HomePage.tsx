import React from "react";
import Grid from "@material-ui/core/Grid";

import { CategoryItem } from "../components/CategoryItem";
import categoryImage from "../svg/category/eco.svg";

export const HomePage = () => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для волос" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для тела" image={categoryImage} />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для волос" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для тела" image={categoryImage} />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem label="Для лица" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для волос" image={categoryImage} />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem label="Для тела" image={categoryImage} />
      </Grid>
    </Grid>
  </div>
);
