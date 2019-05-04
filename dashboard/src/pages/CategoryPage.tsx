import React from "react";
import { Typography } from "@material-ui/core";
import { CategoryList } from "../components/Lists/CategoryList";

export const CategoryPage = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>
      Categories
    </Typography>
    <CategoryList />
  </React.Fragment>
);
