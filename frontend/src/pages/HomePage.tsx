import React from "react";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

import { HeaderLogo } from "../components/HeaderLogo";
import { CategoryItem } from "../components/CategoryItem";
import { useCategoryListQuery } from "../api";

export const HomePage = () => {
  const { data, loading, error } = useCategoryListQuery();

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  if (error || !data) {
    return <Typography color="error">Error</Typography>;
  }

  return (
    <React.Fragment>
      <HeaderLogo />
      <Grid container spacing={16}>
        {data.category.list.map(({ id, title, image, slug }) => (
          <Grid item xs={4} key={id}>
            <CategoryItem title={title} image={image} slug={slug} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
