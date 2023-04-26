import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: "100%",
}));
