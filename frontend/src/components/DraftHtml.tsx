import React from "react";
import { stateToHTML } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import Typography from "@material-ui/core/Typography";

interface Props {
  text: string;
}

export const DraftHtml: React.FC<Props> = ({ text }) => {
  const html = stateToHTML(convertFromRaw(JSON.parse(text)));

  return (
    <Typography
      variant="body2"
      component="div"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
