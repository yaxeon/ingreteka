import React from "react";
import { LinearProgress, Dialog, DialogTitle } from "@material-ui/core";

export const Loading = () => {
  return (
    <Dialog open>
      <DialogTitle>Please, wait...</DialogTitle>
      <LinearProgress color="secondary" />
    </Dialog>
  );
};
