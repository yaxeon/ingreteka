import React, { useState, useEffect } from "react";
import { Typography, WithStyles, withStyles } from "@material-ui/core";
import { Editor } from "react-draft-wysiwyg";
import {
  convertToRaw,
  convertFromRaw,
  EditorState,
  ContentState
} from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

type ClassKey = "root" | "editor";

export type ValueType = string;

export interface RichTextProps {
  label?: string;
  value: ValueType;
  error: boolean;
  onChange: (value: ValueType) => void;
}

interface RichTextPropsWithStyles extends WithStyles<ClassKey>, RichTextProps {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  },
  editor: {}
}));

export const RichText = enhance(
  ({ classes, label, value, error, onChange }: RichTextPropsWithStyles) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
      let contentState;

      try {
        contentState = convertFromRaw(JSON.parse(value));
      } catch {
        contentState = ContentState.createFromText("");
      }

      setEditorState(EditorState.createWithContent(contentState));
      // eslint-disable-next-line
    }, []);

    const handleChange = (editorState: Draft.EditorState) => {
      const contentState = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      setEditorState(editorState);
      onChange(contentState);
    };

    return (
      <div className={classes.root}>
        <Typography
          gutterBottom
          variant="caption"
          color={error ? "error" : "textSecondary"}
        >
          {label}
        </Typography>
        <Editor
          editorState={editorState}
          editorClassName={classes.editor}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "list",
              "colorPicker",
              "link",
              "remove"
            ],
            inline: {
              inDropdown: true,
              options: ["bold", "italic", "underline", "strikethrough"]
            },
            list: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            colorPicker: {
              colors: [
                "#906A92",
                "#FF0000",
                "rgb(97,189,109)",
                "rgb(26,188,156)",
                "rgb(84,172,210)",
                "rgb(44,130,201)",
                "rgb(147,101,184)",
                "rgb(71,85,119)",
                "rgb(204,204,204)",
                "rgb(65,168,95)",
                "rgb(0,168,133)",
                "rgb(61,142,185)",
                "rgb(41,105,176)",
                "rgb(85,57,130)",
                "rgb(40,50,78)",
                "rgb(0,0,0)",
                "rgb(247,218,100)",
                "rgb(251,160,38)",
                "rgb(235,107,86)",
                "rgb(226,80,65)",
                "rgb(163,143,132)",
                "rgb(239,239,239)",
                "rgb(255,255,255)",
                "rgb(250,197,28)",
                "rgb(243,121,52)",
                "rgb(209,72,65)",
                "rgb(184,49,47)",
                "rgb(124,112,107)",
                "rgb(209,213,216)"
              ],
              title: undefined
            }
          }}
          placeholder={label}
          onEditorStateChange={handleChange}
        />
      </div>
    );
  }
);
