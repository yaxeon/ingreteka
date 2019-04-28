import React, { useState } from "react";

import {
  Button,
  DialogActions,
  Menu,
  MenuItem,
  IconButton
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

interface Props {
  disabled: boolean;
  id?: string | null;
  onDelete: (id: string) => void;
}

export const FormCrudAction: React.FC<Props> = ({ disabled, id, onDelete }) => {
  const [anchorEl, updateAnchorEl] = useState();
  const open = Boolean(anchorEl);
  const handleClose = () => {
    updateAnchorEl(null);
  };
  const handleDelete = () => {
    id && onDelete(id);
    updateAnchorEl(null);
  };

  return (
    <DialogActions>
      <Button disabled={disabled} color="primary" type="submit">
        {id ? "Update" : "Create"}
      </Button>
      {id && (
        <IconButton
          onClick={event => {
            updateAnchorEl(event.currentTarget);
          }}
        >
          <Delete fontSize="small" />
        </IconButton>
      )}
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={handleDelete}>Delete forever</MenuItem>
      </Menu>
    </DialogActions>
  );
};
