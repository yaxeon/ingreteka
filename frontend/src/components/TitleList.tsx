import React from "react";
import Typography, { TypographyProps } from "@material-ui/core/Typography";

export type TitleItem = {
  title: string;
};

interface Props extends TypographyProps {
  title: string;
  items: TitleItem[];
}

const titleMap = (items: TitleItem[]) =>
  items.map(({ title }) => title).join(", ");

export const TitleList: React.FC<Props> = ({ title, items, ...rest }) => {
  return (
    <Typography {...rest}>
      {title}: {titleMap(items)}
    </Typography>
  );
};
