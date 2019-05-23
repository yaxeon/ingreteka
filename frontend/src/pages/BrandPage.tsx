import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Theme } from "@material-ui/core/styles";
import idx from "idx";

import { useBrandListQuery, Brand } from "../api";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Loading } from "../components/Loading";
import { Container } from "../components/Layout";

const sortByTitle = (list: Array<Brand>) =>
  list.sort((a, b) => a.title.localeCompare(b.title));

const groupByRegExp = (list: Array<Brand>, group: RegExp) =>
  list.filter(({ title }) => group.test(title));

const renderList = (list: Array<Brand>) =>
  list.map(({ id, title }) => (
    <Typography key={id} variant="body1">
      {title}
    </Typography>
  ));

const useStyles = makeStyles<Theme>(theme => ({
  group: {
    marginTop: theme.spacing(4)
  }
}));

export const BrandPage = () => {
  const { data, loading } = useBrandListQuery();
  const classes = useStyles();

  if (loading) {
    return <Loading />;
  }

  const brands = sortByTitle(idx(data, _ => _.brand.list) || []);
  const brandsAZ = groupByRegExp(brands, /^[a-zA-Z]/);
  const brands09 = groupByRegExp(brands, /^[0-9]/);
  const brandsCyrillic = groupByRegExp(brands, /^[а-яА-Я]/);

  return (
    <React.Fragment>
      <HeaderMenu backUri="/">Бренды</HeaderMenu>
      <Container>
        <Typography gutterBottom variant="h4">
          A-Z
        </Typography>
        {renderList(brandsAZ)}
        <Typography className={classes.group} gutterBottom variant="h4">
          А-Я
        </Typography>
        {renderList(brandsCyrillic)}
        <Typography className={classes.group} gutterBottom variant="h4">
          0-9
        </Typography>
        {renderList(brands09)}
      </Container>
    </React.Fragment>
  );
};
