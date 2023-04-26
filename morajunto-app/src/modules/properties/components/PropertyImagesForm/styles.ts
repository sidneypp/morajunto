import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Box, Card, styled } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import NextImage from "next/image";

export const Form = styled("form")(({ theme }) => ({
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(14),
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
}));

export const Wrapper = styled(Card)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: theme.spacing(1),
}));

export const ImageWrapperPreview = styled(Box)({
  position: "relative",
  width: "100%",
  height: 164,
  opacity: 0.5,
  marginBottom: 5,
});

export const ImageWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: 164,
  marginBottom: 10,
});

export const Image = styled(NextImage)({
  objectFit: "cover",
});

export const ContentWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
}));

export const DeleteIcon = styled(DeleteForeverOutlinedIcon)({
  width: "30px !important",
  height: "30px !important",
  position: "absolute",
  zIndex: 1,
  marginLeft: "-50px",
  background: "#fafafa",
  borderRadius: "5px",
  marginTop: "10px",
  cursor: "pointer",
});
export const LoadingIcon = styled(CircularProgress)({
  width: "30px !important",
  height: "30px !important",
  position: "absolute",
  marginLeft: "-50px",
  marginTop: "10px",
  zIndex: 1,
});

export const Upload = styled(Box)({
  textAlign: "center",
  paddingTop: 70,
  border: "3px dashed #eeeeee",
  backgroundColor: "#fafafa",
  color: "#bdbdbd",
  height: 215,
  cursor: "pointer",
});
export const Error = styled(Box)(({ theme }) => ({
  gap: theme.spacing(1),
  fontSize: "0.75rem",
  lineHeight: "1.66",
  letterSpacing: "0.03333em",
  textAlign: "left",
  marginTop: "10px",
  marginRight: "14px",
  marginBottom: "0",
  marginLeft: "14px",
  color: "#d32f2f",
}));
