import { TextFieldProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export type MoneyFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChangeValue: any;
} & Omit<TextFieldProps, "ref"> &
  Omit<ControllerProps, "render" | "control">;
