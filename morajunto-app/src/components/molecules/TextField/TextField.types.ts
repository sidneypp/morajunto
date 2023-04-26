import { TextFieldProps as MuiTextFieldProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export type TextFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
} & MuiTextFieldProps &
  Omit<ControllerProps, "render" | "control">;
