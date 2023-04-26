import { Toolbar as MuiToolbar, styled } from "@mui/material";

export const Form = styled("form")(({ theme }) => ({
  background: theme.palette.common.white,
  boxShadow: theme.shadows[1],
  marginBottom: theme.spacing(2),
}));

export const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  width: "100%",
  maxWidth: 1200,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "inherit",
  padding: theme.spacing(2),
  [theme.breakpoints.up("lg")]: {
    padding: 0,
  },
}));
