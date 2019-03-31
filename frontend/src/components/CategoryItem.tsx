import React from "react";
import Typography from "@material-ui/core/Typography/Typography";
import { withStyles, WithStyles } from "@material-ui/core/styles";

type ClassKey = "wrapper" | "label" | "image";

interface Props extends WithStyles<ClassKey> {
  image: string;
  label: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    height: theme.spacing.unit * 16
  },
  label: {
    fontFamily: "Noto Sans"
  },
  image: {
    height: theme.spacing.unit * 8,
    display: "block"
  }
}));

export const CategoryItem = enhance(({ classes, image, label }: Props) => (
  <div className={classes.wrapper}>
    <img className={classes.image} alt="Ingreteka Guide" src={image} />
    <Typography variant="overline" className={classes.label}>
      {label}
    </Typography>
  </div>
));
