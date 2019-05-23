import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import logo from "../../svg/logo.svg";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    flexGrow: 1
  },
  image: {
    display: "block"
  }
});

export const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <img className={classes.image} alt="Ingreteka Guide" src={logo} />
    </div>
  );
};
