import React from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

import { Image } from "./Image";
import { TitleList, TitleItem } from "./TitleList";

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing.unit * 4
  },
  image: {
    height: theme.spacing.unit * 12,
    width: theme.spacing.unit * 12,
    border: `1px solid ${theme.palette.grey[200]}`,
    padding: theme.spacing.unit / 2,
    flexShrink: 0,
    "& img": {
      width: "100%",
      height: "100%"
    }
  },
  body: {
    textDecoration: "none",
    display: "block",
    marginLeft: theme.spacing.unit * 2
  }
}));

interface Props {
  images: string[];
  title: string;
  id: string;
  slug: string;
  categories: TitleItem[];
  brands: TitleItem[];
  shops: TitleItem[];
}

export const SelectionItem: React.FC<Props> = ({
  images,
  title,
  id,
  slug,
  categories,
  brands,
  shops
}) => {
  const classes = useStyles();
  const [image] = images;

  return (
    <div className={classes.wrapper}>
      <div className={classes.image}>
        <Link to={`/selection/${slug}/${id}`}>
          <Image src={image} alt={title} />
        </Link>
      </div>
      <div className={classes.body}>
        <Link to={`/selection/${slug}/${id}`}>
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </Link>
        <TitleList
          gutterBottom
          variant="body2"
          title="Категории"
          items={categories}
        />
        <TitleList
          gutterBottom
          variant="body2"
          title="Магазины"
          items={shops}
        />
        <TitleList
          gutterBottom
          variant="caption"
          title="Бренды"
          items={brands}
        />
      </div>
    </div>
  );
};
