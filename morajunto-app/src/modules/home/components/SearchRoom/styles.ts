import { alpha, Box, styled } from "@mui/material";
import NextImage from "next/image";

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(1),
  flexDirection: "column",
  position: "relative",
  height: "80vh",
  marginLeft: "auto",
  marginRight: "auto",
  maxWidth: 1920,
}));

export const Image = styled(NextImage)({
  objectFit: "cover",
});

export const ImageShadow = styled(Box)(({ theme }) => ({
  position: "absolute",
  zIndex: 1,
  width: "100%",
  height: "100%",
  backgroundImage: `linear-gradient(${alpha(
    theme.palette.secondary.light,
    0.32
  )}, ${alpha(theme.palette.secondary.light, 0)})`,
}));

export const SearchWrapper = styled(Box)(({ theme }) => ({
  height: "100%",
  padding: theme.spacing(2),
  marginTop: theme.spacing(8),
  zIndex: 1,
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
  },
  [theme.breakpoints.up("lg")]: {
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: theme.spacing(12),
  },
}));
