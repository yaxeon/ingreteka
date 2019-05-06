import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import grey from "@material-ui/core/colors/grey";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  toolbar: {
    height: theme.spacing.unit * 8,
    paddingRight: 0
  },
  icon: {
    color: grey[900]
  }
}));

export interface HeaderProps {
  backUri: string;
}

export const Header: React.FC<HeaderProps> = ({ children, backUri }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Link to={backUri}>
          <IconButton className={classes.icon}>
            <ArrowBackIos />
          </IconButton>
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  );
};
