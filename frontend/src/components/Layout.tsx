import React from "react";
import { makeStyles } from "@material-ui/styles";

import { Footer } from "./Footer/Footer";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 10 * theme.spacing.unit,
    paddingBottom: 10 * theme.spacing.unit,
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    minWidth: 320
  }
}));

export const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {children}
      <Footer />
    </div>
  );
};
