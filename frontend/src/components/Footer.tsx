import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Search from "@material-ui/icons/Search";
import Favorite from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";

import { UserContainer } from "../containers/UserContainer";

type ClassKey = "root" | "toolbar";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    justifyContent: "space-around"
  }
}));

export const Footer = enhance(({ classes }: Props) => (
  <AppBar position="fixed" className={classes.root}>
    <Toolbar className={classes.toolbar}>
      <IconButton>
        <Home />
      </IconButton>
      <IconButton>
        <Search />
      </IconButton>
      <IconButton>
        <Favorite />
      </IconButton>
      <UserContainer>
        {({ user }) => {
          if (!user) {
            return (
              <IconButton component="a" href="/auth/instagram">
                <AccountCircle />
              </IconButton>
            );
          }

          return <Avatar src={user.picture} />;
        }}
      </UserContainer>
    </Toolbar>
  </AppBar>
));
