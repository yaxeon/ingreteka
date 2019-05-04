import React from "react";
import { FieldProps, getIn } from "formik";

import { RichText, RichTextProps, ValueType } from "./RichText";

interface RichTextFieldProps extends FieldProps, RichTextProps {}

export const RichTextField = ({
  field: { value, name },
  form: { setFieldValue, errors = {}, touched },
  label,
  ...rest
}: RichTextFieldProps) => {
  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  const handleChange = (value: ValueType) => {
    setFieldValue(name, value);
  };

  return (
    <RichText
      error={showError}
      label={showError ? fieldError : label}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};
