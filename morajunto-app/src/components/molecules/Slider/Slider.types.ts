import { ControllerProps } from "react-hook-form";

export type SliderProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueLabelFormat: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAriaValueText: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  step: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  valueLabelDisplay: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: any;
} & Omit<ControllerProps, "render" | "control">;
