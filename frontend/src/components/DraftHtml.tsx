import React from "react";
import { stateToHTML, Options } from "draft-js-export-html";
import { convertFromRaw } from "draft-js";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import bullet from "../svg/bullet.svg";

interface Props {
  text: string;
}

const useStyles = makeStyles({
  root: {
    textAlign: "justify",
    "& a": {
      color: "#857C56",
      wordBreak: "break-all"
    },
    "& a:visited": {
      color: "#551A8B"
    },
    "& ul": {
      paddingLeft: 0,
      listStyleType: "none"
    },
    "& ul li:before": {
      content: '""',
      display: "inline-block",
      width: "1em",
      height: "1em",
      backgroundImage: `url("${bullet}")`,
      marginRight: "4px",
      backgroundSize: "cover"
    },
    "& ol": {
      paddingLeft: "20px"
    },
    "& .code": {
      color: "#AAAAAA",
      fontStyle: "italic"
    },
    "& strong": {
      fontWeight: 600
    }
  }
});

const options: Options = {
  inlineStyles: {
    CODE: {
      element: "span",
      attributes: {
        class: "code"
      }
    }
  },
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
