import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";

import { Logo } from "./Logo";

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: theme.spacing.unit * 8
  }
}));

export const HeaderLogo = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Logo />
      </Toolbar>
    </AppBar>
  );
};
