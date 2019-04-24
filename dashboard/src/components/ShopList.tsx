import React, { useState } from "react";
import { LinearProgress, Dialog, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useShopListQuery } from "../api";
import { Error } from "./Error";

import { ShopForm } from "../forms/ShopForm";
import { Item } from "./Item";
import { GridItem, GridItemCenter, GridList } from "./Grids";

export const ShopList = () => {
  const { data, loading, error, refetch } = useShopListQuery();
  const [updateId, setUpdateId] = useState();

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    shop: { list }
  } = data;

  const shop =
    updateId === ""
      ? { title: "", description: "", link: "", image: "" }
      : list.find(({ id }) => updateId === id);

  return (
    <React.Fragment>
      <GridList>
        {list.map(({ id, title, link, image }) => (
          <GridItem key={id}>
            <Item
              title={title}
              image={image}
              subTitle={link || ""}
              onClick={() => setUpdateId(id)}
            />
          </GridItem>
        ))}
        <GridItemCenter key="new">
          <Fab color="primary" onClick={() => setUpdateId("")}>
            <AddIcon />
          </Fab>
        </GridItemCenter>
      </GridList>
      {shop && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <ShopForm input={shop} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
