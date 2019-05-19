import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import idx from "idx";

import { useShopListQuery } from "../api";
import { Image } from "./Image";
import { LoadingContent } from "./Loading";

const useStyles = makeStyles(theme => ({
  shop: {
    marginBottom: theme.spacing.unit * 2
  },
  image: {
    width: "100%"
  }
}));

export const ShopCategory = () => {
  const { data, loading } = useShopListQuery();
  const classes = useStyles();
  const shops = idx(data, _ => _.shop.list) || [];

  if (loading) {
    return <LoadingContent />;
  }

  return (
    <React.Fragment>
      {shops.map(({ id, title, image }) => (
        <Grid item xs={6} key={id} className={classes.shop}>
          <Image className={classes.image} alt={title} src={image} />
          <Typography align="center" variant="h5">
            {title}
          </Typography>
        </Grid>
      ))}
    </React.Fragment>
  );
};
