import React, { useState, useEffect } from "react";
import { FieldProps, getIn } from "formik";
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

interface RichTextFieldProps extends WithStyles<ClassKey>, FieldProps {
  label?: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  }
}));

export const RichTextField = enhance(
  ({
    field: { value, name },
    form: { setFieldValue, errors = {}, touched },
    classes,
    label
  }: RichTextFieldProps) => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
      let contentState;

      try {
        contentState = convertFromRaw(JSON.parse(value));
      } catch {
        contentState = ContentState.createFromText("");
      }

      setEditorState(EditorState.createWithContent(contentState));
    }, []);

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    const onChange = (editorState: Draft.EditorState) => {
      const contentState = JSON.stringify(
        convertToRaw(editorState.getCurrentContent())
      );

      setEditorState(editorState);
      setFieldValue(name, contentState);
    };

    return (
      <div className={classes.root}>
        {showError && (
          <Typography gutterBottom variant="caption" color={"error"}>
            {fieldError}
          </Typography>
        )}
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
          onEditorStateChange={onChange}
        />
      </div>
    );
  }
);
