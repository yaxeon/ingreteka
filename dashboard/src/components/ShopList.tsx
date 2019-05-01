import React, { useState } from "react";
import {
  LinearProgress,
  Dialog,
  TableHead,
  TableRow,
  TableCell,
  Button,
  TableBody,
  Table
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useShopListQuery } from "../api";
import { Error } from "./Error";

import { ShopForm } from "../forms/ShopForm";
import { Image } from "./Image";

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
      ? { title: "", link: "", image: "" }
      : list.find(({ id }) => updateId === id);

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Link</TableCell>
            <TableCell style={{ width: 80 }}>Image</TableCell>
            <TableCell align="right">
              <Button
                size="small"
                variant="outlined"
                color="primary"
                onClick={() => setUpdateId("")}
              >
                <AddIcon />
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, title, link, image }) => (
            <TableRow hover key={id} onClick={() => setUpdateId(id)}>
              <TableCell>{title}</TableCell>
              <TableCell>{link}</TableCell>
              <TableCell>
                <Image alt={title} src={image} />
              </TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {shop && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <ShopForm input={shop} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
