import React from "react";
import { Typography } from "@material-ui/core";
import { ShopList } from "../components/ShopList";

export const ShopPage = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>
      Shops
    </Typography>
    <ShopList />
  </React.Fragment>
);
