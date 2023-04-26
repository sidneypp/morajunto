import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { PatternFormat } from "react-number-format";
import { NumberFieldProps } from "./NumberField.types";

const NumberField = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...props
}: NumberFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({
        field: { ref, onChange, value, ...field },
        fieldState: { error },
      }) => (
        <PatternFormat
          {...props}
          {...field}
          id={name}
          inputRef={ref}
          error={props.error ?? Boolean(error)}
          helperText={props.helperText ?? error?.message}
          value={value.formattedValue}
          onValueChange={(values) => {
            onChange(values);
          }}
          customInput={TextField}
        />
      )}
    />
  );
};

export default NumberField;
