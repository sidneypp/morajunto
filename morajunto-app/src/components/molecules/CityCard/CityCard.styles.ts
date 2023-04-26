import { Box, Card, styled } from "@mui/material";
import NextImage from "next/image";

export const Wrapper = styled(Card)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: theme.spacing(1),
}));

export const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: 164,
});

export const Image = styled(NextImage)({
  objectFit: "cover",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));
