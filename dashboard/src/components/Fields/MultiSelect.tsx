import React from "react";
import ReactSelect from "react-select";
import { Props } from "react-select/lib/Select";
import { OptionsType } from "react-select/lib/types";
import { SelectComponentsConfig } from "react-select/lib/components";
import { WithStyles, withStyles } from "@material-ui/core/styles";

import {
  Typography,
  TextField,
  Omit,
  Card,
  CardHeader,
  Chip,
  MenuItem
} from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";

export interface OptionType {
  label: string;
  value: string;
}

export type ValueType = Array<string>;

export interface MultuSelectProps
  extends Omit<Props, "value" | "options" | "onChange"> {
  label?: string;
  value: ValueType;
  options: OptionsType<OptionType>;
  onChange: (value: ValueType) => void;
}

type ClassKey = "paper" | "input" | "valueContainer" | "chip" | "placeholder";

export interface MultiSelectPropsWithStyles
  extends WithStyles<ClassKey, true>,
    MultuSelectProps {}

const enhance = withStyles<ClassKey>(
  theme => ({
    input: {
      display: "flex",
      padding: 0
    },
    valueContainer: {
      display: "flex",
      flexWrap: "wrap",
      flex: 1,
      alignItems: "center",
      overflow: "hidden"
    },
    chip: {
      margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`
    },
    placeholder: {
      position: "absolute",
      left: 2
    },
    paper: {
      position: "absolute",
      zIndex: 100,
      left: 0,
      right: 0
    }
  }),
  { withTheme: true }
);

function inputComponent({ inputRef, ...props }: any) {
  return <div ref={inputRef} {...props} />;
}

const components: SelectComponentsConfig<OptionType> = {
  NoOptionsMessage: props => (
    <CardHeader
      subheaderTypographyProps={{ variant: "body2" }}
      subheader={props.children}
      {...props.innerProps}
    />
  ),
  Menu: props => (
    <Card className={props.selectProps.classes.paper} {...props.innerProps}>
      {props.children}
    </Card>
  ),
  MultiValue: props => (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={props.selectProps.classes.chip}
      onDelete={props.removeProps.onClick}
      deleteIcon={<CancelIcon {...props.removeProps} />}
    />
  ),
  ValueContainer: props => (
    <div className={props.selectProps.classes.valueContainer}>
      {props.children}
    </div>
  ),
  Placeholder: props => (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  ),
  Option: props => (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  ),
  Control: props => (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          inputRef: props.innerRef,
          children: props.children,
          ...props.innerProps
        }
      }}
      {...props.selectProps.textFieldProps}
    />
  )
};

export const MultiSelect = enhance(
  ({
    classes,
    theme,
    label,
    helperText,
    error,
    value,
    options,
    onChange,
    ...rest
  }: MultiSelectPropsWithStyles) => {
    const selectStyles = {
      input: (base: any) => ({
        ...base,
        color: theme.palette.text.primary,
        "& input": {
          font: "inherit"
        }
      })
    };

    const selectValue = options
      ? options.filter(option => value.includes(option.value))
      : [];

    return (
      <ReactSelect
        {...rest}
        classes={classes}
        styles={selectStyles}
        isMulti={true}
        textFieldProps={{
          label,
          helperText,
          error,
          margin: "normal",
          InputLabelProps: {
            shrink: true
          }
        }}
        components={components}
        options={options}
        value={selectValue}
        onChange={(nextValue: any) => {
          if (!nextValue) {
            onChange([]);
            return;
          }

          if (Array.isArray(nextValue)) {
            onChange(nextValue.map(option => option.value));
            return;
          }

          onChange([nextValue.value]);
        }}
      />
    );
  }
);
