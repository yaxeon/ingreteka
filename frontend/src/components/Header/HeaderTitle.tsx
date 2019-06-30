import React from "react";
import classnames from "classnames";
import { makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles<Theme>({
  selected: {
    fontWeight: 600,
    fontSize: "0.8rem",
    paddingLeft: 2,
    paddingRight: 2,
    borderBottom: "2px solid #000"
  },
  default: {
    fontWeight: 500,
    fontSize: "0.8rem"
  }
});

export interface HeaderTitleProps {
  selected: boolean;
  className?: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  selected,
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <span
      {...rest}
      className={classnames(
        className,
        selected ? classes.selected : classes.default
      )}
    >
      {children}
    </span>
  );
};
