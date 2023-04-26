import { TextField as MuiTextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { TextFieldProps } from "./TextField.types";

const TextField = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  ...props
}: TextFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <MuiTextField
          {...props}
          {...field}
          id={name}
          inputRef={ref}
          error={Boolean(error)}
          helperText={error?.message}
        />
      )}
    />
  );
};

export default TextField;
