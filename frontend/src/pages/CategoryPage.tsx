import React from "react";
import idx from "idx";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { HeaderSlider } from "../components/Header/HeaderSlider";
import { useCategoryListQuery } from "../api";

type PageParams = { slug: string };

export const CategoryPage: React.FC<RouteComponentProps<PageParams>> = ({
  match: {
    params: { slug }
  }
}) => {
  const { data } = useCategoryListQuery();

  const categories = idx(data, _ => _.category.list) || [];

  return (
    <React.Fragment>
      <HeaderSlider backUri="/" items={categories} selectedSlug={slug} />
      <Grid container spacing={16}>
        <Grid item xs={12}>
          {slug}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
