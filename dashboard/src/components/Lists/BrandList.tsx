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

import { useBrandListQuery } from "../../api";
import { Error } from "../Error";
import { BrandForm } from "../Forms/BrandForm";
import { useCrudForm } from "../../hooks/useCrudForm";

export const BrandList = () => {
  const { data, loading, error, refetch } = useBrandListQuery();
  const { id, visible, onCreate, onUpdate, onClose } = useCrudForm(refetch);

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    brand: { list }
  } = data;

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
                onClick={onCreate}
              >
                <AddIcon />
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, title }) => (
            <TableRow hover key={id} onClick={() => onUpdate(id)}>
              <TableCell colSpan={2}>{title}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {visible && (
        <Dialog scroll="body" open onClose={onClose} maxWidth="sm">
          <BrandForm id={id} onClose={onClose} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
