import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import { Menu } from "./Menu";

export const Header = () => {
  const [open, setVisible] = useState(false);

  return (
    <React.Fragment>
      <AppBar position="absolute">
        <Toolbar>
          <IconButton onClick={() => setVisible(true)} color="inherit">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Ingreteka Guide Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu open={open} onClose={() => setVisible(false)} />
    </React.Fragment>
  );
};
