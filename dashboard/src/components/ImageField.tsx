import React, { useState } from "react";
import { FieldProps, getIn } from "formik";
import uuid from "uuid/v1";
import { Typography, Button, WithStyles, withStyles } from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useFileUploadMutation } from "../api";

type ClassKey = "root" | "field" | "actions" | "image" | "icon";

interface ImageFieldProps extends WithStyles<ClassKey>, FieldProps {
  label?: string;
}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit * 2
  },
  field: {
    display: "flex",
    height: theme.spacing.unit * 12
  },
  actions: {
    flexGrow: 1
  },
  icon: {
    marginRight: theme.spacing.unit
  },
  image: {
    width: theme.spacing.unit * 12,
    height: theme.spacing.unit * 12,
    backgroundSize: "contain"
  }
}));

export const ImageField = enhance(
  ({
    field: { value, name },
    form: { setFieldValue, errors = {}, touched },
    classes,
    label
  }: ImageFieldProps) => {
    const handleUpload = useFileUploadMutation();
    const [htmlId] = useState(uuid());

    const handleChange = ({
      target: { validity, files }
    }: React.ChangeEvent<HTMLInputElement>) => {
      const file = files && files.length ? files[0] : null;

      if (!file || !validity.valid) {
        return;
      }

      handleUpload({
        variables: { file }
      }).then(({ data }) => {
        const uri = getIn(data, ["file", "upload", "uri"]);

        if (uri) {
          setFieldValue(name, uri);
        }
      });
    };

    const fieldError = getIn(errors, name);
    const showError = getIn(touched, name) && !!fieldError;

    return (
      <div className={classes.root}>
        <Typography
          gutterBottom
          variant="caption"
          color={showError ? "error" : "textSecondary"}
        >
          {showError ? fieldError : label}
        </Typography>
        <div className={classes.field}>
          <div className={classes.actions}>
            <input
              accept="image/*"
              id={htmlId}
              type="file"
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <label htmlFor={htmlId}>
              <Button variant="contained" component="span" size="small">
                <CloudUploadIcon className={classes.icon} /> Upload
              </Button>
            </label>
          </div>
          {value && (
            <a
              href={`/object/${value}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <div
                style={{ backgroundImage: `url(${`/object/${value}`})` }}
                className={classes.image}
              />
            </a>
          )}
        </div>
      </div>
    );
  }
);
