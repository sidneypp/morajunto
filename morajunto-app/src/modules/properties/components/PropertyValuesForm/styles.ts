import { Box, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(14),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const Error = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  fontSize: "0.75rem",
  lineHeight: "1.66",
  letterSpacing: "0.03333em",
  textAlign: "left",
  marginTop: "10px",
  marginRight: "14px",
  marginBottom: "0",
  marginLeft: "14px",
  color: "#d32f2f",
}));
