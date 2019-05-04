import React, { useState } from "react";
import uuid from "uuid/v1";
import idx from "idx";
import {
  Button,
  WithStyles,
  CardMedia,
  Card,
  CardActions,
  CardHeader,
  withStyles
} from "@material-ui/core";
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
}

interface UploadImagePropsWithStyles
  extends WithStyles<ClassKey>,
    UploadImageProps {}

const enhance = withStyles<ClassKey>(theme => ({
  root: {
    width: 200
  },
  image: {
    height: 200
  }
}));

export const UploadImage = enhance(
  ({
    classes,
    label,
    error,
    value,
    onChange,
    onClear
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

      if (onClear) {
        onClear();
      }
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
          <input
            accept="image/*"
            id={htmlId}
            type="file"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <label htmlFor={htmlId}>
            <Button color="primary" component="span" size="small">
              Upload
            </Button>
          </label>
          <Button size="small" color="primary" onClick={handleClear}>
            Clear
          </Button>
        </CardActions>
      </Card>
    );
  }
);
