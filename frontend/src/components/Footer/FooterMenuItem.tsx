import React from "react";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import { Link, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { IconFooterType } from "../icons/types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textDecoration: "none",
    color: grey[900],
    "& > svg": {
      fontSize: 30
    }
  }
});

interface Props {
  path: string;
  label: string;
  icon: IconFooterType;
}

export const FooterMenuItem: React.FC<Props> = ({
  path,
  label,
  icon: Icon
}) => {
  const classes = useStyles();

  return (
    <Route
      exact
      path={path}
      children={({ match }) => (
        <Link className={classes.root} to={path}>
          <Icon active={!!match} />
          <Typography variant="caption">{label}</Typography>
        </Link>
      )}
    />
  );
};
