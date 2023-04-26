import { alpha, styled, Typography } from "@mui/material";

export const Tag = styled(Typography)(({ theme }) => ({
  display: "inline-flex",
  justifyContent: "center",
  gap: theme.spacing(0.5),
  alignItems: "center",
  width: "fit-content",
  padding: theme.spacing(0.25, 1),
  fontWeight: theme.typography.fontWeightBold,
  border: `1px solid ${alpha(theme.palette.common.black, 0.4)}`,
  borderRadius: theme.spacing(0.5),
}));
