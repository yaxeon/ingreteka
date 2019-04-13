import React from "react";
import Grid from "@material-ui/core/Grid";

import { CategoryItem } from "../components/CategoryItem";
import { HeaderLogo } from "../components/HeaderLogo";
import { categories } from "../json/categories";

export const HomePage = () => (
  <React.Fragment>
    <HeaderLogo />
    <Grid container spacing={24}>
      {categories.map(({ title, image, path }) => (
        <Grid item xs={4} key={path}>
          <CategoryItem label={title} image={image} path={path} />
        </Grid>
      ))}
    </Grid>
  </React.Fragment>
);
