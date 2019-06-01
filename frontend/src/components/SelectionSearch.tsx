import React from "react";
import idx from "idx";
import Grid from "@material-ui/core/Grid";

import { useSelectionSearchQuery } from "../api";
import { SelectionItem } from "./SelectionItem";
import { LoadingContent } from "./Loading";
import { Oops } from "./Oops";

interface Props {
  query: string;
}

export const SelectionSearch: React.FC<Props> = ({ query }) => {
  const { data, loading } = useSelectionSearchQuery({
    variables: { filter: { query } }
  });

  const selections = idx(data, _ => _.selection.search) || [];

  if (loading) {
    return <LoadingContent />;
  }

  if (selections.length === 0) {
    return (
      <Grid item xs={12}>
        <Oops message="По Вашему запросу ничего не найдено&#160;:(" />
      </Grid>
    );
  }

  return (
    <React.Fragment>
      {selections.map(({ id, title, images, brands, shops, categories }) => {
        const slug = categories.length ? categories[0].slug : "";

        return (
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
        );
      })}
    </React.Fragment>
  );
};
