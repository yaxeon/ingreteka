import React, { useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";

import { Image } from "./Image";

const useStyles = makeStyles<Theme>(theme => ({
  root: {
    marginBottom: theme.spacing(2),
    paddingBottom: theme.spacing(1),
    borderBottom: "1px solid #ededed"
  },
  dots: {
    display: "flex",
    height: theme.spacing(4),
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      height: theme.spacing(1),
      width: theme.spacing(1),
      borderRadius: theme.spacing(1),
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
    maxHeight: theme.spacing(60),
    textAlign: "center",
    "& > img": {
      maxHeight: theme.spacing(60),
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
      {images.length > 1 && (
        <div className={classes.dots}>
          {images.map((src, index) => (
            <div
              className={index === current ? classes.dotActive : classes.dot}
              key={src}
            />
          ))}
        </div>
      )}
    </div>
  );
};
