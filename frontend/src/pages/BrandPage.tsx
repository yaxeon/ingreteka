import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import { useBrandListQuery, Brand } from "../api";
import { HeaderMenu } from "../components/Header/HeaderMenu";

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

const useStyles = makeStyles(theme => ({
  group: {
    marginTop: theme.spacing.unit * 4
  }
}));

export const BrandPage = () => {
  const { data, loading, error } = useBrandListQuery();
  const classes = useStyles();

  if (loading) {
    return <LinearProgress color="secondary" />;
  }

  if (error || !data) {
    return <Typography color="error">Error</Typography>;
  }

  const brands = sortByTitle(data.brand.list);
  const brandsAZ = groupByRegExp(brands, /^[a-zA-Z]/);
  const brands09 = groupByRegExp(brands, /^[0-9]/);
  const brandsCyrillic = groupByRegExp(brands, /^[а-яА-Я]/);

  return (
    <React.Fragment>
      <HeaderMenu>Бренды</HeaderMenu>
      <Typography gutterBottom variant="h5">
        A-Z
      </Typography>
      {renderList(brandsAZ)}
      <Typography className={classes.group} gutterBottom variant="h5">
        А-Я
      </Typography>
      {renderList(brandsCyrillic)}
      <Typography className={classes.group} gutterBottom variant="h5">
        0-9
      </Typography>
      {renderList(brands09)}
    </React.Fragment>
  );
};
