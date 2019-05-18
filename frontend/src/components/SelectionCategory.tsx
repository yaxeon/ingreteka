import React from "react";
import idx from "idx";
import Grid from "@material-ui/core/Grid";

import { SelectionItem } from "./SelectionItem";
import { useSelectionListQuery } from "../api";

interface Props {
  slug: string;
}

export const SelectionCategory: React.FC<Props> = ({ slug }) => {
  const selectionList = useSelectionListQuery({
    variables: { filter: { categorySlug: [slug] } }
  });
  const selections = idx(selectionList, _ => _.data.selection.list) || [];

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
            slug={slug}
            categories={categories}
          />
        </Grid>
      ))}
    </React.Fragment>
  );
};
