import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
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

interface Props {
  image: string;
  title: string;
  slug: string;
}

export const CategoryItem: React.FC<Props> = ({ image, title, slug }) => {
  const classes = useStyles();

  return (
    <Link className={classes.wrapper} to={`/category/${slug}`}>
      <Image className={classes.image} src={image} alt={title} />
      <Typography className={classes.label} variant="overline">
        {title}
      </Typography>
    </Link>
  );
};
