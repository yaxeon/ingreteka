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

type ClassKey = "root";

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
  }
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
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          toolbar={{
            options: [
              "inline",
              "blockType",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "remove"
            ],
            inline: {
              inDropdown: true,
              options: ["bold", "italic", "underline", "strikethrough"]
            },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true }
          }}
          placeholder={label}
          onEditorStateChange={handleChange}
        />
      </div>
    );
  }
);
