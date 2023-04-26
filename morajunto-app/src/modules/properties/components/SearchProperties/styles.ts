import { Container, styled } from "@mui/material";

export const Wrapper = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    padding: 0,
  },
}));

export const PropertiesWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
});
