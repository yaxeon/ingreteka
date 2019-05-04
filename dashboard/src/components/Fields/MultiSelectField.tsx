import React from "react";
import { FieldProps, getIn } from "formik";

import { MultiSelect, MultuSelectProps, ValueType } from "./MultiSelect";

interface MultiSelectFieldProps extends FieldProps, MultuSelectProps {}

export const MultiSelectField = ({
  field: { value, name },
  form: { setFieldValue, errors = {}, touched },
  helperText,
  ...rest
}: MultiSelectFieldProps) => {
  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  const handleChange = (value: ValueType) => {
    setFieldValue(name, value);
  };

  return (
    <MultiSelect
      error={showError}
      helperText={fieldError || helperText}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};
