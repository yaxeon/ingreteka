import React from "react";
import Grid from "@material-ui/core/Grid";

import { CategoryItem } from "../components/CategoryItem";
import { HeaderLogo } from "../components/HeaderLogo";
import categoryImage from "../svg/category/eco.svg";

export const HomePage = () => (
  <React.Fragment>
    <HeaderLogo />
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem
          label="Для лица"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для волос"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для тела"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem
          label="Для лица"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для волос"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для тела"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <CategoryItem
          label="Для лица"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для волос"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
      <Grid item xs={4}>
        <CategoryItem
          label="Для тела"
          image={categoryImage}
          path="/category/face"
        />
      </Grid>
    </Grid>
  </React.Fragment>
);
