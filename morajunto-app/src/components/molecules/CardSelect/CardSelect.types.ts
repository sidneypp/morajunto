import { ControllerProps } from "react-hook-form";

export type CardSelectProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
} & Omit<ControllerProps, "render" | "control">;
