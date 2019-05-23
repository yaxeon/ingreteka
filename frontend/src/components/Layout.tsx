import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Footer } from "./Footer/Footer";

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(10),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    minWidth: 320
  },
  container: {
    maxWidth: "600px",
    margin: "auto"
  },
  "@global": {
    a: {
      textDecoration: "none"
    }
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

export const Container: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.container}>{children}</div>;
};
