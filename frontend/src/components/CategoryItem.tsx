import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

type ClassKey = "wrapper" | "image" | "label";

interface Props extends WithStyles<ClassKey> {
  image: string;
  label: string;
  path: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: theme.spacing.unit * 14,
    textDecoration: "none"
  },
  image: {
    height: theme.spacing.unit * 8,
    display: "block"
  },
  label: {
    textAlign: "center",
    lineHeight: 1.2,
    marginTop: theme.spacing.unit,
    height: theme.spacing.unit * 4
  }
}));

export const CategoryItem = enhance(
  ({ classes, image, label, path }: Props) => (
    <Link className={classes.wrapper} to={path}>
      <img className={classes.image} alt={label} src={image} />
      <Typography className={classes.label} variant="overline">
        {label}
      </Typography>
    </Link>
  )
);
