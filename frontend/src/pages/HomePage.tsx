import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import idx from "idx";

import { HeaderLogo } from "../components/Header/HeaderLogo";
import { CategoryItem } from "../components/CategoryItem";
import { Loading } from "../components/Loading";
import { useCategoryListQuery } from "../api";
import { Container } from "../components/Layout";

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: -theme.spacing.unit,
    marginRight: -theme.spacing.unit
  }
}));

export const HomePage = () => {
  const { data, loading } = useCategoryListQuery();
  const classes = useStyles();

  if (loading) {
    return <Loading />;
  }

  const categories = idx(data, _ => _.category.list) || [];

  return (
    <React.Fragment>
      <HeaderLogo />
      <section className={classes.root}>
        <Container>
          <Grid container spacing={16}>
            {categories.map(({ id, title, image, slug }) => (
              <Grid item xs={4} key={id}>
                <CategoryItem title={title} image={image} slug={slug} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
};
