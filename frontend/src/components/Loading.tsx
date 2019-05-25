import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, Theme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";

import { HeaderLogo } from "./Header/HeaderLogo";

const useStyles = makeStyles<Theme>(theme => ({
  wrapper: {
    height: `calc(100vh - ${theme.spacing(20)}px)`,
    display: "flex",
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    color: purple[500]
  }
}));

export const Loading = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <HeaderLogo />
      <div className={classes.wrapper}>
        <CircularProgress color="inherit" />
      </div>
    </React.Fragment>
  );
};

export const LoadingContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <CircularProgress color="inherit" />
    </div>
  );
};
