import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles, Theme } from "@material-ui/core/styles";
import idx from "idx";
import { Helmet } from "react-helmet";

import { HeaderLogo } from "../components/Header/HeaderLogo";
import { CategoryItem } from "../components/CategoryItem";
import { Loading } from "../components/Loading";
import { News } from "../components/News";
import { useCategoryListQuery } from "../api";
import { Container } from "../components/Layout";

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    marginLeft: -theme.spacing(1),
    marginRight: -theme.spacing(1),
    display: "flex",
    alignItems: "center"
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
      <Helmet>
        <title>Ингретека Гид: ваш путеводитель по натуральной косметике</title>
      </Helmet>
      <HeaderLogo />
      <section className={classes.root}>
        <Container>
          <Grid container spacing={2}>
            {categories.map(({ id, title, image, slug }) => (
              <Grid item xs={4} key={id}>
                <CategoryItem title={title} image={image} slug={slug} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>
      <News />
    </React.Fragment>
  );
};
