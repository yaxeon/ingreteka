import React, { useState } from "react";
import { LinearProgress, Dialog, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useCategoryListQuery } from "../api";
import { Error } from "./Error";

import { CategoryForm } from "../forms/CategoryForm";
import { Item } from "./Item";
import { GridItem, GridItemCenter, GridList } from "./Grids";

export const CategoryList = () => {
  const { data, loading, error, refetch } = useCategoryListQuery();
  const [updateId, setUpdateId] = useState();

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    category: { list }
  } = data;

  const category =
    updateId === ""
      ? { title: "", image: "", slug: "", sort: 0 }
      : list.find(({ id }) => updateId === id);

  return (
    <React.Fragment>
      <GridList>
        {list.map(({ id, title, image }) => (
          <GridItem key={id}>
            <Item title={title} image={image} onClick={() => setUpdateId(id)} />
          </GridItem>
        ))}
        <GridItemCenter key="new">
          <Fab color="primary" onClick={() => setUpdateId("")}>
            <AddIcon />
          </Fab>
        </GridItemCenter>
      </GridList>
      {category && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <CategoryForm input={category} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
