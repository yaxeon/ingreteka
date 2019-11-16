import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import { Header } from "./Header";

type ClassKey = "content" | "root";

interface Props extends WithStyles<ClassKey> {
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    minWidth: 320
  },
  content: {
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing(3)
  }
}));

export const Layout = enhance(({ children, classes }: Props) => (
  <div className={classes.root}>
    <Header />
    <div className={classes.content}>{children}</div>
  </div>
));
