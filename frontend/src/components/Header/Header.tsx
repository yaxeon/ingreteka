import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import grey from "@material-ui/core/colors/grey";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosOutlined";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>(theme => ({
  toolbar: {
    height: theme.spacing(8),
    paddingLeft: 0,
    paddingRight: 0
  },
  icon: {
    color: grey[900]
  }
}));

export interface HeaderProps {
  backUri?: string;
}

export const Header: React.FC<HeaderProps> = ({ children, backUri }) => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        {backUri && (
          <Link to={backUri}>
            <IconButton className={classes.icon}>
              <ArrowBackIos />
            </IconButton>
          </Link>
        )}
        {children}
      </Toolbar>
    </AppBar>
  );
};
