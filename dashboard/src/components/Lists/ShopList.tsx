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

import { useCrudForm } from "../../hooks/useCrudForm";
import { ShopForm } from "../Forms/ShopForm";
import { useShopListQuery } from "../../api";
import { Error } from "../Error";
import { Image } from "../Image";

export const ShopList = () => {
  const { data, loading, error, refetch } = useShopListQuery();
  const { id, visible, onCreate, onUpdate, onClose } = useCrudForm(refetch);

  if (loading) {
    return <LinearProgress />;
  }

  if (error || !data) {
    return <Error />;
  }

  const {
    shop: { list }
  } = data;

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
                onClick={onCreate}
              >
                <AddIcon />
                Add
              </Button>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list.map(({ id, title, link, image }) => (
            <TableRow hover key={id} onClick={() => onUpdate(id)}>
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
      {visible && (
        <Dialog scroll="body" open onClose={onClose} maxWidth="sm">
          <ShopForm id={id} onClose={onClose} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
