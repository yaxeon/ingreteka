import React from "react";
import { Typography } from "@material-ui/core";
import { CategoryList } from "../components/CategoryList";

export const HomePage = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>Categories</Typography>
    <CategoryList />
  </React.Fragment>
);
