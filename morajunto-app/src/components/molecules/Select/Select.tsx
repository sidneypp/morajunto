/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuItem, Select as MuiSelect } from "@mui/material";
import { Controller } from "react-hook-form";
import * as S from "./Select.styles";
import { SelectProps } from "./Select.types";

const Select = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  options,
  multiple,
  ...props
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <>
          <MuiSelect
            {...props}
            {...field}
            multiple={multiple}
            id={name}
            value={field.value}
            onChange={(e) => {
              field.onChange(e.target.value);
            }}
            inputRef={ref}
            error={Boolean(error)}
          >
            {options.map((item: any) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </MuiSelect>
          <S.Error>{error?.message}</S.Error>
        </>
      )}
    />
  );
};

export default Select;
