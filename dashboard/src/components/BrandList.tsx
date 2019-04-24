import React, { useState } from "react";
import { LinearProgress, Dialog, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useBrandListQuery } from "../api";
import { Error } from "./Error";

import { ShopForm } from "../forms/ShopForm";
import { Item } from "./Item";
import { GridItem, GridItemCenter, GridList } from "./Grids";

export const BrandList = () => {
  const { data, loading, error, refetch } = useBrandListQuery();
  const [updateId, setUpdateId] = useState();

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    brand: { list }
  } = data;

  const brand =
    updateId === ""
      ? { title: "", description: "", image: "" }
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
      {brand && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <ShopForm input={brand} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
