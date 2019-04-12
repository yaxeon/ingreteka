import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

type ClassKey = "wrapper" | "label" | "image";

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
    height: theme.spacing.unit * 16,
    textDecoration: "none"
  },
  label: {
    fontFamily: "Noto Sans"
  },
  image: {
    height: theme.spacing.unit * 8,
    display: "block"
  }
}));

export const CategoryItem = enhance(
  ({ classes, image, label, path }: Props) => (
    <Link className={classes.wrapper} to={path}>
      <img className={classes.image} alt={label} src={image} />
      <Typography variant="overline" className={classes.label}>
        {label}
      </Typography>
    </Link>
  )
);
