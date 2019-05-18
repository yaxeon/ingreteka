import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import SwipeableViews from "react-swipeable-views";

import { Image } from "./Image";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
    borderBottom: "1px solid #ededed"
  },
  dots: {
    display: "flex",
    height: theme.spacing.unit * 4,
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      height: theme.spacing.unit,
      width: theme.spacing.unit,
      borderRadius: theme.spacing.unit,
      margin: "0 4px",
      transition: "border-width 0.1s ease-in-out"
    }
  },
  dot: {
    border: "1px solid #000"
  },
  dotActive: {
    border: "4px solid #000"
  },
  slide: {
    maxHeight: theme.spacing.unit * 60,
    textAlign: "center",
    "& > img": {
      maxHeight: theme.spacing.unit * 60,
      maxWidth: "100%"
    }
  }
}));

interface Props {
  images: string[];
}

export const Carousel: React.FC<Props> = ({ images }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  const handleChangeIndex = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className={classes.root}>
      <SwipeableViews enableMouseEvents onChangeIndex={handleChangeIndex}>
        {images.map(src => (
          <div key={src} className={classes.slide}>
            <Image alt="Image" src={src} />
          </div>
        ))}
      </SwipeableViews>
      <div className={classes.dots}>
        {images.map((src, index) => (
          <div
            className={index === current ? classes.dotActive : classes.dot}
            key={src}
          />
        ))}
      </div>
    </div>
  );
};
