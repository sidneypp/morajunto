import { ButtonProps } from "@mui/material";

export const MuiButton = {
  styleOverrides: {
    root: {
      textTransform: "capitalize" as const,
    },
  },
  defaultProps: {
    size: "large",
  } as Partial<ButtonProps>,
};
