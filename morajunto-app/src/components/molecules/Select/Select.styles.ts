import { Box, styled } from "@mui/material";

export const Error = styled(Box)(({ theme }) => ({
  display: "row",
  gap: theme.spacing(1),
  color: "red",
}));
