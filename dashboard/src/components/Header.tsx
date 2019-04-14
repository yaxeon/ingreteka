import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { withStyles, WithStyles } from "@material-ui/core";

import { drawerWidth } from "./Menu";

type ClassKey = "root";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  }
}));

export const Header = enhance(({ classes }: Props) => (
  <AppBar position="absolute" className={classes.root}>
    <Toolbar>
      <Typography variant="h6" color="inherit" noWrap>
        Ingreteka Guide Dashboard
      </Typography>
    </Toolbar>
  </AppBar>
));
