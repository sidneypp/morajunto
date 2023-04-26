import { Alert, Paper, styled } from "@mui/material";

export const Wrapper = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(4),
  width: "100%",
  maxWidth: theme.breakpoints.values.sm,
  padding: theme.spacing(4),
}));

export const Form = styled("form")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const LoginWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
});
