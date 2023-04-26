import { styled } from "@mui/material";

export const Header = styled("header")(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
}));

export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);
