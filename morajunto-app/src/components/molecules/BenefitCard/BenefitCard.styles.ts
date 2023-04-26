import { alpha, Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  backgroundColor: alpha(theme.palette.secondary.light, 0.5),
  borderRadius: theme.spacing(1),
  padding: theme.spacing(3),
  [theme.breakpoints.up("md")]: {
    flexDirection: "column",
    backgroundColor: "transparent",
    padding: 0,
  },
  height: "100%",
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1.5),
}));
