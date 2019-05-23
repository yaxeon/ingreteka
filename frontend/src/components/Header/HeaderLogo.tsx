import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Logo } from "./Logo";

const useStyles = makeStyles<Theme>(theme => ({
  toolbar: {
    height: theme.spacing(8)
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
