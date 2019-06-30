import React from "react";
import { makeStyles, Theme } from "@material-ui/core";

import { Header, HeaderProps } from "./Header";
import { HeaderTitle } from "./HeaderTitle";

const useStyles = makeStyles<Theme>({
  content: {
    flexGrow: 1
  }
});

export const HeaderMenu: React.FC<HeaderProps> = ({ children, backUri }) => {
  const classes = useStyles();

  return (
    <Header backUri={backUri}>
      <div className={classes.content}>
        <HeaderTitle selected>{children}</HeaderTitle>
      </div>
    </Header>
  );
};
