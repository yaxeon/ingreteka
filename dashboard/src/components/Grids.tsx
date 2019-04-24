import React from "react";
import Grid, { GridProps } from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export const GridList = (props: GridProps) => (
  <Grid container spacing={32} {...props} />
);

export const GridItem = (props: GridProps) => (
  <Grid item xs={12} sm={6} md={4} lg={3} {...props} />
);

export const GridItemCenter = (props: GridProps) => {
  const classes = useStyles();

  return <GridItem className={classes.center} {...props} />;
};
