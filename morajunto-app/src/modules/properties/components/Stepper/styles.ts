import { Container, styled } from "@mui/material";

export const Footer = styled("footer")(({ theme }) => ({
  position: "fixed",
  background: theme.palette.background.default,
  width: "100%",
  bottom: 0,
}));

export const Wrapper = styled(Container)(({ theme }) => ({
  padding: theme.spacing(0, 1),
}));

export const ActionsWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1.5, 1),
}));
