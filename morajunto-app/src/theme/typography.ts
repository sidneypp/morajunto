import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography: TypographyOptions = {
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 600,
  h1: {
    fontSize: "2rem",
    lineHeight: 1.25,
    fontWeight: 700,
    "@media (min-width: 600px)": {
      fontSize: "3rem",
    },
  },
  h2: {
    fontSize: "1.5rem",
    lineHeight: 1.33,
    fontWeight: 600,
    "@media (min-width: 600px)": {
      fontSize: "2.25rem",
    },
  },
  h3: {
    fontSize: "1.25rem",
    lineHeight: 1.2,
    fontWeight: 600,
    "@media (min-width: 600px)": {
      fontSize: "1.875rem",
    },
  },
};
