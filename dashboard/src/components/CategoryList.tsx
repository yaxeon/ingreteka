import React from "react";
import { Grid, LinearProgress } from "@material-ui/core";

import { useCategoryListQuery } from "../api";
import { Error } from "./Error";
import { CategoryForm } from "../forms/CategoryForm";

export const CategoryList = () => {
  const { data, loading, error, refetch } = useCategoryListQuery();

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    category: { list }
  } = data;

  return (
    <Grid container spacing={32}>
      {list.map(item => (
        <Grid item xs={4} key={item.id}>
          <CategoryForm input={item} onReload={refetch} />
        </Grid>
      ))}
      <Grid item xs={4} key="new">
        <CategoryForm
          input={{
            slug: "",
            sort: 0,
            title: "",
            description: "",
            image: ""
          }}
          onReload={refetch}
        />
      </Grid>
    </Grid>
  );
};
