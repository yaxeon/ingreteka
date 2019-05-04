import React from "react";
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

import { useCategoryListQuery } from "../../api";
import { Error } from "../Error";
import { Image } from "../Image";
import { CategoryForm } from "../Forms/CategoryForm";
import { useCrudForm } from "../../hooks/useCrudForm";

export const CategoryList = () => {
  const { data, loading, error, refetch } = useCategoryListQuery();
  const { id, visible, onCreate, onUpdate, onClose } = useCrudForm(refetch);

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    category: { list }
  } = data;

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
                onClick={onCreate}
              >
                <AddIcon />
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, title, slug, image }) => (
            <TableRow hover key={id} onClick={() => onUpdate(id)}>
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
      {visible && (
        <Dialog scroll="body" open onClose={onClose} maxWidth="sm">
          <CategoryForm id={id} onClose={onClose} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
