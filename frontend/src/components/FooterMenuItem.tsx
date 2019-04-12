import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles, colors } from "@material-ui/core";
import { Link } from "react-router-dom";

type ClassKey = "root" | "label";

interface Props extends WithStyles<ClassKey> {
  path: string;
  label: string;
  children: React.ReactNode;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    height: theme.spacing.unit * 7,
    color: colors.grey[900]
  },
  label: {
    fontFamily: "Noto Sans"
  }
}));

export const FooterMenuItem = enhance(
  ({ classes, path, label, children }: Props) => (
    <Link className={classes.root} to={path}>
      {children}
      <Typography variant="caption" className={classes.label}>
        {label}
      </Typography>
    </Link>
  )
);
