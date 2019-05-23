import React from "react";
import idx from "idx";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { HeaderSlider } from "../components/Header/HeaderSlider";
import { SelectionCategory } from "../components/SelectionCategory";
import { ShopCategory } from "../components/ShopCategory";
import { Container } from "../components/Layout";
import { useCategoryListQuery } from "../api";

interface PageParams {
  slug: string;
}

export const CategoryPage: React.FC<RouteComponentProps<PageParams>> = ({
  match: {
    params: { slug }
  }
}) => {
  const categoryList = useCategoryListQuery();
  const categories = idx(categoryList, _ => _.data.category.list) || [];

  return (
    <React.Fragment>
      <HeaderSlider backUri="/" items={categories} selectedSlug={slug} />
      <Container>
        <Grid container spacing={2}>
          {slug === "shops" ? (
            <ShopCategory />
          ) : (
            <SelectionCategory slug={slug} />
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
