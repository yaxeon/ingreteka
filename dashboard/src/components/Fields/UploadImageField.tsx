import React from "react";
import { FieldProps, getIn } from "formik";

import { UploadImage, ValueType, UploadImageProps } from "./UploadImage";

interface UploadImageFieldProps extends FieldProps, UploadImageProps {}

export const UploadImageField = ({
  field: { value, name },
  form: { setFieldValue, errors = {}, touched },
  label,
  ...rest
}: UploadImageFieldProps) => {
  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  const handleChange = (value: ValueType) => {
    setFieldValue(name, value);
  };

  return (
    <UploadImage
      error={showError}
      label={showError ? fieldError : label}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};
