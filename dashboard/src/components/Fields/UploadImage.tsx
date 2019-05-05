import React, { useState } from "react";
import uuid from "uuid/v1";
import idx from "idx";
import {
  IconButton,
  WithStyles,
  CardMedia,
  Card,
  CardActions,
  CardHeader,
  withStyles
} from "@material-ui/core";
import AttachFile from "@material-ui/icons/AttachFile";
import Delete from "@material-ui/icons/Delete";

import { useFileUploadMutation } from "../../api";
import { makeUrl } from "../Image";

export type ValueType = string;

type ClassKey = "root" | "image";

export interface UploadImageProps {
  label?: string;
  error?: boolean;
  value?: ValueType;
  onChange: (image: ValueType) => void;
  onClear?: () => void;
  sortNode?: React.ReactNode;
}

interface UploadImagePropsWithStyles
  extends WithStyles<ClassKey>,
    UploadImageProps {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    width: 220
  },
  image: {
    height: 220
  }
}));

export const UploadImage = enhance(
  ({
    classes,
    label,
    error,
    value,
    onChange,
    sortNode = null,
    onClear = () => {}
  }: UploadImagePropsWithStyles) => {
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
        const uri = idx(data, _ => _.file.upload.uri);

        if (!uri) {
          return;
        }

        onChange(uri);
      });
    };

    const handleClear = () => {
      onChange("");

      onClear();
    };

    return (
      <Card className={classes.root}>
        {value ? (
          <a href={makeUrl(value)} rel="noopener noreferrer" target="_blank">
            <CardMedia className={classes.image} image={makeUrl(value)} />
          </a>
        ) : (
          <CardHeader
            title={label}
            titleTypographyProps={{
              variant: "caption",
              color: error ? "error" : "textSecondary"
            }}
          />
        )}
        <CardActions>
          {sortNode}
          <input
            accept="image/*"
            id={htmlId}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <label htmlFor={htmlId}>
            <IconButton color="primary" component="span">
              <AttachFile fontSize="small" />
            </IconButton>
          </label>
          <IconButton onClick={handleClear}>
            <Delete fontSize="small" />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
);
