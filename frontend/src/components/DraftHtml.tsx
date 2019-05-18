import React from "react";
import { stateToHTML, Options } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";

interface Props {
  text: string;
}

const useStyles = makeStyles(() => ({
  root: {
    textAlign: "justify",
    "& a": {
      color: "#857C56",
      wordBreak: "break-all"
    },
    "& ul": {
      paddingLeft: 0,
      listStyleType: "none"
    },
    "& ul li:before": {
      content: '"\\25B8"',
      display: "inline-block",
      width: "10px"
    },
    "& ol": {
      paddingLeft: "20px"
    }
  }
}));

const options: Options = {
  entityStyleFn: entity => {
    const entityType = entity.getType();

    if (entityType === "LINK") {
      const data = entity.getData();

      return {
        element: "a",
        attributes: {
          href: data.url,
          target: "_blank"
        }
      };
    }
  }
};

export const DraftHtml: React.FC<Props> = ({ text }) => {
  const html = stateToHTML(convertFromRaw(JSON.parse(text)), options);
  const classes = useStyles();

  return (
    <Typography
      variant="body2"
      component="div"
      className={classes.root}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};
