import { alpha, Box, styled } from "@mui/material";

export const Background = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(5),
  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(5, 0, 7.5),
    backgroundColor: alpha(theme.palette.secondary.light, 0.5),
  },
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));
