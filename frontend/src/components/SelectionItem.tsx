import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";

interface Props {
  image: string;
  title: string;
  description: string;
  path: string;
}

const useStyles = makeStyles(theme => ({
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

export const SelectionItem: React.FC<Props> = ({
  image,
  title,
  description,
  path
}) => {
  const classes = useStyles();

  return (
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
  );
};
