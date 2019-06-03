import React from "react";
import customParseFormat from "dayjs/plugin/customParseFormat";
import dayjs from "dayjs";
import { FieldProps, getIn } from "formik";
import TextField, { TextFieldProps } from "@material-ui/core/TextField";

dayjs.extend(customParseFormat);

const convertToDate = (date: string) => {
  const dayObj = dayjs(date, "YYYY-MM-DD");

  if (dayObj.isValid()) {
    return dayObj.toISOString();
  }

  return null;
};

const convertFromDate = (date: string) => {
  const dayObj = dayjs(date);

  if (dayObj.isValid()) {
    return dayObj.format("YYYY-MM-DD");
  }

  return "";
};

type DateFieldProps = FieldProps & TextFieldProps;

export const DateField = ({
  field: { value, name },
  form: { setFieldValue, errors = {}, touched },
  ...rest
}: DateFieldProps) => {
  const fieldError = getIn(errors, name);
  const showError = getIn(touched, name) && !!fieldError;

  return (
    <TextField
      error={showError}
      helperText={showError ? fieldError : rest.helperText}
      value={convertFromDate(value) || ""}
      onChange={e => {
        setFieldValue(name, convertToDate(e.target.value));
      }}
      type="date"
      InputLabelProps={{
        shrink: true
      }}
      {...rest}
    />
  );
};
