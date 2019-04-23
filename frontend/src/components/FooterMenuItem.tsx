import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles, colors } from "@material-ui/core";
import { Link, Route } from "react-router-dom";

import { IconFooter } from "./icons/types";

type ClassKey = "root";

interface Props extends WithStyles<ClassKey> {
  path: string;
  label: string;
  icon: IconFooter;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    width: theme.spacing.unit * 10,
    color: colors.grey[900],
    "& > svg": {
      fontSize: 30
    }
  }
}));

export const FooterMenuItem = enhance(
  ({ classes, path, label, icon: Icon }: Props) => (
    <Route
      exact
      path={path}
      children={({ match }) => (
        <Link className={classes.root} to={path}>
          <Icon active={!!match} />
          <Typography variant="caption">{label}</Typography>
        </Link>
      )}
    />
  )
);
