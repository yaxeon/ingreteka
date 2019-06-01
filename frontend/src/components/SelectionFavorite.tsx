import React, { useContext } from "react";
import idx from "idx";
import Grid from "@material-ui/core/Grid";

import { FavoriteContext } from "../containers/FavoriteContext";
import { SelectionItem } from "./SelectionItem";
import { useSelectionListQuery } from "../api";
import { LoadingContent } from "./Loading";
import { Oops } from "./Oops";

export const SelectionFavorite: React.FC = () => {
  const [favorites] = useContext(FavoriteContext);
  const { data, loading } = useSelectionListQuery({
    variables: { filter: { id: favorites } }
  });
  const selections = idx(data, _ => _.selection.list) || [];

  if (loading) {
    return <LoadingContent />;
  }

  if (selections.length === 0) {
    return (
        <Grid item xs={12}>
          <Oops message="Вы пока ничего не добавили в избранное&#160;:("/>
        </Grid>
    );
  }

  return (
    <React.Fragment>
      {selections.map(({ id, title, images, brands, shops, categories }) => (
        <Grid item xs={12} key={id}>
          <SelectionItem
            id={id}
            title={title}
            images={images}
            brands={brands}
            shops={shops}
            slug={categories.length ? categories[0].slug : ""}
            categories={categories}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};
