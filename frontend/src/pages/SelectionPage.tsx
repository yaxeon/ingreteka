import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { RouteComponentProps } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import debounce from "lodash/debounce";

import idx from "idx";

import { useSelectionItemQuery } from "../api";
import { HeaderMenu } from "../components/Header/HeaderMenu";
import { Loading } from "../components/Loading";
import { TitleList } from "../components/TitleList";
import { DraftHtml } from "../components/DraftHtml";
import { Carousel } from "../components/Carousel";
import { Container } from "../components/Layout";
import { Favorite } from "../components/Favorite";
import { InstagramIcon } from "../components/InstagramIcon";
import donate from "../svg/donate.png";

const useStyles = makeStyles({
  action: {
    display: "flex",
    justifyContent: "flex-end"
  },
  donate: {
    position: "fixed",
    transition: "all 0.3s",
    bottom: "64px",
    right: "32px",
    "z-index": "2000",
    "& img": {
      width: "120px"
    }
  },
  donateShow: {
    opacity: 1,
    transform: "rotate(0deg) scale(1)"
  },
  donateHide: {
    pointerEvents: "none",
    opacity: 0,
    transform: "rotate(360deg) scale(0.5)"
  }
});

type PageParams = { slug: string; id: string };

export const SelectionPage: React.FC<RouteComponentProps<PageParams>> = ({
  match: {
    params: { slug, id }
  }
}) => {
  const classes = useStyles();
  const { data, loading } = useSelectionItemQuery({ variables: { id } });
  const selection = idx(data, _ => _.selection.item);
  const [isDonate, setDonate] = useState(false);

  const handleScroll = () => {
    const offset = document.documentElement.scrollTop + window.innerHeight;
    const height = document.documentElement.offsetHeight;
    setDonate(offset + 30 > height);
  };

  useEffect(() => {
    const handle = debounce(handleScroll, 60);
    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
      handle.cancel();
    };
  }, []);

  if (loading || !selection) {
    return <Loading />;
  }

  const {
    title,
    text,
    categories,
    shops,
    brands,
    images,
    relevanceDate
  } = selection;
  const categoryBySlug = categories.find(category => category.slug === slug);
  const gallery = images.slice(1);

  const relevance = relevanceDate
    ? new Date(relevanceDate).toLocaleDateString(undefined, {
        year: "numeric",
        month: "long"
      })
    : null;

  const donateClass = `${classes.donate} ${
    isDonate ? classes.donateShow : classes.donateHide
  }`;

  return (
    <React.Fragment>
      <Helmet>
        <title>Ингретека Гид - {title}</title>
      </Helmet>
      <HeaderMenu backUri={`/category/${slug}/`}>
        {categoryBySlug ? categoryBySlug.title : slug}
      </HeaderMenu>
      <div className={donateClass}>
        <a href="https://money.yandex.ru/to/410015427968355?_openstat=iget%3Bbill%3Bicon">
          <img alt="Поддержать!" src={donate} />
        </a>
      </div>
      <Container>
        <Carousel images={gallery} />
        <div className={classes.action}>
          <IconButton
            href="https://www.instagram.com/ingreteka/"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <Favorite id={id} />
        </div>
        <Typography variant="h1" gutterBottom>
          {title}
        </Typography>
        <TitleList variant="body2" title="Бренды" items={brands} />
        <TitleList variant="body2" title="Категории" items={categories} />
        <TitleList variant="body2" title="Магазины" items={shops} />
        <DraftHtml text={text} />
        {relevance && <Typography variant="body2">{relevance}</Typography>}
      </Container>
    </React.Fragment>
  );
};
