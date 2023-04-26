import { Chip } from "@mui/material";
import { Controller } from "react-hook-form";
import * as S from "./ChipField.styles";
import { ChipFieldProps } from "./ChipField.types";

const ChipField = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  options = [],
  label,
}: ChipFieldProps) => {
  return (
    <>
      {label && <S.Label fontWeight="bold">{label}</S.Label>}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        shouldUnregister={shouldUnregister}
        render={({ field: { ...field }, fieldState: { error } }) => (
          <>
            <S.Wrapper>
              {options.map((option, index) => {
                const isChecked = field.value === option.value;
                return (
                  <Chip
                    key={index}
                    component="button"
                    value={option.value}
                    label={option.label}
                    color={error ? "error" : "default"}
                    variant={isChecked ? "filled" : "outlined"}
                    onClick={(event) =>
                      field.onChange(event.currentTarget.value)
                    }
                    sx={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: isChecked ? "grey[400]" : "grey[900]",
                    }}
                  />
                );
              })}
            </S.Wrapper>
            <S.Error>{error?.message}</S.Error>
          </>
        )}
      />
    </>
  );
};

export default ChipField;
