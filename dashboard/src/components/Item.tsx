import React from "react";
import { CardMedia, Card, CardActionArea, CardHeader } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import { makeUrl } from "./Image";

const useStyles = makeStyles({
  image: {
    backgroundSize: "contain",
    height: 80
  }
});

interface Props {
  image?: string;
  title: string;
  subTitle?: string;
  onClick?: () => void;
}

export const Item: React.FC<Props> = ({ image, title, subTitle, onClick }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea onClick={onClick}>
        <CardHeader
          titleTypographyProps={{ variant: "button", noWrap: true }}
          subheaderTypographyProps={{ variant: "caption", noWrap: true }}
          title={title}
          subheader={subTitle}
        />
        {image && (
          <CardMedia className={classes.image} image={makeUrl(image)} />
        )}
      </CardActionArea>
    </Card>
  );
};
