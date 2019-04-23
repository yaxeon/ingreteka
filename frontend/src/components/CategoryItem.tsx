import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";

import { Image } from "./Image";

type ClassKey = "wrapper" | "image" | "label";

interface Props extends WithStyles<ClassKey> {
  image: string;
  title: string;
  slug: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: theme.spacing.unit * 18,
    textDecoration: "none"
  },
  image: {
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 12,
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
  ({ classes, image, title, slug }: Props) => (
    <Link className={classes.wrapper} to={`/category/${slug}`}>
      <Image className={classes.image} src={image} alt={title} />
      <Typography className={classes.label} variant="overline">
        {title}
      </Typography>
    </Link>
  )
);
