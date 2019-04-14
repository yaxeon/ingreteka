import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { withStyles, WithStyles } from "@material-ui/core";

type ClassKey = "root" | "paper";

interface Props extends WithStyles<ClassKey> {}

export const drawerWidth = 240;

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    width: drawerWidth,
    flexShrink: 0
  },
  paper: {
    width: drawerWidth
  }
}));

export const Menu = enhance(({ classes }: Props) => (
  <Drawer
    className={classes.root}
    variant="permanent"
    classes={{
      paper: classes.paper
    }}
    anchor="left"
  />
));
