import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { Logo } from "./Logo";

type ClassKey = "toolbar";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(() => ({
  toolbar: {}
}));

export const HeaderLogo = enhance(({ classes }: Props) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Logo />
    </Toolbar>
  </AppBar>
));
