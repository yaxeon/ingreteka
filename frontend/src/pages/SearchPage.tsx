import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import qs from "qs";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Search from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Container } from "../components/Layout";
import { SelectionSearch } from "../components/SelectionSearch";
import searchImage from "../svg/search.svg";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    alignItems: "flex-end"
  },
  rootInput: {
    flexGrow: 1
  }
});

export const SearchPage: React.FC<RouteComponentProps> = ({
  location: { search },
  history
}) => {
  const classes = useStyles();
  const { query = "" } = qs.parse(search, {
    ignoreQueryPrefix: true
  });
  const [value, setValue] = useState(query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    history.replace({
      search: "?" + qs.stringify({ query: value })
    });
  };

  return (
    <React.Fragment>
      <HeaderMenu backUri="/">Поиск</HeaderMenu>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <form onSubmit={handleSubmit}>
              <div className={classes.wrapper}>
                <TextField
                  className={classes.rootInput}
                  variant="standard"
                  label="Что будем искать?"
                  value={value}
                  onChange={handleChange}
                  InputProps={{
                    autoFocus: true,
                    endAdornment: (
                      <IconButton color="inherit" type="submit">
                        <Search />
                      </IconButton>
                    )
                  }}
                />
              </div>
            </form>
          </Grid>
          {query ? (
            <SelectionSearch query={query} />
          ) : (
            <Grid item xs={12}>
              <img alt="search" src={searchImage} />
            </Grid>
          )}
        </Grid>
      </Container>
    </React.Fragment>
  );
};
