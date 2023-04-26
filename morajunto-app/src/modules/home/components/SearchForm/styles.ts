import { Paper, styled, Typography } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(5),
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    alignItems: "flex-start",
  },
}));

export const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  width: "100%",
  maxWidth: 600,
  flexDirection: "column",
  padding: theme.spacing(2),
  gap: theme.spacing(2),
}));

export const Title = styled(Typography)(({ theme }) => ({
  maxWidth: 300,
  textAlign: "center",
  [theme.breakpoints.up("sm")]: {
    textAlign: "left",
    maxWidth: 420,
  },
}));
