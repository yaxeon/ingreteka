import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemText from "@material-ui/core/ListItemText";
import FormControl from "@material-ui/core/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { Select, SelectProps } from "formik-material-ui";

type Option = {
  label: string;
  value: any;
};

interface Props extends SelectProps {
  options?: Array<Option> | null;
  label: string;
}

export const SelectField: React.FC<Props> = ({ label, options, ...props }) => {
  const { multiple } = props;

  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        {...props}
        renderValue={(selected: any) => {
          if (!options) {
            return "";
          }

          return selected
            .map((value: string) => {
              const option = options.find(option => option.value === value);
              return option ? option.label : "not found";
            })
            .join(", ");
        }}
      >
        {options &&
          options.map(({ value, label }) => {
            if (multiple) {
              const selectValue = props.field.value ? props.field.value : [];
              return (
                <MenuItem key={value} value={value}>
                  <Checkbox checked={selectValue.indexOf(value) > -1} />
                  <ListItemText primary={label} />
                </MenuItem>
              );
            }

            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
};
