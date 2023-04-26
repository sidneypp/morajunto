import { Box, Container, styled } from "@mui/material";
import NextImage from "next/image";

export const Wrapper = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(5),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(3),
  },
}));

export const AdvertiseCard = styled(Box)(({ theme }) => ({
  borderRadius: theme.spacing(0.5),
  background: theme.palette.secondary.light,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(2),
  },
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export const ImageWrapper = styled(Box)(({ theme }) => ({
  flex: 1,
  position: "relative",
  minHeight: 216,
  [theme.breakpoints.up("md")]: {
    minHeight: 548,
  },
}));

export const Image = styled(NextImage)({
  objectFit: "fill",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: theme.spacing(2),
  gap: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    width: 432,
    padding: theme.spacing(4),
    justifyContent: "space-between",
  },
}));

export const DescriptionWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(3),
}));
