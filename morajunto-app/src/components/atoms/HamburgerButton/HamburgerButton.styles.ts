import { IconButton, styled } from "@mui/material";

export const HamburgerMenu = styled(IconButton)(({ theme }) => ({
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));
