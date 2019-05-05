import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import grey from "@material-ui/core/colors/grey";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: theme.spacing.unit * 8
  },
  root: {
    color: grey[900]
  },
  title: {}
}));

export const HeaderMenu: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Link to="/">
          <IconButton className={classes.root}>
            <ArrowBackIos />
          </IconButton>
        </Link>
        <Typography variant="h6" className={classes.title}>
          {children}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
