import React, { useState, useEffect } from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ArrowBackIos from "@material-ui/icons/ArrowBackIosOutlined";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import ru from "javascript-time-ago/locale/ru";
import idx from "idx";

import { useSelectionNewsQuery } from "../api";
import { makeUrl } from "./Image";
import rocket from "../svg/rocket.svg";

TimeAgo.addLocale(ru);
const timeAgo = new TimeAgo("ru-RU");

const useStyles = makeStyles<Theme>(theme => ({
  menu: {
    width: "100%",
    maxWidth: 360
  },
  rocket: {
    marginTop: theme.spacing(2),
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& > img": {
      width: theme.spacing(4),
      height: theme.spacing(4)
    }
  },
  avatarItem: {
    minWidth: theme.spacing(10)
  },
  avatar: {
    width: theme.spacing(8)
  }
}));

export const News = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(true);
  const { data, loading } = useSelectionNewsQuery({ variables: { limit: 7 } });
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAnimate(false);
    }, 5000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if (loading) {
    return null;
  }

  const selections = idx(data, _ => _.selection.news) || [];

  const firstUpdate = selections[0]
    ? timeAgo.format(new Date(selections[0].relevanceDate))
    : null;

  return (
    <React.Fragment>
      <div className={classes.rocket} onClick={handleOpen}>
        <img
          src={rocket}
          alt="Обновления"
          className={animate ? "vibrate-3" : ""}
        />
        <Typography variant="subtitle2">Обновления</Typography>
        <Typography color="textSecondary" variant="caption">
          {firstUpdate}
        </Typography>
      </div>
      <Drawer open={open} onClose={handleClose}>
        <List className={classes.menu}>
          <ListItem button onClick={handleClose}>
            <ListItemIcon>
              <ArrowBackIos />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ variant: "h2" }}
              primary="Обновления"
              secondary="@ingreteka"
            />
          </ListItem>

          {selections.map(
            ({ id, title, updateTitle, relevanceDate, images, categories }) => {
              return (
                <React.Fragment key={id}>
                  <Divider component="li" />
                  <ListItem
                    button
                    onClick={() =>
                      history.push(`/selection/${categories[0].slug}/${id}/`)
                    }
                  >
                    <ListItemAvatar className={classes.avatarItem}>
                      <Avatar
                        className={classes.avatar}
                        variant="square"
                        alt={title}
                        src={makeUrl(images[0])}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primaryTypographyProps={{ variant: "body2" }}
                      primary={updateTitle || title}
                      secondaryTypographyProps={{ variant: "caption" }}
                      secondary={
                        <React.Fragment>
                          <div>{timeAgo.format(new Date(relevanceDate))}</div>
                          <div>
                            {categories.map(({ title }) => title).join(", ")}
                          </div>
                        </React.Fragment>
                      }
                    />
                    <ChevronRight />
                  </ListItem>
                </React.Fragment>
              );
            }
          )}
        </List>
      </Drawer>
    </React.Fragment>
  );
};
