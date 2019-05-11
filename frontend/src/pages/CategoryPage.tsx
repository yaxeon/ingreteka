import React from "react";
import idx from "idx";
import { RouteComponentProps } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import { HeaderSlider } from "../components/Header/HeaderSlider";
import { SelectionItem } from "../components/SelectionItem";
import { useCategoryListQuery, useSelectionListQuery } from "../api";

type PageParams = { slug: string };

export const CategoryPage: React.FC<RouteComponentProps<PageParams>> = ({
  match: {
    params: { slug }
  }
}) => {
  const categoryList = useCategoryListQuery();
  const selectionList = useSelectionListQuery({
    variables: { filter: { categorySlug: [slug] } }
  });

  const categories = idx(categoryList, _ => _.data.category.list) || [];
  const selections = idx(selectionList, _ => _.data.selection.list) || [];

  return (
    <React.Fragment>
      <HeaderSlider backUri="/" items={categories} selectedSlug={slug} />
      <Grid container spacing={16}>
        {selections.map(({ id, title, images, brands, shops, categories }) => (
          <Grid item xs={12} key={id}>
            <SelectionItem
              id={id}
              title={title}
              images={images}
              brands={brands}
              shops={shops}
              slug={slug}
              categories={categories}
            />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};
