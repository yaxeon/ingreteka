import React from "react";
import { Typography } from "@material-ui/core";
import { SelectionList } from "../components/Lists/SelectionList";

export const SelectionPage = () => (
  <React.Fragment>
    <Typography variant="h4" gutterBottom>
      Selections
    </Typography>
    <SelectionList />
  </React.Fragment>
);
