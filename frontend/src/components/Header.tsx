import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { Logo } from "./Logo";

type ClassKey = "toolbar";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(() => ({
  toolbar: {}
}));

export const Header = enhance(({ classes }: Props) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <Logo />
    </Toolbar>
  </AppBar>
));
