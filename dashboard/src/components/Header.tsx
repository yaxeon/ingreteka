import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  WithStyles,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Menu } from "./Menu";
import { AuthContext } from "../contexts/AuthContext";

type ClassKey = "title";

interface Props extends WithStyles<ClassKey> {}

const enhance = withStyles<ClassKey>({
  title: {
    flexGrow: 1
  }
});

export const Header = enhance(({ classes }: Props) => {
  const [open, setVisible] = useState(false);
  const { onLogout } = useContext(AuthContext);

  return (
    <React.Fragment>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton onClick={() => setVisible(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography
            className={classes.title}
            variant="h6"
            color="inherit"
            noWrap
          >
            Ingreteka Guide Dashboard
          </Typography>
          <Button onClick={onLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Menu open={open} onClose={() => setVisible(false)} />
    </React.Fragment>
  );
});
