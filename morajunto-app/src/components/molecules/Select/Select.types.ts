import { SelectProps as MuiSelectProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export type SelectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;
  multiple: boolean;
} & MuiSelectProps &
  Omit<ControllerProps, "render" | "control">;
