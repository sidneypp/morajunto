import { Box, Chip, styled, Typography } from "@mui/material";

export const Label = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(1),
}));

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
}));

export const ChipButton = styled(Chip, {
  target: "button",
})(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[400]}`,
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
