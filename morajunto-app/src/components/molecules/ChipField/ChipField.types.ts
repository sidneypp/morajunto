import { TextFieldProps } from "@mui/material";
import { ControllerProps } from "react-hook-form";

export type Option = { label: string; value: string };

export type ChipFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  options?: Option[];
  label?: string;
} & Omit<TextFieldProps, "ref"> &
  Omit<ControllerProps, "render" | "control">;
