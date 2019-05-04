import React from "react";
import { Typography } from "@material-ui/core";
import { BrandList } from "../components/Lists/BrandList";

export const BrandPage = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>
      Brands
    </Typography>
    <BrandList />
  </React.Fragment>
);
