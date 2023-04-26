import { Box, Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
}));

export const TitleWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  marginBottom: theme.spacing(3),
}));
