import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { IconHome } from "./icons/IconHome";
import { FooterMenuItem } from "./FooterMenuItem";

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
      <FooterMenuItem path="/" label="Главная">
        <IconHome />
      </FooterMenuItem>
      <FooterMenuItem path="/" label="Поиск">
        <IconHome />
      </FooterMenuItem>
      <FooterMenuItem path="/" label="Бренды">
        <IconHome />
      </FooterMenuItem>
      <FooterMenuItem path="/" label="Избранное">
        <IconHome />
      </FooterMenuItem>
    </Toolbar>
  </AppBar>
));
