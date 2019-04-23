import React from "react";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { IconHome } from "./icons/IconHome";
import { IconBrand } from "./icons/IconBrand";
import { IconSearch } from "./icons/IconSearch";
import { IconFavorite } from "./icons/IconFavorite";
import { FooterMenuItem } from "./FooterMenuItem";

type ClassKey = "root" | "toolbar";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    justifyContent: "space-between",
    height: theme.spacing.unit * 8
  }
}));

export const Footer = enhance(({ classes }: Props) => (
  <AppBar position="fixed" className={classes.root}>
    <Toolbar className={classes.toolbar}>
      <FooterMenuItem path="/" icon={IconHome} label="Главная" />
      <FooterMenuItem path="/search" icon={IconSearch} label="Поиск" />
      <FooterMenuItem path="/brands" icon={IconBrand} label="Бренды" />
      <FooterMenuItem path="/favorite" icon={IconFavorite} label="Избранное" />
    </Toolbar>
  </AppBar>
));
