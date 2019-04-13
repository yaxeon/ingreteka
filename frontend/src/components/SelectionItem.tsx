import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";

type ClassKey = "image" | "wrapper" | "title";

interface Props extends WithStyles<ClassKey> {
  image: string;
  title: string;
  description: string;
  path: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  image: {
    height: theme.spacing.unit * 12,
    backgroundSize: "contain",
    backgroundPosition: "50% 0%"
  },
  wrapper: {
    marginBottom: theme.spacing.unit * 4
  },
  title: {
    textDecoration: "none",
    display: "block",
    marginBottom: theme.spacing.unit
  }
}));

export const SelectionItem = enhance(
  ({ classes, image, title, description, path }: Props) => (
    <Grid container spacing={24} className={classes.wrapper}>
      <Grid item xs={4}>
        <CardMedia className={classes.image} image={image} title={title} />
      </Grid>
      <Grid item xs={8}>
        <Link to={path} className={classes.title}>
          <Typography variant="h3">{title}</Typography>
        </Link>
        <Typography variant="body2">{description}</Typography>
      </Grid>
    </Grid>
  )
);
