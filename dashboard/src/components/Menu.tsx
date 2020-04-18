import React from "react";
import { Link } from "react-router-dom";
import {
  withStyles,
  WithStyles,
  Drawer,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

type ClassKey = "paper";

interface Props extends WithStyles<ClassKey> {
  open: boolean;
  onClose: () => void;
}

const enhance = withStyles<ClassKey>(() => ({
  paper: {
    width: 240,
    "&  a": {
      textDecoration: "none"
    }
  }
}));

interface MenuItemProps {
  to: string;
  title: string;
}

const MenuItem = ({ to, title }: MenuItemProps) => (
  <Link to={to}>
    <ListItem button>
      <ListItemText primary={title} />
    </ListItem>
  </Link>
);

export const Menu = enhance(({ classes, open, onClose }: Props) => (
  <Drawer
    open={open}
    classes={{
      paper: classes.paper
    }}
    onClose={onClose}
    anchor="left"
  >
    <List component="nav" onClick={onClose}>
      <MenuItem to="/" title="Selection" />
      <MenuItem to="/brand" title="Brand" />
      <MenuItem to="/shop" title="Shop" />
      <MenuItem to="/category" title="Category" />
      <MenuItem to="/pdf" title="PDF" />
    </List>
  </Drawer>
));
