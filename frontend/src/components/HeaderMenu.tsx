import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { withStyles, WithStyles, colors } from "@material-ui/core";

type ClassKey = "root" | "toolbar";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(theme => ({
  toolbar: {
    height: theme.spacing.unit * 8
  },
  root: {
    color: colors.grey[900]
  }
}));

export const HeaderMenu = enhance(({ classes }: Props) => (
  <AppBar>
    <Toolbar className={classes.toolbar}>
      <Link to="/">
        <IconButton className={classes.root}>
          <ArrowBackIos />
        </IconButton>
      </Link>
    </Toolbar>
  </AppBar>
));
