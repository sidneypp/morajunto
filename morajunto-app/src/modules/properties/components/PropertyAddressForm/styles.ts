import { Alert, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(14),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const ErrorAlert = styled(Alert)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
