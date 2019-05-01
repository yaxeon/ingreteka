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

import { useCategoryListQuery } from "../api";
import { Error } from "./Error";
import { Image } from "./Image";
import { CategoryForm } from "../forms/CategoryForm";

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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Slug</TableCell>
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
          {list.map(({ id, title, slug, image }) => (
            <TableRow hover key={id} onClick={() => setUpdateId(id)}>
              <TableCell>{title}</TableCell>
              <TableCell>{slug}</TableCell>
              <TableCell>
                <Image alt={title} src={image} />
              </TableCell>
              <TableCell />
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {category && (
        <Dialog scroll="body" open onClose={() => setUpdateId(undefined)}>
          <CategoryForm input={category} onReload={refetch} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
