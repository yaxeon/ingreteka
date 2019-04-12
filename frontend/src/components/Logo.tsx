import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import logo from "../svg/logo.svg";

type ClassKey = "wrapper" | "image";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(theme => ({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: theme.spacing.unit * 8,
    flexGrow: 1
  },
  image: {
    height: theme.spacing.unit * 7,
    display: "block"
  }
}));

export const Logo = enhance(({ classes }: Props) => (
  <div className={classes.wrapper}>
    <img className={classes.image} alt="Ingreteka Guide" src={logo} />
  </div>
));
