import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import { Footer } from "./Footer";

type ClassKey = "root";

interface Props extends WithStyles<ClassKey> {
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    paddingTop: 12 * theme.spacing.unit,
    paddingBottom: 10 * theme.spacing.unit,
    paddingLeft: 4 * theme.spacing.unit,
    paddingRight: 4 * theme.spacing.unit
  }
}));

export const Layout = enhance(({ children, classes }: Props) => (
  <div className={classes.root}>
    {children}
    <Footer />
  </div>
));
