import { TextField as MuiTextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { MoneyFieldProps } from "./MoneyField.types";

function formatarMoeda(value: string) {
  if (value == "") {
    return "0,00";
  }
  const valueFloat = parseFloat(value.replace(/\D/g, ""));
  let v = (valueFloat / 100).toFixed(2).toString();
  v = v.replace(".", ",");
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");

  return v;
}

const MoneyField = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  onChangeValue,
  ...props
}: MoneyFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, value, ...field }, fieldState: { error } }) => (
        <MuiTextField
          {...props}
          {...field}
          id={name}
          value={value}
          inputRef={ref}
          onChange={(values) => {
            field.onChange(formatarMoeda(values.currentTarget.value));
            onChangeValue(values.currentTarget.value);
          }}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default MoneyField;
