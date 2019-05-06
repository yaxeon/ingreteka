import React from "react";
import Typography from "@material-ui/core/Typography";

import { Header, HeaderProps } from "./Header";

export const HeaderMenu: React.FC<HeaderProps> = ({ children, backUri }) => {
  return (
    <Header backUri={backUri}>
      <Typography variant="h6">{children}</Typography>
    </Header>
  );
};
