import { AutocompleteProps, TextFieldProps } from "@mui/material";
import { ReactNode } from "react";
import { ControllerProps } from "react-hook-form";

export type AutoCompleteFieldProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label: string;
  helperText?: ReactNode;
} & TextFieldProps &
  Omit<ControllerProps, "render" | "control">;

export type AutoCompleteProps<T> = {
  getOptionLabel?: (option: T) => string;
} & Omit<
  AutocompleteProps<
    T,
    boolean | undefined,
    boolean | undefined,
    boolean | undefined
  >,
  "getOptionLabel" | "renderInput"
>;
