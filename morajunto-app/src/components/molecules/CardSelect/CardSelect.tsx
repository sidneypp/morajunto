import { Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import * as S from "./CardSelect.styles";
import { CardSelectProps } from "./CardSelect.types";

const CardSelect = ({
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  label,
  icon,
}: CardSelectProps) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        shouldUnregister={shouldUnregister}
        render={({ field: { onChange, value } }) => (
          <S.CardSelect isSelected={value} onClick={() => onChange(!value)}>
            {icon}
            <Typography color="grey.600">{label}</Typography>
          </S.CardSelect>
        )}
      />
    </>
  );
};

export default CardSelect;
