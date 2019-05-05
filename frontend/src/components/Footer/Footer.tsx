import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { IconHome } from "../icons/IconHome";
import { IconBrand } from "../icons/IconBrand";
import { IconSearch } from "../icons/IconSearch";
import { IconFavorite } from "../icons/IconFavorite";
import { FooterMenuItem } from "./FooterMenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    top: "auto",
    bottom: 0
  },
  toolbar: {
    justifyContent: "space-between",
    height: theme.spacing.unit * 8
  }
}));

export const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <FooterMenuItem path="/" icon={IconHome} label="Главная" />
        <FooterMenuItem path="/search" icon={IconSearch} label="Поиск" />
        <FooterMenuItem path="/brands" icon={IconBrand} label="Бренды" />
        <FooterMenuItem
          path="/favorite"
          icon={IconFavorite}
          label="Избранное"
        />
      </Toolbar>
    </AppBar>
  );
};
