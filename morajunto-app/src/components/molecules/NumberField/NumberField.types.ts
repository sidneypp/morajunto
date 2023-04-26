import { TextFieldProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";
import { PatternFormatProps } from "react-number-format";

export type NumberFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
} & PatternFormatProps &
  Omit<TextFieldProps, "ref"> &
  Omit<ControllerProps, "render" | "control">;
