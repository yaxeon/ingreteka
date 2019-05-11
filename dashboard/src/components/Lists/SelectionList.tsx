import React from "react";
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
import dayjs from "dayjs";

import { useSelectionListQuery } from "../../api";
import { Error } from "../Error";
import { SelectionForm } from "../Forms/SelectionForm";
import { useCrudForm } from "../../hooks/useCrudForm";

export const SelectionList = () => {
  const { data, loading, error, refetch } = useSelectionListQuery();
  const { id, visible, onCreate, onUpdate, onClose } = useCrudForm(refetch);

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    selection: { list }
  } = data;

  return (
    <React.Fragment>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Brands</TableCell>
            <TableCell>Shops</TableCell>
            <TableCell>Created</TableCell>
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
          {list.map(({ id, title, categories, brands, shops, createdAt }) => (
            <TableRow hover key={id} onClick={() => onUpdate(id)}>
              <TableCell>{title}</TableCell>
              <TableCell>
                {categories.map(({ title }) => title).join(", ")}
              </TableCell>
              <TableCell>
                {brands.map(({ title }) => title).join(", ")}
              </TableCell>
              <TableCell>
                {shops.map(({ title }) => title).join(", ")}
              </TableCell>
              <TableCell colSpan={2}>
                {dayjs(createdAt).format("DD/MM/YYYY HH:mm")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {visible && (
        <Dialog scroll="body" open onClose={onClose} maxWidth="md">
          <SelectionForm id={id} onClose={onClose} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
