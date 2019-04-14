import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import { Header } from "./Header";
import { Menu } from "./Menu";

type ClassKey = "root" | "content";

interface Props extends WithStyles<ClassKey> {
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    display: "flex"
  },
  content: {
    marginTop: theme.mixins.toolbar.minHeight,
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
}));

export const Layout = enhance(({ children, classes }: Props) => (
  <div className={classes.root}>
    <Header />
    <Menu />
    <div className={classes.content}>{children}</div>
  </div>
));
