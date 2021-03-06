import React from "react";
import idx from "idx";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";

import { useShopListQuery } from "../api";
import { Image } from "./Image";
import { LoadingContent } from "./Loading";

const useStyles = makeStyles<Theme>(theme => ({
  shop: {
    marginBottom: theme.spacing(2)
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
          <Link to={`/search/?query="${encodeURI(title)}"`} key={id}>
            <Image className={classes.image} alt={title} src={image} />
            <Typography color="textPrimary" align="center" variant="body2">
              {title}
            </Typography>
          </Link>
        </Grid>
      ))}
    </React.Fragment>
  );
};
