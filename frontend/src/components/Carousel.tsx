import React, { useState } from "react";
import { Theme, makeStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
// @ts-ignore
import QuickPinchZoom, { make3dTransformValue } from "react-quick-pinch-zoom";

import { Image } from "./Image";

const useStyles = makeStyles<Theme>(theme => ({
  root: {
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
  container: {
    touchAction: "auto"
  },
  slide: {
    "& > img": {
      maxWidth: "100%",
      display: "block",
      height: "auto"
    }
  }
}));

interface Props {
  images: string[];
}

export const Carousel: React.FC<Props> = ({ images }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [transform, setTransform] = useState("");

  const handleChangeIndex = (index: number) => {
    setCurrent(index);
    setTransform(make3dTransformValue({ x: 0, y: 0, scale: 1 }));
  };

  const onUpdate = ({ x, y, scale }: any) => {
    setTransform(make3dTransformValue({ x, y, scale }));
  };

  return (
    <div className={classes.root}>
      <SwipeableViews enableMouseEvents onChangeIndex={handleChangeIndex}>
        {images.map(src => (
          <div key={src}>
            <QuickPinchZoom
              onUpdate={onUpdate}
              draggableUnZoomed={false}
              containerProps={{ className: classes.container }}
            >
              <div className={classes.slide} style={{ transform }}>
                <Image alt="Image" src={src} />
              </div>
            </QuickPinchZoom>
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
