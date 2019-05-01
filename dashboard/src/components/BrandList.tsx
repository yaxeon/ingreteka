import React, { useState } from "react";
import {
  LinearProgress,
  Dialog,
  Button,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import { useBrandListQuery } from "../api";
import { Error } from "./Error";
import { BrandForm } from "../forms/BrandForm";

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
    updateId === "" ? { title: "" } : list.find(({ id }) => updateId === id);

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
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
          {list.map(({ id, title }) => (
            <TableRow hover key={id}>
              <TableCell colSpan={2} onClick={() => setUpdateId(id)}>
                {title}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {brand && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <BrandForm input={brand} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
