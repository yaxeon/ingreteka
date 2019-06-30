import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { InstagramIcon } from "../components/InstagramIcon";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import avatar from "../svg/avatar.jpg";

const useStyles = makeStyles<Theme>({
  avatar: {
    width: 128,
    height: 129,
    margin: "0 auto 32px auto"
  },
  button: {
    textAlign: "center",
    padding: "16px 0"
  }
});

export const AboutPage = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Helmet>
        <title>Ингретека Гид - обо мне</title>
      </Helmet>
      <HeaderMenu backUri="/">Обо мне</HeaderMenu>
      <Avatar className={classes.avatar} src={avatar} />
      <Typography align="center" variant="subtitle1">
        Экобьюти блог ♡ экоподборки
      </Typography>
      <Typography align="center">Что скрывают составы?</Typography>
      <Typography align="center">
        Натуральная косметика и экологичная жизнь
      </Typography>
      <div className={classes.button}>
        <Button variant="contained" href="https://www.instagram.com/ingreteka/">
          <InstagramIcon /> Мой блог
        </Button>
      </div>
    </React.Fragment>
  );
};
