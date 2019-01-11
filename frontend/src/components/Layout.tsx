import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";

type ClassKey = "root" | "topBar" | "bottomBar";

interface Props extends WithStyles<ClassKey> {
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>({
  root: {
    paddingTop: "64px",
    paddingBottom: "48px"
  },
  topBar: {},
  bottomBar: {
    top: "auto",
    bottom: 0
  }
});

export const Layout = enhance(({ children, classes }: Props) => (
  <div className={classes.root}>
    <AppBar position="fixed" className={classes.topBar} color="default">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    {children}
    <AppBar position="fixed" className={classes.bottomBar} color="default">
      <Toolbar>
        <IconButton component="a" href="/auth/instagram">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
));
