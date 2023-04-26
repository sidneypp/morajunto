import { styled } from "@mui/material";

export const Section = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: theme.palette.background.default,
  height: "calc(100vh - 376px)",
}));
