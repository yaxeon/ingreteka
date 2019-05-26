import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

import { makeUrl } from "./Image";
import { TitleList, TitleItem, titleMap } from "./TitleList";
import { Favorite } from "./Favorite";

const useStyles = makeStyles<Theme>(theme => ({
  cardHeader: {
    paddingBottom: 0,
    paddingTop: 0,
    color: theme.palette.text.primary
  },
  cardContent: {
    minWidth: 0
  },
  cardActions: {
    justifyContent: "space-between"
  },
  media: {
    height: theme.spacing(16),
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
  const [image] = images;

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <Link to={`/selection/${slug}/${id}/`}>
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
        <Favorite id={id} />
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
