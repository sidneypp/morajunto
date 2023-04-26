import { LinkProps } from "@mui/material";

export const MuiLink = {
  styleOverrides: {
    root: {
      fontWeight: 600,
    },
  },
  defaultProps: {
    underline: "none",
  } as Partial<LinkProps>,
};
