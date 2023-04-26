import { Link } from "@atoms";
import { alpha, Box, Paper, styled, Typography } from "@mui/material";

export const Card = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const Wrapper = styled(Paper)({
  display: "flex",
});

export const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: 0,
});

export const ImageTag = styled(Typography)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.76),
  padding: theme.spacing(0.25, 1),
  fontWeight: theme.typography.fontWeightBold,
  position: "absolute",
  zIndex: 1,
  top: theme.spacing(1.5),
  left: theme.spacing(1.5),
  borderRadius: theme.spacing(0.5),
}));

export const ActionsWrapper = styled(Box)(({ theme }) => ({
  width: "fit-content",
  display: "flex",
  gap: theme.spacing(2),
  position: "absolute",
  left: 0,
  right: 0,
  margin: "auto",
  bottom: theme.spacing(-3),
  zIndex: 1,
}));

export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(4, 2, 2),
}));

export const PriceWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});

export const AddressWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
});

export const TagWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
