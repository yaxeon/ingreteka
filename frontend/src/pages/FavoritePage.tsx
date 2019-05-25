import React from "react";
import Grid from "@material-ui/core/Grid";

import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Container } from "../components/Layout";
import { SelectionFavorite } from "../components/SelectionFavorite";

export const FavoritePage: React.FC = () => {
  return (
    <React.Fragment>
      <HeaderMenu backUri="/">Избранное</HeaderMenu>
      <Container>
        <Grid container spacing={2}>
          <SelectionFavorite />
        </Grid>
      </Container>
    </React.Fragment>
  );
};
