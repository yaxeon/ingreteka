import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { Image } from "./Image";

const useStyles = makeStyles<Theme>(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: theme.spacing(18),
    textDecoration: "none"
  },
  image: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    display: "block"
  },
  label: {
    textAlign: "center",
    lineHeight: 1.2,
    marginTop: theme.spacing(1),
    height: theme.spacing(4),
    color: theme.palette.text.primary
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
