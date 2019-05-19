import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

import { makeUrl } from "./Image";
import { TitleList, TitleItem, titleMap } from "./TitleList";

const useStyles = makeStyles(theme => ({
  cardHeader: {
    paddingBottom: 0,
    paddingTop: 0
  },
  cardContent: {
    minWidth: 0
  },
  cardActions: {
    justifyContent: "space-between"
  },
  media: {
    height: theme.spacing.unit * 16,
    backgroundSize: "contain"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  favoriteIcon: {
    color: theme.palette.text.primary
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
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [image] = images;

  const handleExpand = () => {
    setExpanded(!expanded);
  };
  const handleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card>
      <Link to={`/selection/${slug}/${id}`}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={makeUrl(image)}
            title={title}
          />
          <CardHeader
            title={title}
            titleTypographyProps={{ variant: "h2" }}
            subheaderTypographyProps={{ noWrap: true, variant: "caption" }}
            subheader={titleMap(categories)}
            classes={{ content: classes.cardContent, root: classes.cardHeader }}
          />
        </CardActionArea>
      </Link>
      <CardActions className={classes.cardActions}>
        <IconButton onClick={handleFavorite}>
          {favorite ? (
            <FavoriteIcon color="error" />
          ) : (
            <FavoriteBorderIcon className={classes.favoriteIcon} />
          )}
        </IconButton>
        <IconButton
          className={classnames(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpand}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <TitleList
            gutterBottom
            variant="body2"
            title="Магазины"
            items={shops}
          />
          <TitleList variant="body2" title="Бренды" items={brands} />
        </CardContent>
      </Collapse>
    </Card>
  );
};
