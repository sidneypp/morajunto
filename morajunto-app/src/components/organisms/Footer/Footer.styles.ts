import { Container, styled } from "@mui/material";

export const Footer = styled("footer")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  background: theme.palette.secondary.light,
  padding: theme.spacing(5, 2),
}));

export const ContainerWrapper = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
}));

export const ActionLinks = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const LinkWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(0.5),
}));

export const Copyright = styled("div")({
  display: "flex",
  flexDirection: "column",
});
