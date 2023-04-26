/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, CircularProgress, TextField } from "@mui/material";
import { VirtualListProvider } from "@providers";
import { Controller } from "react-hook-form";
import * as S from "./AutoCompleteField.styles";
import {
  AutoCompleteFieldProps,
  AutoCompleteProps,
} from "./AutoCompleteField.types";

function AutoCompleteField<T>({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  options = [],
  label,
  loading,
  loadingText = "Carregando...",
  noOptionsText = "Sem opções",
  renderOption = (props, option: any) =>
    [props, option.name] as React.ReactNode,
  isOptionEqualToValue = (option: any, value: any) =>
    option.name === value.name,
  getOptionLabel = (option: any) => option.name,
  groupBy,
  ...props
}: AutoCompleteFieldProps & AutoCompleteProps<T>) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          options={options}
          loading={loading}
          loadingText={loadingText}
          noOptionsText={noOptionsText}
          ListboxComponent={VirtualListProvider}
          PopperComponent={S.StyledPopper}
          renderInput={(params) => (
            <TextField
              {...params}
              {...props}
              id={name}
              inputRef={ref}
              label={label}
              error={Boolean(error)}
              helperText={error?.message}
              InputProps={{
                ...params.InputProps,
                ...props.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
          renderOption={renderOption}
          onChange={(e, value) => field.onChange(value)}
          isOptionEqualToValue={isOptionEqualToValue}
          getOptionLabel={getOptionLabel}
          groupBy={groupBy}
          disableClearable
          renderGroup={(params) => params as unknown as React.ReactNode}
        />
      )}
    />
  );
}

export default AutoCompleteField;
