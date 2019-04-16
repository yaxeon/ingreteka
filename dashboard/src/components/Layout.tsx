import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import { Header } from "./Header";

type ClassKey = "content";

interface Props extends WithStyles<ClassKey> {
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>(theme => ({
  content: {
    marginTop: theme.mixins.toolbar.minHeight,
    padding: theme.spacing.unit * 3
  }
}));

export const Layout = enhance(({ children, classes }: Props) => (
  <div>
    <Header />
    <div className={classes.content}>{children}</div>
  </div>
));
