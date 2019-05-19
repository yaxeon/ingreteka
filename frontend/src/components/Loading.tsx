import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/styles";

import { HeaderLogo } from "./Header/HeaderLogo";

const useStyles = makeStyles(theme => ({
  wrapper: {
    height: `calc(100vh - ${theme.spacing.unit * 20}px)`,
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  }
}));

export const Loading = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeaderLogo />
      <div className={classes.wrapper}>
        <CircularProgress color="secondary" />
      </div>
    </React.Fragment>
  );
};

export const LoadingContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress color="secondary" />
    </div>
  );
};
