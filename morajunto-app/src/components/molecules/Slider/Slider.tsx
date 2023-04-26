import { Slider as MuiSlider } from "@mui/material";
import { Controller } from "react-hook-form";
import { SliderProps } from "./Slider.types";

const Slider = ({
  valueLabelFormat,
  getAriaValueText,
  step,
  valueLabelDisplay,
  name,
  rules,
  shouldUnregister,
  defaultValue,
  control,
  onChange,
}: SliderProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      shouldUnregister={shouldUnregister}
      render={({ field: { value } }) => (
        <MuiSlider
          id={name}
          valueLabelFormat={valueLabelFormat}
          getAriaValueText={getAriaValueText}
          onChange={onChange}
          valueLabelDisplay={valueLabelDisplay}
          step={step}
          value={value}
        />
      )}
    />
  );
};

export default Slider;
